exports.run = function(engine, args) {
    var driver = engine.driver;
    var message = args.message;
    
    if (message) {
        console.log('Stop: ' + message);
    }
    
    driver
        .quit()
        .then(function() {
           console.log('Stop: stopped');
           process.exit();
        });
};