const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

const buttonResponse = () => {
    const inputValue = input.value;
    input.textContent = '';
    const listItem = document.createElement("li");
    const span = document.createElement("span");
    const buttonDelete = document.createElement("button");

    listItem.appendChild(span);
    listItem.appendChild(buttonDelete);

    span.textContent = inputValue;
    buttonDelete.textContent = "Delete";

    list.appendChild(listItem);

    const deleteListItem = () => {
        list.removeChild(listItem);

    };

    buttonDelete.addEventListener("click", deleteListItem);
};


button.addEventListener("click", buttonResponse);
