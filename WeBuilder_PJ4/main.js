const btnCreat = document.getElementById("creat");
const btnDelete = document.getElementById("btnDelete");
const canvas = document.getElementById("canvas");

// Retrieve stored elements from localStorage
let storedElements = JSON.parse(localStorage.getItem("item")) || [];
function callback() {
  let elements = {
    element: document.getElementById("element").value,
    color: document.getElementById("color").value,
    bgColor: document.getElementById("bgColor").value,
    width: parseInt(document.getElementById("width").value),
    height: parseInt(document.getElementById("height").value),
    margin_left: parseInt(document.getElementById("margin-left").value),
    margin_right: parseInt(document.getElementById("margin-right").value),
    text: document.getElementById("text").value,
  };

  let element = document.createElement(elements.element);
  element.style.marginTop = "10px";
  element.style.color = elements.color;
  element.style.backgroundColor = elements.bgColor;
  element.style.width = elements.width + "px";
  element.style.height = elements.height + "px";
  element.style.marginLeft = elements.margin_left + "px";
  element.style.marginRight = elements.margin_right + "px";
  element.textContent = elements.text;

  canvas.appendChild(element);
  // Save elements to localStorage
  storedElements.push(elements);
  localStorage.setItem("item", JSON.stringify(storedElements));
}
btnCreat.addEventListener("click", callback);

btnDelete.addEventListener("click", () => {
  let deletElement = canvas.lastChild;
  if (deletElement) {
    canvas.removeChild(deletElement);
    storedElements.pop(); //pop remove the last element in the array
    localStorage.setItem("item", JSON.stringify(storedElements));
  }
});

window.onload = function () {
  storedElements.forEach(function (elements) {
    let element = document.createElement(elements.element);
    element.style.color = elements.color;
    element.style.backgroundColor = elements.bgColor;
    element.style.width = elements.width + "px";
    element.style.height = elements.height + "px";
    element.style.marginLeft = elements.margin_left + "px";
    element.innerHTML = elements.text;
    canvas.appendChild(element);
  });
};
