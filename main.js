// 1rem = 16px, base all measurements off of this

const CONTAINER = document.querySelector(".container");
const BOOKSHELF = document.querySelector(".bookshelf");
const BOOK_FORM = document.querySelector(".book-form");
const ADD_BOOK = document.querySelector(".add-book");
const CLOSE_BUTTONS = document.querySelectorAll(".close-button");
const SUBMIT_BOOK = document.querySelector("#submit-button")
const MY_LIBRARY = [];
const INPUTS = document.querySelectorAll("input");
const DESCRIPTION = document.querySelector(".description")

let coverParagraphs = new Array(5);

let currentId = 0;

function initialize() {
    BOOK_FORM.style.display = "none";

    SUBMIT_BOOK.addEventListener("click", submitBtnClick, false);
    SUBMIT_BOOK.addEventListener("click", () => {
        if (!INPUTS.forEach(element => element.validity.valid)) {
            return
        } else {
            AppendDataToObject();
        }
    });
    
    ADD_BOOK.addEventListener("click", () => {
        BOOK_FORM.style.display = "grid";
    })

    CLOSE_BUTTONS.forEach(button => {
        button.addEventListener ("click", () => {
            if (button.value === "form") {
                BOOK_FORM.style.display = "none";
            }
        })
    });
    MY_LIBRARY[currentId] = new Book(currentId, "Liam's Lullaby", "Liam Gonzales", "2024",  "Casual", "")
    addBookToLibrary();
    currentId++;
}

function submitBtnClick (event) {
    event.preventDefault();
    return console.log ("Form Submitted");
}

initialize();

function Book(id, name, author, year, genre, description) {
    this.id = id
    this.name = name;
    this.author = author;
    this.year = year;
    this.genre = genre;
    this.description = description;
    this.printCoverText = function () {
        let coverInfo = Object.values(this);
        for (let i = 0; i < coverParagraphs.length; i++ ){
            coverParagraphs[i] = document.createElement('p');
            coverParagraphs[i].innerText = coverInfo[i];
            
        }
    }
}

function addBookToLibrary () {
    let coverDiv = document.createElement("div");
    MY_LIBRARY[currentId].printCoverText();
    coverDiv.classList.add ("white-font", "book-cover");
    coverParagraphs.forEach(element => {
        coverDiv.appendChild(element);
    });
    BOOKSHELF.appendChild(coverDiv);    
}

function AppendDataToObject() {
    MY_LIBRARY[currentId] = new Book(currentId, INPUTS[0].value, INPUTS[1].value, INPUTS[2].value, INPUTS[3].value, DESCRIPTION.value);
    addBookToLibrary();
    currentId++;

    INPUTS.forEach(element => {
        element.value = "";
    });
}

