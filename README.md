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

**STEP 1. Install all local dependencies**

To run this project offline, make sure you are installing the local client of cloud dependencies and changing the connection string as well

**STEP 2. Pull this repository local**

**STEP 3. Run the HTTP server**

Use one of there commands in your terminal to run the HTTP server

* On macOS or Linux, run the app with this command: `DEBUG=app:* npm start`
* On Windows Command Prompt, use this command: `set DEBUG=app:* & npm start`
* On Windows PowerShell, use this command: `$env:DEBUG='app:*'; npm start` 

**STEP 4. Access via browser**

Use a browser and go to the address: `localhost:3000`
