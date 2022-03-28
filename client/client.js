/*  MQTT CLIENT COMMUNICATION SCRIPT
    For receives data from MQTT server and push it to database
    
    Edited by: npackr
    Resources: https://docs.mongodb.com/realm/sdk/node/quick-start/
*/

// MONGODB REALM IMPORT
const Realm = require("realm");
const BSON = require("bson");

// MQTT.JS IMPORT
var mqtt = require('mqtt');

// GLOBAL VERIABLE
const data = [];

// REALM APP DEFINDS
const app = new Realm.App({ id: "mqtt-data-dashboard-djtyx" });

// DATA SCHEMA DEFINDS
const payloadSchema = {
  name: "Payload",
  properties: {
    _id: "objectId",
    _partition: "string?",
    topic: "string",
    payload: "string",
    qos: "string",
    timestamp: "date"
  },
  primaryKey: "_id",
  timestamps: true,
};

// MQTT CONNECT OPTIONS
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

// MQTT CONNECTION STRING - Use to connect the MQTT server
var client = mqtt.connect('mqtt://168.138.165.18', options);

// MQTT CONNECTED FUNCTION - Run after connected to server
client.on('connect', function () {
  console.log('Client connected to server!')
  // client subcribe topic
  client.subscribe('#', function (error, granted) {
    if (error) {
      console.log(error);
    } else {
      console.log(`Topic list was subscribed!`);
    }
  });
})

// MESSAGE ARRIVED FUNCTION - Function runs when receiving message from topic
async function run() {

  // REALM DATABASE COMMUNICATION FUNCTION
  const credentials = Realm.Credentials.serverApiKey("G1lEIVcWV2e32WAiizbLtvgraT2VnvuhUTZdkBItqZNvJeZuivIYEKLLtjcOsxxs");
  await app.logIn(credentials);

  const realm = await Realm.open({
    schema: [payloadSchema],
    sync: {
      user: app.currentUser,
      partitionValue: "pdb",
    },
  });

  // Get all payload in the realm
  const payloads = realm.objects("Payload");
  const startDate = { timestamp: new Date("2022-03-26T23:59:00") };
  const endDate = { timestamp: new Date("2022-03-28T23:59:00") };
  
  let task = payloads.filtered('timestamp >= $0 && timestamp < $1', startDate, endDate);
  console.log("Time: " + startDate.timestamp.toString() + " / " + endDate.timestamp.toString());
  console.log(`${JSON.stringify(task, null, 2)}`);

  // Add a listener that fires whenever one or more payload are inserted, modified, or deleted.
  payloads.addListener(payloadListener);

  // Payloads atomic transaction
  client.on('message', function (topic, payload, packet) {
    realm.write(() => {
      const payload1 = realm.create("Payload", {
        _id: new BSON.ObjectID(),
        topic: topic,
        payload: payload.toString().trim(),
        qos: packet.qos.toString(),
        timestamp: new Date(),
      });
    });
  })
}

run().catch(err => {
  console.error(err)
});

// Define the collection notification listener
function payloadListener(payloads, changes) {
  // Update UI in response to inserted objects
  changes.insertions.forEach((index) => {
    let insertedPayload = payloads[index].topic + " : " + payloads[index].payload + " / " + payloads[index].timestamp;
    console.log(`Inserted task: ${JSON.stringify(insertedPayload, null, 2)}`);
    // ...
  });
}