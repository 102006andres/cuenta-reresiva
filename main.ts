input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 4; index++) {
        music.playTone(440, music.beat(BeatFraction.Quarter))
        basic.showNumber(3 - index)
    }
    music.playTone(392, music.beat(BeatFraction.Half))
    basic.showString("Ya")
})
