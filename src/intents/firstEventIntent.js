
var helpers = require('../helpers/helpers.js');

var FirstEventIntent = function(AlexaSkill, intent, session, response){

    var eventSlot = intent.slots.Event,eventName;
    if (eventSlot && eventSlot.value){
        eventName = eventSlot.value.toLowerCase();
    }

    helpers.appendIntentAttributes(session,"FirstEventIntent");
    helpers.getEventAttributes(session,eventName);


    speechText = "I'm so sorry to hear about "+eventName+". Would you like to add it to your story line?";
    repromptText = "<speak>I'm not sure what the category is, you can say, " +
    "books <break time=\"0.2s\" /> " +
    "fashion <break time=\"0.2s\" /> " +
    "movie <break time=\"0.2s\" /> " +
    "kitchen.</speak>";
    speechOutput = {
        speech: speechText,
        type: AlexaSkill.speechOutputType.PLAIN_TEXT
    };
    repromptOutput = {
        speech: repromptText,
        type: AlexaSkill.speechOutputType.SSML
    };
    response.ask(speechOutput, repromptOutput);

};

module.exports = FirstEventIntent;
