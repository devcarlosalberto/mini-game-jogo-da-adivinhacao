window.onload = () => {
    const textCurrentAttempts = document.querySelector(".screen1 span")
    const textAttemptsForWin = document.querySelector(".screen2 h2")
    const btnTry = document.querySelector("#btnTry")
    const btnReset = document.querySelector("#btnReset")
    let randomNumber = generateRandomNumber()
    let xAttempts = 0

    btnTry.addEventListener("click", handleTryClick)
    btnReset.addEventListener("click", handleResetClick)

    function handleResetClick() {
        xAttempts = 0
        randomNumber = generateRandomNumber()
        textCurrentAttempts.innerText = "Você errou 0 vezes."
        showScreen(1)
    }

    function handleTryClick(event) {
        event.preventDefault()

        const inputNumber = document.querySelector("#number")
        const number = inputNumber.value
        inputNumber.value = ""

        if (number == randomNumber) {
            showScreen(2)
        } else {
            xAttempts++
            textCurrentAttempts.innerText = `Você errou ${xAttempts} vezes.`
        }
    }

    function showScreen(numberScreen) {
        const screen1 = document.querySelector(".screen1")
        const screen2 = document.querySelector(".screen2")
        const textAttempts = document.querySelector(".screen2 h2")

        if (numberScreen == 1) {
            screen2.classList.toggle("hide")
            screen1.classList.toggle("hide")
        } else {
            xAttempts++
            textAttemptsForWin.innerText = `Acertou em ${xAttempts} tentativas!`

            screen1.classList.toggle("hide")
            screen2.classList.toggle("hide")
        }
    }

    function generateRandomNumber() {
        return Math.round(Math.random() * 10)
    }
}
