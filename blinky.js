var tessel = require('tessel');
var gpio = tessel.port['GPIO'];

gpio.pwmFrequency(12000);

var i = 0;
setInterval(function () {
    gpio.pwm[0].pwmDutyCycle(i / 10); // "G4" on your silkscreen
    i = (i + 1) % 10;
}, 100);
