# **Project implementation details**

Table of Contents

**[1.](#_Toc44797346)** **Introduction**

**[2.](#_Toc44797347)** **Directory tree and Run-time components**

[2.1](#_Toc44797348) Frameworks &amp; API 2]

[2.1.1](#_Toc44797349) Frontend dependencies:

[2.1.2](#_Toc44797350) Backend dependencies:

[2.2](#_Toc44797351) Compilation/ directory tree

[2.3](#_Toc44797352) Deployment


# Introduction

This software was implemented using the MERN stack using JetBrains WebStorm IDE.

All the code is written in JavaScript. This prevented context switching and bugs.

- M – Mongo
- E – Express
- R – React
- N – Node

**Database: MongoDB/ Mongoose**

I have used Mongoose to interact with my MongoDB cluster. The main advantage I gain from using MongoDB is the multiple instanced clusters, which stores the data in multiple data centers and ensures data integrity and availability.

I have used my personal MongoDB cluster for hosting a dummy database with information. See below for key. This key is currently being used in the project file. Due to confidentially reasons, I cannot hook the application the real database as it contains sensitive disabled user&#39;s information.

# Directory tree and Run-time components

## Frameworks &amp; API

**GraphQL**

Moreover, I have exposed GraphQL to the frontend so GraphQL queries can be used to fetch only the data that is needed. E.g. for a React component. This decreased load time for the web application.

**Cron &amp; Node mailer**

I&#39;m using Cron to schedule email reminders. Cron is set to execute at 12:00 every day where it checks all events records to see if there are any upcoming events. If so, the planner and testers are reminded.

**Canvas JS**

I&#39;m using Canvas JS to render the tester verified proportion, sales revenue and sales forecast data.

**Google API Maps Wrapper**

I&#39;m using Maps API to render a map based on tester address. This address is fetched from the tester record in the database collection. This address is encoded using a geocoder API request and the map with labels for testers are generated with their names.

### Full list of frontend dependencies at runtime:

See **package.json** in the project for a more detailed view.

**NOTE:** Use **npm install** to install the listed dependencies if you are using the file without node\_modules pre-installed. **This will be located in project file/node\_modules and project file/frontend/node\_modules.**

&quot;dependencies&quot;: {
&quot;chart.js&quot;: &quot;^1.1.1&quot;,
&quot;google-maps-react&quot;: &quot;^2.0.6&quot;,
&quot;react&quot;: &quot;16.8.6&quot;,
&quot;react-chartjs&quot;: &quot;^1.2.0&quot;,
&quot;react-dom&quot;: &quot;16.8.6&quot;,
&quot;react-router-dom&quot;: &quot;^4.3.1&quot;,
&quot;react-scripts&quot;: &quot;^3.4.1&quot;,
&quot;react-table&quot;: &quot;6.10.0&quot;
},

### Full list of backend dependencies at runtime:

See package.json in event for a more detailed view.

&quot;dependencies&quot;: {
&quot;bcryptjs&quot;: &quot;^2.4.3&quot;,
&quot;body-parser&quot;: &quot;^1.18.3&quot;,
&quot;dataloader&quot;: &quot;^1.4.0&quot;,
&quot;express&quot;: &quot;^4.16.4&quot;,
&quot;express-graphql&quot;: &quot;^0.7.1&quot;,
&quot;google-maps-react&quot;: &quot;^2.0.6&quot;,
&quot;graphql&quot;: &quot;^14.0.2&quot;,
&quot;jsonwebtoken&quot;: &quot;^8.4.0&quot;,
&quot;mongoose&quot;: &quot;^5.9.18&quot;,
&quot;node-cron&quot;: &quot;^2.0.3&quot;,
&quot;node-fetch&quot;: &quot;^2.6.0&quot;,
&quot;nodemailer&quot;: &quot;^6.4.10&quot;,
&quot;react-table&quot;: &quot;6.10.0&quot;
},


## Deployment

**Introduction**

The entire project can run on a **stand-alone computer**. The application is running on port 3000.

**Installation**

If using project file without node\_modules and dependencies, use npm install to install all dependencies.

Hence or otherwise, you can run the application by running npm start on the backend. (\main) and then running npm start on the frontend directory (\main and then running cd frontend terminal command)

**View live**

You can see the live website on the [http://localhost:3000/](http://localhost:3000/) on any browser. E.g. Chrome and on any Operating system. E.g. Windows 10

Ensure that you are running on 100% zoom on a 1920x1080 display screen for optimal/ intended display as these are settings that the system was intended for.

**Appendix**

See attached project file for source code.




 
