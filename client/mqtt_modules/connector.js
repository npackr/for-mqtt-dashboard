/*  MQTT CONNECTOR MAIN SCRIPT
    This script base on a article on HOCARM.ORG
    
    Edited by: npackr
    Resources: https://hocarm.org/mqtt-client-va-mqtt-broker/
*/

// MQTT GLOBAL VARIABLE - Use to access MQTT.JS framework
var mqtt = require('mqtt');

// CONNECT OPTIONS
var options = {
    port: 23640,
    host: '168.138.165.18',
    clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
    username: 'taikhoansv',
    password: 'MatKhauMQTT+075800',
    keepalive: 60,
    reconnectPeriod: 1000,
    protocolId: 'MQIsdp',
    protocolVersion: 3,
    clean: true
};

// CONNECTION STRING - Use to connect the MQTT server
var client = mqtt.connect('mqtt://168.138.165.18', options);

// TOPIC LIST - Use when the server doesn't allow subscribing a wildcard
var topic_list = {
    // Living room
    'PhongKhach/MayLanh': { qos: 1 },
    'PhongKhach/TV': { qos: 1 },
    'PhongKhach/AmThanh': { qos: 0 },
    'PhongKhach/AnhSang': { qos: 3 },

    // Kitchen
    'PhongBep/TuLanh': { qos: 0 },
    'PhongBep/BepDien': { qos: 0 },
    'PhongBep/ViSong': { qos: 0 },

    // Bedroom
    'PhongNgu/MayLanh': { qos: 1 },
    'PhongNgu/Den': { qos: 3 },
    'PhongNgu/MayNongLanh': { qos: 2 },

    // Garden
    'SanVuon/ChieuSang': { qos: 3 },
    'SanVuon/HoBoi': { qos: 2 },
}



// CONNECTED FUNCTION - Run after connected to server
client.on('connect', function () {
    console.log('Client connected to server!')
    // client subcribe topic
    client.subscribe('#', function (error, granted) {
        if (error) {
            console.log(error);
        } else {
            console.log(`Topic list  was subscribed!`);
        }
    });
})


// MESSAGE ARRIVED FUNCTION - Function runs when receiving message from topic
client.on('message', function (topic, payload, packet) {
    // Payload is Buffer
    console.log(`Topic: ${topic}, Message: ${payload.toString()}, QoS: ${packet.qos}`)

    // TODO: Send received messages to database for storing and use in future

    
})

console.log('Client was started!')