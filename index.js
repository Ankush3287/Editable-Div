//Creating element

let divElem = document.createElement("div");

//Adding text to element
let val = localStorage.getItem("text");
let text;
if (val == null) {
  text = document.createTextNode("This is my elment. Click to edit");
}
 else {
  text = document.createTextNode(val);
}
divElem.appendChild(text);

//Setting element attributes

divElem.setAttribute("id", "elem");
divElem.setAttribute("class", "elem");
divElem.setAttribute(
  "style",
  "border: 2px solid black; width: 154px; margin: 34px; padding: 23px;"
);

//Inserting element in DOM

let container = document.querySelector(".container");
let first = document.getElementById("first");
container.insertBefore(divElem, first);

//Adding Event Listener
divElem.addEventListener("click", function () {
  let noTextArea = document.getElementsByClassName("textarea").length;
  if (noTextArea == 0) {
    let html = elem.innerHTML;
    divElem.innerHTML = `<textarea class="form-control textarea" id="textarea" rows="3"> ${html}</textarea>`;
  }

  //Listen for blur event
  let textArea = document.getElementById("textarea");
  textArea.addEventListener("blur", function () {
    elem.innerHTML = textArea.value;
    localStorage.setItem("text", textArea.value);
  });
});
