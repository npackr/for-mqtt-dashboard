# mqtt-data-dashboard

A dashboard for managing and analytics data from MQTT servers

Video Demo:


https://user-images.githubusercontent.com/24362894/176678777-8465e13a-8674-4ccc-99c6-989a0d9f0015.mp4



https://user-images.githubusercontent.com/24362894/176678789-b872f40f-f1be-4c42-9343-596569cb6663.mp4



https://user-images.githubusercontent.com/24362894/176678797-fbe7c406-51fe-4ee2-84b0-c4f556491646.mp4



https://user-images.githubusercontent.com/24362894/176678809-2252b213-a7cf-4a2e-bbbd-324ebfd68ad3.mp4



https://user-images.githubusercontent.com/24362894/176678812-d541efdb-13f5-40ac-8820-501cc460654d.mp4



https://user-images.githubusercontent.com/24362894/176678820-0075af93-5e29-4c82-8501-d7de0a2f5a4a.mp4



https://user-images.githubusercontent.com/24362894/176678822-ed5f0ed7-db6d-4e06-aca6-99369825f651.mp4



https://user-images.githubusercontent.com/24362894/176678826-d5d7a7d3-19e1-48b2-86b0-c75a6339a002.mp4



https://user-images.githubusercontent.com/24362894/176678832-a2ed51f3-9113-4056-9abb-871b7f8c3087.mp4



https://user-images.githubusercontent.com/24362894/176678843-db879670-634b-4033-81d5-de035cff9797.mp4



https://user-images.githubusercontent.com/24362894/176678851-e5d84c97-7ee3-4b9f-a675-d299959a1c18.mp4



https://user-images.githubusercontent.com/24362894/176678854-5461b12c-a7b0-46b5-b296-aa828f2260b9.mp4



## Documents

* SRS Document   : [SRS.md](/SRS.md)
* Gantt Chart    : [GANTT.md](/GANTT.md)
* UML Diagram    : [uml.mdj](/document/uml.mdj)
* Project Report : [report.docx](/document/report.docx)
* Presentation   : [presentation.pptx](/document/presentation.pptx)

## Local Dependencies

* [NodeJS](https://nodejs.org)

## Cloud Dependencies

* [Mosquitto](https://mosquitto.org/)
* [MongoDB Atlas](https://www.mongodb.com/atlas)

## How to use

**STEP 1.** Install all local dependencies

* To run this project offline, make sure you are installing the local client of cloud dependencies and changing the connection string as well

**STEP 2.** Clone this repository local and run `npm run setup` to install Node's necessary modules

**STEP 3.** Start the server

* Old dashboard (Bootstrap 3: Admin Bucket)
  * Use this command to run the old-dashboard server: `npm run old`
  * Then use a browser and go to the address: `localhost:7070` for old-dashboard
* New dashboard (Bootstrap 4: Vue Black Dashboard)
  * Use this command to run the new-dashboard server: `npm run new`
  * Then use a browser and go to the address: `localhost:8080` for new-dashboard
* MQTT Data syncing client: Edit your server infomation in `/client/client.js` and run `npm run client` for start the client
* Additional database communication scripts can be found in: `/client/mongodb_modules/realm_queries`

If an error occurs, try to remove your `node_modules` folder and use `npm run setup` to re-install Node's necessary modules and see if the problem can be fixed or not.
Try to leave a post in issues of this repository and wait for a reply if the problem still exists.

Thank you very much!
