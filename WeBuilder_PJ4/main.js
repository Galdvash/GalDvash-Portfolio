class CanvasElement {
  constructor(
    element,
    color,
    bgColor,
    width,
    height,
    marginLeft,
    marginRight,
    text
  ) {
    this.element = element;
    this.color = color;
    this.bgColor = bgColor;
    this.width = width;
    this.height = height;
    this.marginLeft = marginLeft;
    this.marginRight = marginRight;
    this.text = text;
  }

  createElement() {
    let element = document.createElement(this.element);
    element.style.marginTop = "10px";
    element.style.color = this.color;
    element.style.backgroundColor = this.bgColor;
    element.style.width = this.width + "px";
    element.style.height = this.height + "px";
    element.style.marginLeft = this.marginLeft + "px";
    element.style.marginRight = this.marginRight + "px";
    element.textContent = this.text;
    return element;
  }
}

class Canvas {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.storedElements = JSON.parse(localStorage.getItem("item")) || [];
  }

  addElement(canvasElement) {
    let element = canvasElement.createElement();
    this.canvas.appendChild(element);
    this.storedElements.push(canvasElement);
    this.updateLocalStorage();
  }

  deleteElement() {
    let deleteElement = this.canvas.lastChild;
    if (deleteElement) {
      this.canvas.removeChild(deleteElement);
      this.storedElements.pop();
      this.updateLocalStorage();
    }
  }

  updateLocalStorage() {
    localStorage.setItem("item", JSON.stringify(this.storedElements));
  }

  loadStoredElements() {
    this.storedElements.forEach((elements) => {
      let canvasElement = new CanvasElement(
        elements.element,
        elements.color,
        elements.bgColor,
        elements.width,
        elements.height,
        elements.marginLeft,
        elements.marginRight,
        elements.text
      );
      let element = canvasElement.createElement();
      this.canvas.appendChild(element);
    });
  }
}

const canvas = new Canvas();

const btnCreate = document.getElementById("create");
const btnDelete = document.getElementById("btnDelete");

btnCreate.addEventListener("click", () => {
  let elements = {
    element: document.getElementById("element").value,
    color: document.getElementById("color").value,
    bgColor: document.getElementById("bgColor").value,
    width: parseInt(document.getElementById("width").value),
    height: parseInt(document.getElementById("height").value),
    marginLeft: parseInt(document.getElementById("margin-left").value),
    marginRight: parseInt(document.getElementById("margin-right").value),
    text: document.getElementById("text").value,
  };

  let canvasElement = new CanvasElement(
    elements.element,
    elements.color,
    elements.bgColor,
    elements.width,
    elements.height,
    elements.marginLeft,
    elements.marginRight,
    elements.text
  );

  canvas.addElement(canvasElement);
});

btnDelete.addEventListener("click", () => {
  canvas.deleteElement();
});

window.onload = function () {
  canvas.loadStoredElements();
};
