function doChange() {
    alert(window.event.target.value)
}

let sampleInput = document.querySelector("input[name='sample-input']")
sampleInput.addEventListener("change", doChange)

let changeEvent = new Event("change")

/* Chama o evento a partir de true or false sem precisar de interação */
sampleInput.dispatchEvent(changeEvent)


/* Remove o evento */
sampleInput.removeEventListener("change" doChange)