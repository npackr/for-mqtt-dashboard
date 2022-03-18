// MONGODB REALM IMPORT
const Realm = require("realm");
const BSON = require("bson");
// MQTT.JS IMPORT
var mqtt = require('mqtt');
// GLOBAL VERIABLE
const data = [];

// REALM APP AND SCHEMA DEFINDING
const app = new Realm.App({ id: "mqtt-data-dashboard-djtyx" });
const payloadSchema = {
  name: "Payload",
  properties: {
    _id: "objectId",
    _partition: "string?",
    topic: "string",
    payload: "string",
    qos: "string",
    timestamp: "string"
  },
  primaryKey: "_id",
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

  // Add a listener that fires whenever one or more payload are inserted, modified, or deleted.
  payloads.addListener(payloadListener);

  // Add a couple of payload in a single, atomic transaction
  // Realm automatically sets the _partition property based on the partitionValue used to open the realm

  client.on('message', function (topic, payload, packet) {
    realm.write(() => {
      const payload1 = realm.create("Payload", {
        _id: new BSON.ObjectID(),
        topic: topic,
        payload: payload.toString(),
        qos: packet.qos.toString(),
        timestamp: new BSON.Timestamp().toString()
      });
    });
  })

  // Define the collection notification listener
  function payloadListener(payloads, changes) {
    // Update UI in response to inserted objects
    changes.insertions.forEach((index) => {
      let insertedPayload = payloads[index].topic + " : " + payloads[index].payload;
      console.log(`inserted task: ${JSON.stringify(insertedPayload, null, 2)}`);
      // ...
    });
  }
}

run().catch(err => {
  console.error(err)
});