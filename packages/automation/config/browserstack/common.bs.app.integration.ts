import config from "./bs.app.conf";

config.specs = ["./test/specs/**/*.ts"];
config.exclude = [];
config.framework = "mocha";

exports.config = config;
