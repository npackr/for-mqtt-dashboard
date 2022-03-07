# mqtt-data-dashboard

A dashboard for managing and analytics data from MQTT servers

## Documents

* SRS Document: [SRS.md](/SRS.md)
* Gantt Chart : [GANTT.md](/GANTT.md)

## Local Dependencies

* [NodeJS](https://nodejs.org)

## Cloud Dependencies

* [Mosquitto](https://mosquitto.org/) *(Private server)*
* [MongoDB Atlas](https://www.mongodb.com/atlas)

## How to use

**STEP 1.** Install all local dependencies

To run this project offline, make sure you are installing the local client of cloud dependencies and changing the connection string as well

**STEP 2.** Pull this repository local

**STEP 3.** Run the HTTP server

Use this command to run the old-dashboard server: `node old-dashboard.js`

Use this command to run the new-dashboard server:

  cd app/dashboard
  npm run dev

**STEP 4.** Access via browser

Use a browser and go to the address: `localhost:7070` for old-dashboard

Use a browser and go to the address: `localhost:3000` for new-dashboard
