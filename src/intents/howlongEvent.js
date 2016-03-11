var helpers = require('../helpers/helpers.js');

var HowLongEvent = function(AlexaSkill, intent, session, response){


    helpers.appendIntentAttributes(session,"HowLongEvent");

	var speechText = "How long did the seizure last?";
	var repromptText = "How long was the seizure happenning for?";
	var speechOutput = {
		speech: speechText,
		type: AlexaSkill.speechOutputType.PLAIN_TEXT
	};
	var repromptOutput = {
		speech: repromptText,
		type: AlexaSkill.speechOutputType.PLAIN_TEXT
	};
	response.ask(speechOutput, repromptOutput);
};

module.exports = HowLongEvent;