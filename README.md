# BS local with HTTPS + non 443 issue

## How to run

```
$ echo 'BROWSERSTACK_USERNAME=YOUR_BROWSERSTACK_USERNAME' >> test-runner.env
$ echo 'BROWSERSTACK_ACCESS_KEY=YOUR_BROWSERSTACK_ACCESS_KEY' >> test-runner.env
$ docker compose up -d
$ docker compose run test-runner npm install
$ docker compose run test-runner npm run test
```

## Example output

```
session id b2f7ff449b9a610724769b2a21cb8d1df97996f7
url https://www.cloudflare.com
title Cloudflare - The Web Performance & Security Company | Cloudflare
url https://www.cloudflare.com:8443
/app/node_modules/selenium-webdriver/lib/error.js:524
    let err = new ctor(data.message)
              ^
WebDriverError: unknown error: net::ERR_SSL_PROTOCOL_ERROR
  (Session info: chrome=114.0.5735.91)
    at Object.throwDecodedError (/app/node_modules/selenium-webdriver/lib/error.js:524:15)
    at parseHttpResponse (/app/node_modules/selenium-webdriver/lib/http.js:601:13)
    at Executor.execute (/app/node_modules/selenium-webdriver/lib/http.js:529:28)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async thenableWebDriverProxy.execute (/app/node_modules/selenium-webdriver/lib/webdriver.js:745:17) {
  remoteStacktrace: 'Backtrace:\n' +
    '\tGetHandleVerifier [0x006C6E73+48323]\n' +
    '\t(No symbol) [0x00659661]\n' +
    '\t(No symbol) [0x00565308]\n' +
    '\t(No symbol) [0x00561AE3]\n' +
    '\t(No symbol) [0x00558C55]\n' +
    '\t(No symbol) [0x00559CBA]\n' +
    '\t(No symbol) [0x00558FB3]\n' +
    '\t(No symbol) [0x00558305]\n' +
    '\t(No symbol) [0x0055829C]\n' +
    '\t(No symbol) [0x00556ED6]\n' +
    '\t(No symbol) [0x00557638]\n' +
    '\t(No symbol) [0x00566B02]\n' +
    '\t(No symbol) [0x005BD0A1]\n' +
    '\t(No symbol) [0x005AA8DC]\n' +
    '\t(No symbol) [0x005BCAC2]\n' +
    '\t(No symbol) [0x005AA6D6]\n' +
    '\t(No symbol) [0x0058847C]\n' +
    '\t(No symbol) [0x0058957D]\n' +
    '\tGetHandleVerifier [0x0092FD5D+2575277]\n' +
    '\tGetHandleVerifier [0x0096F86E+2836158]\n' +
    '\tGetHandleVerifier [0x009696DC+2811180]\n' +
    '\tGetHandleVerifier [0x007541B0+626688]\n' +
    '\t(No symbol) [0x0066314C]\n' +
    '\t(No symbol) [0x0065F4B8]\n' +
    '\t(No symbol) [0x0065F59B]\n' +
    '\t(No symbol) [0x006521B7]\n' +
    '\tBaseThreadInitThunk [0x75C3FA29+25]\n' +
    '\tRtlGetAppContainerNamedObjectPath [0x77627A7E+286]\n' +
    '\tRtlGetAppContainerNamedObjectPath [0x77627A4E+238]\n'
}
```
