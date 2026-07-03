export function getElement(selector) {
  return document.querySelector(selector);
}

export function getAll(selector) {
  return [...document.querySelectorAll(selector)];
}

export function setText(selector, text) {
  const element = getElement(selector);

  if (element) {
    element.textContent = text;
  }
}

export function setHTML(selector, html) {
  const element = getElement(selector);

  if (element) {
    element.innerHTML = html;
  }
}

export function show(selector) {
  const element = getElement(selector);

  if (element) {
    element.style.display = "";
  }
}

export function hide(selector) {
  const element = getElement(selector);

  if (element) {
    element.style.display = "none";
  }
}

export function clear(selector) {
  setHTML(selector, "");
}
