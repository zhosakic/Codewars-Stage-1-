/* 
   OPTMYZR.COM - PPC AUTOMATION AND TOOLS
   ---------------------------------------
   Script by Optmyzr Inc. 2016
   
   This script checks whether an AdWords account has gone offline, possibly due to a declined credit card.
   It does this by checking if a selected metric (like impressions) has accrued some value over a chosen
   number of hours. The user can choose the number of hours to look back so that they can account for
   expected periods of non-activity (e.g. due to dayparting)
   
   How To Use:
   1. update the value for EMAIL_ADDRESS_TO_NOTIFY (use comma separated email addresses if you want to send a notification to several email addresses)
   2. update the value for NUM_HOURS_TO_CHECK (set this at least as long as the duration of expected hours of inactivity. E.g. if your ads are offline for 8 hours due to dayparting, set a value of at least 9 here)
   3. update the value for METRIC_TO_CHECK (normally you'd use 'Impressions' but you can also use 'Cost' or 'Conversions' if you prefer to be notofied when these metrics accrue no activity)
   
   This script does NOT make changes to your account. It only emails when an account appears to have become inactive.
*/

var EMAIL_ADDRESS_TO_NOTIFY = "email@email.com";
var NUM_HOURS_TO_CHECK = 3;
var METRIC_TO_CHECK = "Impressions";

var DEBUG = 0;

Date.prototype.yyyymmdd = function() {
    var yyyy = this.getFullYear().toString();
    var mm = (this.getMonth()+1).toString();
    var dd  = this.getDate().toString();
    return yyyy + (mm[1]?mm:"0"+mm[0]) + (dd[1]?dd:"0"+dd[0]);
};

function getDateRangeYesterdayToToday() {
    var currentDate = new Date();

    var tempDate = new Date();
    tempDate.setDate(tempDate.getDate()-1);

    var yesterdayDate = tempDate;

    return yesterdayDate.yyyymmdd() + "," + currentDate.yyyymmdd();
}

function sendEmailNotifications(emailAddresses, subject, body, emailType ) {

    if(emailType.toLowerCase().indexOf("warning") != -1) {
        var finalSubject = "[Warning] " + subject + " - " + AdWordsApp.currentAccount().getName() + " (" + AdWordsApp.currentAccount().getCustomerId() + ")"
    } else if(emailType.toLowerCase().indexOf("notification") != -1) {
        var finalSubject = "[Notification] " + subject + " - " + AdWordsApp.currentAccount().getName() + " (" + AdWordsApp.currentAccount().getCustomerId() + ")"
    }

    var finalBody = body;

    MailApp.sendEmail({
        to:emailAddresses,
        subject:  finalSubject,
        htmlBody: finalBody
    });

    if(DEBUG == 1) Logger.log("email sent to " + emailAddresses + ": " + finalSubject);

}

