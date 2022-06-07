## Public Website (x2)

## Prerequisites

1. Install [Node.js](https://nodejs.org/en/)
2. Install YARN: `npm install -g yarn`

## Installation

1. Run: `yarn install`

## Development

1. Run: `yarn run dev`

## Docker

`docker build -t public-website-x2 .`

`docker run -p 3000:3000 public-website-x2`

## Copilot

### Setup the App (x2-trade-web)

`copilot app init x2-trade-web --domain pretrade.pepperstone.com`

### Setup the service (Our NextJS App)

`copilot svc init --app x2-trade-web --name frontend --svc-type "Load Balanced Web Service" --dockerfile ./Dockerfile`

### Setup the Prod environment

`copilot env init --app x2-trade-web --name prod --default-config --region ap-southeast-2 --container-insights`

### Deploy!!

`copilot deploy`
