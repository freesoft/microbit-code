// timer
//
// press A to set timer in second, press B to start timer
// once time is over, melody will be played.
// Note that setting shouldn't be over 9 seconds, as it's running as blocking way and any two digit display
// will trigger display scrolling, and that delays the timer.

let cnt = 0
input.onButtonPressed(Button.A, function () {
    cnt += 1
    basic.showNumber(cnt)
})
input.onButtonPressed(Button.B, function () {
    while (cnt > 0) {
        basic.pause(cnt * 1000)
        cnt = cnt - 1
        basic.showNumber(cnt)
    }
    music.beginMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
})
