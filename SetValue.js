exports.run = function(engine, args) {
    var driver = engine.driver;
    var webdriver = engine.webdriver;
    var selector = args.selector;
    var property = args.property;
    var value = args.value;
    var until = webdriver.until;
    var By = webdriver.By;
    var timeout = args.timeout || 5 * 1000;
    
    var setValue = function(elm) {
        driver
            .executeScript('return arguments[0].' + property + '="' + value + '"', elm)
            .then(function(res) {
                console.log('SetValue: value "' + res + '" set');                
            });
    }
    
    var condition = null;
    
    if (selector) {
        condition = until.elementLocated(By.css(selector), timeout);
    }

    if (condition) {
        driver
            .wait(condition)
            .then(setValue)
    }
};