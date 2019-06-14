const request = require('request');
const activeMQ = require('../brokers/ActiveMQ_Original/activeMQOriginal');
const kafka = require('../brokers/Kafka/kafka');
const artemis = require('../brokers/ActiveMQ_Artemis/activeMQArtemis');

let brokerChoice = "activeMQ";
var brokerConfig;

if (brokerChoice === "activemq") {
    brokerConfig = activeMQ.REST;
} else if (brokerChoice === "kafka") {
    brokerConfig = kafka.REST;
} else if (brokerChoice === "artemis") {
    brokerConfig = artemis.REST;
}

exports.consume = request(brokerConfig.consumeURL, (err, res, body) => {
    console.log(body);
});

exports.post = request(brokerConfig.postURL, (err, res, body) => {
    console.log(body);
});
