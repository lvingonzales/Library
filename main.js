// 1rem = 16px, base all measurements off of this

const CONTAINER = document.querySelector(".container");
const BOOK_FORM = document.querySelector(".book-form");
const ADD_BOOK = document.querySelector(".add-book");
const CLOSE_BUTTONS = document.querySelectorAll(".close-button");

const MY_LIBRARY = [];

function initialize() {
    BOOK_FORM.style.display = "none";

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
}

initialize();

function Book() {
    this.name = name;
    this.picture = picture;
    this.description = description;
    this.year = year;
    this.author = author;
    this.genre = genre;
}

function addBookToLibrary () {

}

function bookDomCreation () {
    
}
