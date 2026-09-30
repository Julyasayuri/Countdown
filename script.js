
const input = document.getElementById("date-input")
const output = document.getElementById("output")

const ONE_SECOND = 1000
const ONE_MINUTE = ONE_SECOND * 60
const ONE_HOUR = ONE_MINUTE * 60
const ONE_DAY = ONE_HOUR * 24
const ONE_MONTH = ONE_DAY * 30
const ONE_YEAR = ONE_MONTH * 12

function calculateRemainingTime(referenceDate, todayDate) {
    let timeLeft = referenceDate - todayDate

    let yearsLeft = 0
    while (timeLeft > ONE_YEAR) {
        yearsLeft++
        timeLeft -= ONE_YEAR
    }

     let monthsLeft = 0
    while (timeLeft > ONE_MONTH) {
        monthsLeft++
        timeLeft -= ONE_MONTH
    }
    
    let daysLeft = 0
    while (timeLeft > ONE_DAY) {
        daysLeft++
        timeLeft -= ONE_DAY
    }

    let hoursLeft = 0
    while (timeLeft > ONE_HOUR) {
        hoursLeft++
        timeLeft -= ONE_HOUR
    }

    let minutesLeft = 0
    while (timeLeft > ONE_MINUTE) {
        minutesLeft++
        timeLeft -= ONE_MINUTE
    }

    let secondsLeft = 0
    while (timeLeft > ONE_SECOND) {
        secondsLeft++
        timeLeft -= ONE_SECOND
    }

    return {
        yearsLeft,
        monthsLeft,
        daysLeft,
        hoursLeft,
        minutesLeft,
        secondsLeft
    }
}

function textBuilder(remainingTime) {
    let result = []
    if (remainingTime.yearsLeft > 0) {
        result.push(`${remainingTime.yearsLeft > 1 ? "years" : "year"}`)
    }

    if (remainingTime.monthsLeft > 0) {
        result.push(`${remainingTime.monthsLeft > 1 ? "months" : "month"}`)
    }

    if (remainingTime.daysLeft > 0) {
        result.push(`${remainingTime.daysLeft > 1 ? "days" : "day"}`)
    }

    if (remainingTime.hoursLeft > 0) {
        result.push(`${remainingTime.hoursLeft > 1 ? "hours" : "hour"}`)
    }

    if (remainingTime.minutesLeft > 0) {
        result.push(`${remainingTime.hoursLeft > 1 ? "minutes" : "minute"}`)
    }

    if (remainingTime.secondsLeft > 0) {
        result.push(`${remainingTime.secondsLeft > 1 ? "seconds" : "second"}`)
    }
    
    }


const dataReferencia = new Date ("2028", "01", "01").getTime()
const dataHoje = new Date ().getTime()

let resultado = calculateRemainingTime(dataReferencia, dataHoje)
console.log(resultado)