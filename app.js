
let labourP = document.querySelector("#labourP")
let apcP = document.querySelector("#apcP")
let pdpP = document.querySelector("#pdpP")




labourP.addEventListener("click", (e) => {
  let counterL = document.querySelector(".counterL")
  let result = Number(counterL.innerText) + 1
  counterL.innerText = result
  e.preventDefault()
})
apcP.addEventListener("click", (e) => {
  let counterL = document.querySelector(".counterP")
  let result = Number(counterL.innerText) + 1
  counterL.innerText = result
  e.preventDefault()
})
pdpP.addEventListener("click", (e) => {
  let counterL = document.querySelector(".counterA")
  let result = Number(counterL.innerText) + 1
  counterL.innerText = result
  e.preventDefault()
})


