import config from "./bs.web.conf";

config.specs = ["./test/specs/**/*.ts"];
config.exclude = [];
config.framework = "mocha";

exports.config = config;