function main() {

    var dateRange =  getDateRangeYesterdayToToday();
    var currentDate = new Date();

    var queryText = "SELECT " + METRIC_TO_CHECK + ", DayOfWeek, HourOfDay FROM ACCOUNT_PERFORMANCE_REPORT DURING " + dateRange;
    var result = AdWordsApp.report(queryText);
    var rows = result.rows();

    var daysMapping = [];
    daysMapping["Sunday"] = 0;
    daysMapping["Monday"] = 1;
    daysMapping["Tuesday"] = 2;
    daysMapping["Wednesday"] = 3;
    daysMapping["Thursday"] = 4;
    daysMapping["Friday"] = 5;
    daysMapping["Saturday"] = 6;

    var impressionsByHour = {};

    while(rows.hasNext()) {
        var currentRow = rows.next();
        var dayFactor = daysMapping[currentRow["DayOfWeek"]];
        var hourFactor = parseFloat(currentRow["HourOfDay"]);
        var actualHour = dayFactor * 24 + hourFactor;
        // Logger.log(dayFactor +","+ hourFactor + " => " + currentRow["Impressions"]);
        impressionsByHour[actualHour] = currentRow["Impressions"];
    }

    // check if an entry exists for any of the last 6 hours
    var foundEntry = false;
    var numHoursToCheck = NUM_HOURS_TO_CHECK + 1;
    for(var i=1;i<numHoursToCheck;i++){
        var tempDate = new Date(currentDate.getTime());
        tempDate.setHours(tempDate.getHours() - i);
        var hourIndexToCheck = tempDate.getDay() * 24 + tempDate.getHours();
        if(impressionsByHour[hourIndexToCheck] != undefined){
            foundEntry = true;
            break;
        }
    }

    if(foundEntry){
        Logger.log("ALL OK! The Account seems to be active in the last " + NUM_HOURS_TO_CHECK + " hours.");

        var slack = new SlackAPI({
            webhookUrl : "https://hooks.slack.com/services/"
        });
        slack.sendMessage({
            channel: "#test",
            username: "adwords-bot",
            text: "You have impressions today! Account is Live and Healthy",
            icon_emoji: ":ghost:"
        });
    }
    else {
        var subject = "AdWords Account is getting no impressions";
        var body = "AdWords Account " + AdWordsApp.currentAccount().getName() + " ("  + AdWordsApp.currentAccount().getCustomerId() + ") You have received no impressions";
        sendEmailNotifications(EMAIL_ADDRESS_TO_NOTIFY, subject, body, "warning");
        Logger.log("WARNING: The Account seems to have had no impressions for the last " + NUM_HOURS_TO_CHECK + " hours.");

        var slack = new SlackAPI({
            webhookUrl : "https://hooks.slack.com/services/"

        });

        slack.sendMessage({
            "text": "Your AdWords account has not had any impressions in the past 3 hours!",
            "channel":"#test",
            "icon_url" : "https://ssl.gstatic.com/awfe30/aw3_cm_20160229_030026_RC4/cm/18EFA99EA70FA5326D7FAB2041DA3661.cache.png",
            "attachments": [
                {
                    "fallback": "Your AdWords account has not had any impressions in the past 3 hours!",
                    "color": "danger",
                    "fields": [
                        {
                            "title": "Account",
                            "value": AdWordsApp.currentAccount().getName(),
                            "short": true
                        },
                        {
                            "title": "Priority",
                            "value": "Critical",
                            "short": true
                        }
                    ]
                }
            ]
        });
    }
}

/***********************************
 * Slack Notifications API - v1.0
 * By: Russ Savage (@russellsavage)
 *
 * More complex messages or attachements can be sent as well. For more info,
 * check out https://api.slack.com/docs/formatting or
 * https://api.slack.com/docs/attachments
 ***********************************/
function SlackAPI(config) {
    this.webhookUrl = config.webhookUrl;

    // Send a message to slack. The config can
    // be as simple as a string or an object
    // for passing more complex messages.
    this.sendMessage = function(config) {
        if(typeof config == 'object') {
            postToSlack(this.webhookUrl, config);
        } else {
            postToSlack(this.webhookUrl, { text : config });
        }
    };

    // Take care of all the messy stuff like
    // retries and status codes.
    function postToSlack(url, payload) {
        var options = {
            method: 'POST',
            payload: JSON.stringify(payload),
            muteHttpExceptions: true
        };
        var retries = 3;
        while(retries > 0) {
            try {
                var resp = UrlFetchApp.fetch(url,options);
                if(resp.getResponseCode() == 200) {
                    return true;
                } else {
                    Logger.log(
                        Utilities.formatString(
                            "WARNING: Slack returned status code of %s and a message of: %s",
                            resp.getResponseCode(),
                            resp.getContentText()
                        )
                    );
                    Logger.log('Waiting 1 seconds then retrying...');
                    Utilities.sleep(1000);
                    retries--;
                }
            } catch(e) {
                Logger.log("ERROR: Something failed in UrlFetchApp. Retrying in 1 second...");
                Utilities.sleep(1000);
                retries--;
            }
        }
        throw "Either UrlFetchApp is broken or the Slack Webhook is not configured properly.";
    }
};








