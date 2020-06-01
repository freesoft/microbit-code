// The program shows heart image on LED at the beginning
// When button A is pressed, LED brightness change by 50, means 50 brighter than before.
// When button B is pressed, LED brightness change by -50, means 50 darker than before.
// LED value is between 0 and 255, but changing the brightness by 1 isn't really making any noticeable 
// change, changing by 50 to make things easiler. 

input.onButtonPressed(Button.A, function () {
    if (degrees < 205) {
        degrees += STEP
    } else {
        degrees = 255
    }
    led.setBrightness(degrees)
})
input.onButtonPressed(Button.B, function () {
    if (degrees > STEP) {
        degrees += 0 - STEP
    } else {
        degrees = 0
    }
    led.setBrightness(degrees)
})
let STEP = 0
let degrees = 0
degrees = 255
STEP = 50
led.setBrightness(degrees)
basic.showIcon(IconNames.Heart)
