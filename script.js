const radioInputs = document.querySelectorAll('input[type="radio"]')
const arrayRadioInputs = Array.from(radioInputs)

const clearButton = document.querySelector('button')

clearButton.addEventListener('click', () => {
  arrayRadioInputs.forEach(input => {
    if (input.checked) {
      input.checked = false
      clearButton.style.display = 'none'
    }
  })
})

arrayRadioInputs.forEach(input => {
  input.addEventListener('click', () => {
    clearButton.style.display = 'block'
  })
})
