let headCount = 0
let tailsCount = 0

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#flip').addEventListener('click', function(e){
        if(Math.random() > 0.5) {
            console.log(`heads`)
            let pennyFace = document.querySelector(`#pennyFace`)
            pennyFace.src = 'assets/images/penny-heads.jpg'
            pennyFace.alt = '2005 penny heads'
            document.querySelector(`#message`).textContent = 'You Flipped Heads!'
            headCount++
            document.querySelector('#heads').textContent = headCount
            document.querySelector(`#heads-percent`).textContent = Math.round(headCount/(headCount + tailsCount) * 100) + `%`

        }else {
            console.log(`tails`)
            document.querySelector(`#tails-percent`).textContent = Math.round(tailsCount/(headCount + tailsCount) * 100) + `%`
        }
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell
  
    })
     document.querySelector('#clear').addEventListener('click', function(e){
        headCount = 0
        tailsCount = 0
        document.querySelector('#message') = "Let's get Rolling!"
        document.querySelector('#heads').textContent = 0
        document.querySelector('#tails').textContent = 0
        document.querySelector('#heads-percent').textContent = '0%'
        document.querySelector('#tails-percent').textContent = '0%'
        document.querySelector('#pennyFace').src = 'assets/images/penny-heads.jpg'
    })
})