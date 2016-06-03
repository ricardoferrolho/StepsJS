var Step = require('./Step');

function Condition() {    
}

Condition.prototype = new Step();
Condition.prototype.constructor = Condition;
Condition.prototype.super = Step.prototype;
Condition.prototype.run = function(engine, args) {
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
        return driver
            .findElements(condition)
            .then(function (elms) {
                console.log('Condition: found ' + elms.length);

                if (elms.length > 0) {
                    engine.executeStep(trueBranch, -1);
                } else if (falseBranch) {
                    engine.executeStep(falseBranch, -1);
                }
            });
    } else {
        return this.cancel('Unmet condition');
    }
};

module.exports = Condition;