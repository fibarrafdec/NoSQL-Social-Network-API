# NoSQL-Social-Network-API

## Description
NoSQL-Social-Network-API is an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents:

- [Overview](#Overview)
- [The Challenge](#Challenge)
- [User Story](#User-Story)
- [Acceptance Criteria](#Acceptance-Criteria)
- [GIF](#GIF)
- [Walkthrough Video](#Walkthrough-Video)
- [Installation Instructions](#Installation-Instructions)
- [Usage Instructions](#Usage-Instructions)
- [Technologies Used](#Technologies-Used)
- [Questions](#Questions)
- [Credits](#Credits)
- [License](#License)

# Overview

## Challenge
"You’ll use Express.js for routing, a MongoDB database, and the Mongoose ODM. In addition to using the Express.js Links to an external site. and Mongoose Links to an external site. packages, you may also optionally use a JavaScript date library of your choice or the native JavaScript Date object to format timestamps.

Because this application won’t be deployed, you’ll also need to create a walkthrough video that demonstrates its functionality and all of the following acceptance criteria being met. You’ll need to submit a link to the video and add it to the README of your project."

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data.
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list.
```

## GIF

The following animation demonstrates the desired application functionality:
![Note Taker functionality](./Public/assets/images/18-nosql-homework-demo-01.gif)

## Walkthrough Video:
[Click Here to Watch](https://drive.google.com/file/d/1SOhVvnarDO4qcXN0eh3zKB87BdheWAt8/view?usp=sharing)

## Installation Instructions

1. Clone the Repository from GitHub (or) Download Zip Folder from Repository from GitHub.
2. Open the cloned (or downloaded) repository in any source code editor.
3. Open the integrated terminal of the document and complete the respective installation guides provided in "Built With" to ensure the cloned documentation will operate.

## Usage Instructions
1. Repository: Open documentation run 'npm i' and update '.env'.
2. Create a .env file in the root directory of the project and add the following variables:
3. Once the server is running, use a tool like Insomnia to test the API endpoints. 
4. Use Insomnia to test http://localhost:3001 with the following route end points API GET, POST, PUT, and DELETE routes for categories, products, and tags, ensuring successful creation, updating, and deletion of data in the database.

## Technologies Used
- JSON: [JSON](https://www.npmjs.com/package/json)
- Dynamic JavaScript
- Mongoose: [7.0.3](https://www.npmjs.com/package/mongoose)
- Express: [4.18.2](https://www.npmjs.com/package/express)
- Node.js: [16.18.1](https://nodejs.org/en/blog/release/v16.18.1/)
- Insomnia: [by Kong](https://insomnia.rest/)
- MongoDB: [Website](https://www.mongodb.com/)
- Visual Studio Code: [Website](https://code.visualstudio.com/)

## Questions?

If you have any questions related with thisNoSQL-Social-Network-API, feel free to reach me through:

Email:[fibarrafdec@gmail.com](fibarrafdec@gmail.com)

GitHub username:[fibarrafdec](fibarrafdec)
GitHub link: https://github.com/fibarrafdec

## Credits
This application has been created by © 2023 Fernando Ibarra [fibarrafdec](https://github.com/fibarrafdec).

## License & Copyright ©
This application is covered under the MIT License.
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

### Copyright © 2023 Fernando Ibarra
```md
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
