const input = document.getElementById("input");
const button = document.getElementById("button");
const list = document.getElementById("list");

//Event Listener
button.addEventListener("click", () => {
  if (input.value.trim() != "") {
    const text = input.value;
    const listitem = document.createElement("li");
    listitem.innerHTML = `${text}
        <button class="delete">Delete</button>`;
    list.appendChild(listitem);
    input.value = " ";
  }
});

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete")) {
    event.target.parentElement.remove();
  }
});