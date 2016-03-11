
// var AlexaSkill = require('./AlexaSkill');
var FirstEventIntent = function(AlexaSkill, intent, session, response){
    speechText = "I'm so sorry to hear that. Would you like to add it to your story line?";
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
    // return {'output':speechOutput, 'reprompt':repromptOutput};

};


module.exports = FirstEventIntent;
