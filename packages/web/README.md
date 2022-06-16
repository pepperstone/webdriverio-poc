## Public Website (x2)

## Prerequisites

1. Install [Node.js](https://nodejs.org/en/)
2. Install YARN: `npm install -g yarn`

## Installation

1. Run: `yarn install`

## Development

1. Run: `yarn run dev`

## Docker

```shell
docker build -t x2-trade-web .

docker run -p 3000:3000 x2-trade-web
```

## Copilot

First, set AWS environment variables or add a profile to your AWS credentials file.

Currently, Copilot is running under the "Pretrade (NonProduction)" account.

#### Setup

1. Install AWS Copilot:
   https://aws.github.io/copilot-cli/docs/getting-started/install/
2. Install Docker:
   https://www.docker.com/get-started/

```shell
# Setup the App (x2-trade-web)
copilot app init x2-trade-web \
  --domain pretrade.pepperstone.com

# Setup the service (Our NextJS App)
copilot svc init \
  --app x2-trade-web \
  --name frontend \
  --svc-type "Load Balanced Web Service" \
  --dockerfile ./Dockerfile

# Setup the Prod environment
copilot env init \
  --app x2-trade-web \
  --name prod \
  --default-config \
  --region ap-southeast-2 \
  --container-insights

# Deploy!!
copilot deploy
```

#### Update

```shell
# Deploy!!
copilot deploy
```
