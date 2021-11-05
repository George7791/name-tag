let x = 0
input.onButtonPressed(Button.A, function () {
	
})
input.onGesture(Gesture.LogoUp, function () {
    x += -1
})
input.onGesture(Gesture.TiltLeft, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
input.onGesture(Gesture.TiltRight, function () {
    x += 1
})
input.onGesture(Gesture.LogoDown, function () {
    x += 1
})
basic.forever(function () {
    basic.clearScreen()
    led.plot(x, 4)
})
basic.forever(function () {
	
})
