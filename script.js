const sidebar = document.querySelector("#sidebar"),
  handle = document.querySelector("#handle");
cart = document.querySelector(".cart");

const resize = (e) => {
  let newWidth = e.clientX - sidebar.offsetLeft;
  if (newWidth < 54) newWidth = 54;
  sidebar.style.width = `${newWidth}px`;
  newWidth < 90
    ? (cart.style.display = "none")
    : (cart.style.display = "block");
  if (newWidth > 260) stopResize();
};

const stopResize = () => {
  window.removeEventListener("mousemove", resize);
  window.removeEventListener("mouseup", stopResize);
};

const initResize = () => {
  window.addEventListener("mousemove", resize);
  window.addEventListener("mouseup", stopResize);
};

handle.addEventListener("mousedown", initResize);
