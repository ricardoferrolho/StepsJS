exports.run = function(engine, args) {
    var driver = engine.driver;
    var webdriver = engine.webdriver;
    var selector = args.selector;
    var By = webdriver.By;
    
    var condition = null;
    
    if (selector) {
        condition = By.css(selector);
    }
    
    if (condition) {
        driver
            .findElements(condition)
            .then(function(elms) {
                console.log('FindElement: found ' + elms.length);
            });
    }
};