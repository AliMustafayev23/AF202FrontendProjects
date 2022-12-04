let input = document.querySelector(".input");
let list = document.querySelector(".list");
let addBtn = document.querySelector(".add");
let deletAllBtn = document.querySelector(".deletall");

addBtn.addEventListener("click", function() {
    let textarea = document.createElement("div");
    textarea.className = "textarea";
    let text = document.createElement("p");

    text.className = "text";
    text.innerText = input.value;
    textarea.appendChild(text);
    let buttonside = document.createElement("div");
    buttonside.className = "buttonside";
    textarea.appendChild(buttonside);
    let deletBtn = document.createElement("button");
    deletBtn.innerText = "Delete";
    deletBtn.className = "delet";
    buttonside.appendChild(deletBtn);
    deletBtn.addEventListener("click", function() {
        textarea.innerHTML = " ";
    });
    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.className = "edit";
    buttonside.appendChild(editBtn);
    editBtn.addEventListener("click", function() {
        text.innerText = input.value;
        input.value = " ";
    });
    deletBtn.style.display = "none";
    editBtn.style.display = "none";
    let menulogo = document.createElement("i");
    menulogo.className = "fa-solid fa-bars";
    buttonside.appendChild(menulogo);
    list.appendChild(textarea);
    let menulogo2 = document.createElement("i");
    menulogo2.className = "fa-sharp fa-solid fa-xmark";
    buttonside.appendChild(menulogo2);
    menulogo2.style.display = "none";

    input.value = " ";
    deletAllBtn.addEventListener("click", function() {
        let qeydler = "Bütün qeydlər silindi";
        setTimeout(() => {
            list.innerHTML = qeydler;
        }, 2000);
        setTimeout(() => {
            list.innerHTML = "";
        }, 5000);
    });
    menulogo.addEventListener("click", function() {
        menulogo.style.display = "none";
        menulogo2.style.display = "inline";
        deletBtn.style.display = "inline";
        editBtn.style.display = "inline";
    });
    menulogo2.addEventListener("click", function() {
        menulogo.style.display = "inline";
        menulogo2.style.display = "none";
        deletBtn.style.display = "none";
        editBtn.style.display = "none";
    });
});