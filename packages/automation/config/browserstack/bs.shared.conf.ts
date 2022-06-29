import { config } from "./wdio.shared.conf";

config.user = process.env.BROWSERSTACK_USERNAME;
config.key = process.env.BROWSERSTACK_ACCESS_KEY;

config.services = ["browserstack"];

export default config;
