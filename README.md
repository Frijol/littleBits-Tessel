littleBits-Tessel
=================

Example code for littleBits + Tessel.

Connect like this:
![](https://31.media.tumblr.com/a7133464517066406fcc3ea4b8a06453/tumblr_inline_nb3gxwGGPG1s75tgz.jpg)

## Things to know about Tessel
* Tessel communicates with 3.3V.
* Tessel can be powered over USB from your computer at 5V or over the Vin header. The 'Vin' pin on the GPIO bank matches the input voltage– so 5V if powered from computer USB. Please see [Powering Tessel](https://tessel.io/docs/power).
* Tessel's 3.3V PWM pins are pins G4, G5, and G6 on the GPIO bank. Check out the PWM section of the [pin API docs](https://tessel.io/docs/hardwareAPI#pins) for more information.

## Things to know about LittleBits
* LittleBits is powered on 5V
* All LittleBits modules use 5V PWM to communicate over their signal pins.
* The middle pin is the signal pin. The side marked GND is ground.
* I'm using the [proto module](http://littlebits.cc/bits/proto-module).
