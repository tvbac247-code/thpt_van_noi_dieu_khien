input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(5)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(4)
})
radio.setGroup(113)
