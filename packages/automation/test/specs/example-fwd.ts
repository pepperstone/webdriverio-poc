import Login from "../pageobjects/ILogin";
import LoginPage from "../pageobjects/web/login-page";
import LoginScreen from "../pageobjects/mobile/login-screen";
import { RunType } from "../types";

const run = (login: Login) => {
  describe("login", () => {
    it("should be able to login using credentials", async () => {
      await login.login("tomsmith", "SuperSecretPassword!");
    });
  });
};

const runType = process.env.RUN_TYPE;

if (runType === RunType.WEB) {
  run(LoginPage);
} else if (runType === RunType.ANDROID || runType === RunType.IOS) {
  run(LoginScreen);
}
