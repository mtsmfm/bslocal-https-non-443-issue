import { Builder } from "selenium-webdriver";
import { Local } from "browserstack-local";

const username = process.env.BROWSERSTACK_USERNAME;
const accessKey = process.env.BROWSERSTACK_ACCESS_KEY;

const bsLocal = new Local();

const bsLocalStart = (options: Parameters<typeof bsLocal.start>[0]) =>
  new Promise<void>((resolve) => {
    bsLocal.start(options, () => {
      resolve();
    });
  });

const bsLocalStop = () =>
  new Promise<void>((resolve) => {
    bsLocal.stop(() => {
      resolve();
    });
  });

const runTest = async () => {
  const driver = new Builder()
    .usingServer(`http://${username}:${accessKey}@hub.browserstack.com/wd/hub`)
    .withCapabilities({
      browserName: "Chrome",
      browserVersion: "114.0",
      "bstack:options": {
        os: "Windows",
        osVersion: "10",
        local: true,
      },
      acceptInsecureCerts: true,
    })
    .build();

  console.log("session id", (await driver.getSession()).getId());

  try {
    for (const url of [
      "https://www.cloudflare.com",
      "https://www.cloudflare.com:8443",
    ]) {
      console.log("url", url);
      await driver.get(url);
      const title = await driver.getTitle();
      console.log("title", title);

      if (
        title !==
        "Cloudflare - The Web Performance & Security Company | Cloudflare"
      ) {
        throw "something wrong";
      }
    }
  } finally {
    await driver.quit();
  }
};

const main = async () => {
  const res = await fetch("http://browserup-proxy:8080/proxy", {
    method: "POST",
  });

  const { port }: { port: number } = await res.json();

  await bsLocalStart({
    key: accessKey,
    forceLocal: true,
    forceProxy: true,
    "local-proxy-host": "browserup-proxy",
    "local-proxy-port": port.toString(),
  });

  try {
    await runTest();
  } finally {
    await bsLocalStop();
  }
};

main();
