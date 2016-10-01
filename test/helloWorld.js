export default {
  'Demo test' : function (browser) {
    browser
    .url('http://localhost:3000')
    .waitForElementVisible('body', 1000)
    .waitForElementVisible('div', 1000)
    .pause(1000)
    .assert.containsText('#main', 'Welcome')
    .end();
  }
};
