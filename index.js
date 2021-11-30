var noun1InputBox = document.getElementById("noun1Input")
console.log(noun1InputBox.value)
var noun2InputBox = document.getElementById("noun2Input")
console.log(noun2InputBox.value)
var verbInputBox = document.getElementById("verbInput")
console.log(verbInputBox.value)

//collect noun 1 from user and enter into body text
var noun1Button = document.getElementById("noun1Button")
function handleN1ButtonClick() {
  console.log(document.querySelector("#noun1Input").value)
  var noun1 = document.querySelector("#noun1Input").value
  //document.querySelector(".noun1").textContent = noun1
  var nouns1 = document.querySelectorAll(".noun1")
    console.log(Array.from(nouns1))
  for (var i = 0; i< nouns1.length; i++) {
    nouns1[i].textContent = noun1
}
}
noun1Button.addEventListener("click", handleN1ButtonClick)

//collect noun 2 from user and enter into body text
var noun2Button = document.getElementById("noun2Button")
function handleN2ButtonClick() {
  console.log(document.querySelector("#noun2Input").value)
  var noun2 = document.querySelector("#noun2Input").value
  //document.querySelector(".noun2").textContent = noun2
    var nouns2 = document.querySelectorAll(".noun2")
    console.log(Array.from(nouns2))
  for (var i = 0; i< nouns2.length; i++) {
    nouns2[i].textContent = noun2
}
}
noun2Button.addEventListener("click", handleN2ButtonClick)

//collect verb from user and enter into body text
var verbButton = document.getElementById("verbButton")
function handleVButtonClick() {
  console.log(document.querySelector("#verbInput").value)
  var verb = document.querySelector("#verbInput").value
  //document.querySelector(".verb").textContent = verb
  var verbs = document.querySelectorAll(".verb")
    console.log(Array.from(verbs))
  for (var i = 0; i< verbs.length; i++) {
    verbs[i].textContent = verb
}
}
verbButton.addEventListener("click", handleVButtonClick)