# beartnt Places-to-Stay Module

> This is the more places to stay module for a mock airbnb apartment listing page. This is the development repo for creating the portion of the page that displays more places to stay nearby the main listing on the page.

## Related Projects

  - Reservation module: https://github.com/Mormont-team-6/Reservation-Service
  - Reviews module: https://github.com/Mormont-team-6/Customer-Reviews-Service
  - Photo-carousel module: https://github.com/teamName/repo
  - Places-to-stay proxy module: https://github.com/Mormont-team-6/places-to-stay-proxy

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> To make changes run npm run build to start web-pack for front in react development.
> To make and track changes on the server run npm start to start running the server with nodemon.

## CRUD API

|Action|Method|URL|
|------|------|---|
|Create a new user|POST|/api/more/users|
|Get the related listings for a specific listing|GET|/api/more/users/:id|
|Get all of the user's favorite lists|GET|/api/more/users/:id/favorites|
|Add a list to the user's favorites list|PUT|/api/more/users/:id/favorites|
|Add a listing to a list in the users favorite lists|PUT|/api/more/users/:id/:listname/:lid|
|Delete a user|DELETE|/api/more/users|

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

