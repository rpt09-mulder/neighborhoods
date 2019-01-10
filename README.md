# Project Name

> Rooms component for AirBnB-Clone

## Related Projects
  [[Proxy]](https://github.com/rpt09-mulder/proxy-allen) with all components running side-by-side


  - [Rooms (Current Component)](https://github.com/rpt09-mulder/rooms)
  - [Gallery](https://github.com/rpt09-mulder/gallery)
  - [Booking](https://github.com/rpt09-mulder/booking)
  - [Reviews](https://github.com/rpt09-mulder/reviews)

## Table of Contents
1. [Usage](#Usage)
1. [Live Example](#Live-Example)
1. [Requirements](#Requirements)
1. [Installation](#Installation)
    1. [Installaction for Development](#Installation-for-development)
    2. [Installation for Production](#Installation-for-development)
1. [API Routes](#API-Routes)
1. [Development](#Development)


## Usage

## Live Example
A live example can be found [here](http://rooms.4gk2mkr3wk.us-west-2.elasticbeanstalk.com/)

If the above link does not work, please get in contact with me and I can launch an EBS instance for you to explore.

## Requirements
- Node v10.12.0
- MongoDB v4.0.3

## Installation
### Installation for _Development_

After cloning the project, go to the root directory then install all required dependencies by running
```
npm install
```

If you haven't already, start your MongoDB service then seed the databse by running
```
npm run seed-database
```

Build the webpack bundle by running
```
npm run react-dev
```

Wait for the build to complete then start the server by running
```
npm run server-dev
```
and finally, on your browser go to http://localhost:3001

### Installation for _Production_

## API Routes
Each API route requires an ID

| Endpoint       | Type | Operation                                        |
|----------------|------|--------------------------------------------------|
| `/details/:id` | GET  | Get all room information matching the `:id`      |
| `/users/:id`   | GET  | Get user information for room matching the `:id` |

## Development


