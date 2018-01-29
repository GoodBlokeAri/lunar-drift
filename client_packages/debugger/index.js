var consoleDebug;

const NATIVES = require('debugger/natives.js');

mp.events.add("guiReady", () => {
  consoleDebug = mp.browsers.new("package://debugger/debug.html");

  mp.events.add("browserDomReady", browser => {
    if (browser == consoleDebug) {

      mp.events.add("cefDebug", msg => {
        try {
          let answer = eval(msg);
          browser.execute(`addValue("${answer}");`)
        }
        catch (e) {
          browser.execute(`addError("${e}");`);
        }
      });

      mp.events.add("resetDebugger", () => {
        consoleDebug.reload(false);
      });
      
      mp.events.add("disableChat", toggle => {
        mp.gui.chat.activate(!toggle);
      });
    }
  });
});