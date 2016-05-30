exports.run = function(engine, args) {
    var driver = engine.driver;
    var webdriver = engine.webdriver;
    var selector = args.selector;
    var By = webdriver.By;
    var trueBranch = args["true"];
    var falseBranch = args["false"];
    var condition = null;
    
    if (selector) {
        condition = By.css(selector);
    }
    
    if (condition) {
        driver
            .findElements(condition)
            .then(function(elms) {
                console.log('Condition: found ' + elms.length);
                
                if (elms.length > 0) {
                    engine.runStep(trueBranch, -1);
                } else if (falseBranch) {
                    engine.runStep(falseBranch, -1);
                }
            });
    }
};