// 1rem = 16px, base all measurements off of this

const CONTAINER = document.querySelector(".container");
const BOOKSHELF = document.querySelector(".bookshelf");
const BOOK_FORM = document.querySelector(".book-form");
const ADD_BOOK = document.querySelector(".add-book");
const CLOSE_BUTTONS = document.querySelectorAll(".close-button");
const SUBMIT_BOOK = document.querySelector("#submit-button")
const MY_LIBRARY = [];

let coverDiv = document.createElement("div");
let coverParagraphs = new Array(5);

let currentId = 0;

function initialize() {
    BOOK_FORM.style.display = "none";

    SUBMIT_BOOK.addEventListener("click", submitBtnClick, false);
    
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
        console.log(coverInfo);
        for (let i = 0; i < coverParagraphs.length; i++ ){
            coverParagraphs[i] = document.createElement('p');
            coverParagraphs[i].innerText = coverInfo[i];
            coverDiv.appendChild(coverParagraphs[i])
        }
    }
}

function addBookToLibrary () {
    MY_LIBRARY[0].printCoverText();
    coverDiv.classList.add ("white-font", "book-cover");
    BOOKSHELF.appendChild(coverDiv);
}

addBookToLibrary();
