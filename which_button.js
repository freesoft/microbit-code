// Display which button is pressed on micro:bit

input.onButtonPressed(Button.A, function () {
    basic.showString("A")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("A+B")
})
input.onPinPressed(TouchPin.P0, function () {
    basic.showString("P0")
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showString("P1")
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showString("P2")
})
