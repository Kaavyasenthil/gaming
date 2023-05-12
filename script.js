let tog = 1 //toggles between p1 and p2
let rollingSound = new Audio('die.mp3') //die rolling sound
let winSound = new Audio('win.mp3') //cherish



let p1s = 0
let p2s = 0

//describing about player 1 when he/she will climb up and get down
function play(player, psum, correction, num) { //take 4 argument
    let sum //sum is by default it is zero
    if (psum == 'p1s') {

        p1s = p1s + num

        if (p1s > 100) {
            p1s = p1s - num
            // sum = p1sum
        }
       
        if (p1s == 1) {
            p1s = 38
        }
        if (p1s == 4) {
            p1s = 14
        }
        if (p1s == 9) {
            p1s = 31
        }
        if (p1s == 17) {
            p1s = 7
        }
        if (p1s == 21) {
            p1s = 42
        }
        if (p1s == 28) {
            p1s = 84
        }
        if (p1s == 51) {
            p1s = 67
        }
        if (p1s == 54) {
            p1s = 34
        }
        if (p1s == 62) {
            p1s = 19
        }
        if (p1s == 64) {
            p1s = 60
        }
        if (p1s == 72) {
            p1s = 91
        }
        if (p1s == 80) {
            p1sum = 99
        }
        if (p1s == 87) {
            p1s = 36
        }
        if (p1s == 92) {
            p1s = 73
        }
        if (p1s == 98) {
            p1s = 80
        }

        sum = p1s



    }
//same here but for player 2
    if (psum == 'p2s') {

        p2s = p2s + num

        if (p2s > 100) {
            p2s = p2s - num
            // sum = p1s
        }
        

        if (p2s == 1) {
            p2s = 38
        }
        if (p2s == 4) {
            p2s = 14
        }
        if (p2s == 9) {
            p2s = 31
        }
        if (p2s == 17) {
            p2s = 7
        }
        if (p2s == 21) {
            p2s = 42
        }
        if (p2s == 28) {
            p2s = 84
        }
        if (p2s == 51) {
            p2s = 67
        }
        if (p2s == 54) {
            p2s = 34
        }
        if (p2s == 62) {
            p2s = 19
        }
        if (p2s == 64) {
            p2s = 60
        }
        if (p2s == 72) {
            p2s = 91
        }
        if (p2s == 80) {
            p2s = 99
        }
        if (p2s == 87) {
            p2s = 36
        }
        if (p2s == 92) {
            p2s = 73
        }
        if (p2s == 98) {
            p2s = 80
        }

        sum = p2s



    }


    document.getElementById(`${player}`).style.transition = `linear all .5s`





    if (sum < 10) {

        document.getElementById(`${player}`).style.left = `${(sum - 1) * 62}px`
        document.getElementById(`${player}`).style.top = `${-0 * 62 - correction}px`


    }
 //win movement and audio 
    else if (sum == 100) {
        winSound.play()
        if (player == 'p1') {
            alert("Red Won!!") 
        }
        else if (player == 'p2') {
            alert("Green Won!!")
        }
        location.reload()
    }

    else {

        numarr = Array.from(String(sum))
        n1 = eval(numarr.shift())
        n2 = eval(numarr.pop())
        // console.log(n1, n2)

        if (n1 % 2 != 0) {

            if (n2 == 0) {
                document.getElementById(`${player}`).style.left = `${(9) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
            }
            else {
                document.getElementById(`${player}`).style.left = `${(9 - (n2 - 1)) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`

            }

        }
        else if (n1 % 2 == 0) {
            if (n2 == 0) {

                document.getElementById(`${player}`).style.left = `${(0) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
            }
            else {

                document.getElementById(`${player}`).style.left = `${(n2 - 1) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`
            }

        }
}
}
document.getElementById("diceBtn").addEventListener("click", function () {
    rollingSound.play()
    num = Math.floor(Math.random() * (6 - 1 + 1) + 1) //random number will be generated
    document.getElementById("dice").innerText = num 

    if (tog % 2 != 0) { //if tog is odd red moves
        document.getElementById('tog').innerText = "Green's Turn "
        play('p1', 'p1s', 0, num) //p1 is red

    }

    else if (tog % 2 == 0) { //if tog is even green moves 
        document.getElementById('tog').innerText = "Red's Turn "

        play('p2', 'p2s', 55, num) //p2 is green
    }

    tog = tog + 1 
})