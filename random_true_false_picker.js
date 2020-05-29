// Run 100 times and random pick true/false when button A is pressed, and see how many true or false it picks

let true_pickup_cnt = 0
let false_pickup_cnt = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 100; index++) {
        if (Math.randomBoolean()) {
            true_pickup_cnt += 1
        } else {
            false_pickup_cnt += 1
        }
    }
    basic.showString("True #:" + true_pickup_cnt + ", False #:" + false_pickup_cnt)
})
