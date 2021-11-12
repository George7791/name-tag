input.onButtonPressed(Button.A, function () {
    x += -1
})
input.onButtonPressed(Button.B, function () {
    x += 1
})
let y = 0
let random = 0
let x = 0
game.setScore(0)
let difficulty = 1000
basic.forever(function () {
    basic.clearScreen()
    led.plot(x, 4)
    led.plot(random, y)
    if (x == random && y == 4) {
        led.stopAnimation()
        game.gameOver()
    }
})
basic.forever(function () {
    random = randint(0, 4)
    y = 0
    for (let index = 0; index < 4; index++) {
        basic.pause(difficulty)
        led.plot(randint(0, 4), y)
        y += 1
    }
    difficulty += -10
    game.addScore(1)
})
