var appendIntentAttributes = function (session,tmpIntent) {

var tmpArray = session.attributes.intent;
var array = [];

if (tmpArray && tmpArray !== 'undefined' && tmpArray.length > 0) {
    tmpArray.forEach(function(value){
        array.push(value);
    });
};

array.push(tmpIntent);


if (!session.attributes || session.attributes === 'undefined' || Object.keys(session.attributes).length === 0) {
	session.attributes = {};
};

session.attributes['intent'] = array;

};

var getEventAttributes = function (session,tmpEvent) {

if (!session.attributes || session.attributes === 'undefined' || Object.keys(session.attributes).length === 0) {
	session.attributes = {};
};

session.attributes['event'] = tmpEvent;

};

exports.appendIntentAttributes = appendIntentAttributes;
exports.getEventAttributes = getEventAttributes;