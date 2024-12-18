// 1rem = 16px, base all measurements off of this

const CONTAINER = document.querySelector(".container");
const BOOKSHELF = document.querySelector(".bookshelf");
const BOOK_FORM = document.querySelector(".book-form");

const ADD_BOOK = document.querySelector(".add-book");
const CLOSE_BUTTONS = document.querySelectorAll(".close-button");
const SUBMIT_BOOK = document.querySelector("#submit-button")
const MY_LIBRARY = [];

const INPUTS = document.querySelectorAll("input");
const DESCRIPTION = document.querySelector(".description");

const checkIfValid = (element) => element;

let bookCovers = [];
let deleteButtons = [];
let currentPop = null;
let coverParagraphs = new Array(4);
let isValid = new Array(4);

class Book {
    constructor(name, author, year, genre, description){
        this.name = name;
        this.author = author;
        this.year = year;
        this.genre = genre;
        this.description = description;
        this.id;
        this.parentDiv;
    }

    printCoverText () {
        let coverInfo = Object.values(this);
        for (let i = 0; i < coverParagraphs.length; i++ ){
            coverParagraphs[i] = document.createElement('p');
            coverParagraphs[i].innerText = coverInfo[i];
        }
    }
}

function initialize() {
    BOOK_FORM.style.display = "none";

    SUBMIT_BOOK.addEventListener("click", submitBtnClick, false);
    SUBMIT_BOOK.addEventListener("click", () => {
        for (let i = 0; i < isValid.length; i++) {
            if (INPUTS[i].validity.valid){
                isValid[i] = true;
            } else {
                isValid[i] = false;
            }
        }

        if (!isValid.every(checkIfValid)) {
            return;
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

    MY_LIBRARY.push (new Book("Liam's Lullaby", "Liam Gonzales", "2024",  "Casual", ""));
    addBookToLibrary();
}

initialize();

function submitBtnClick (event) {
    event.preventDefault();
}

function addBookToLibrary () {
    setId();
    MY_LIBRARY[currentPop].printCoverText();

    bookCovers.push (document.createElement("div"));
    bookCovers[currentPop].classList.add ("white-font", "book-cover");
    MY_LIBRARY[currentPop].parentDiv = bookCovers[currentPop];
    BOOKSHELF.appendChild(bookCovers[currentPop]);

    addCoverButtons();

    coverParagraphs.forEach(element => {
        bookCovers[currentPop].appendChild(element);
    });  
}

function addCoverButtons() {
    let BUTTON_WRAPPER = document.createElement("div");
    BUTTON_WRAPPER.classList.add("button-wrapper");
    bookCovers[currentPop].appendChild(BUTTON_WRAPPER);

    let DELETE_BUTTON = (document.createElement("img"));
    DELETE_BUTTON.classList.add("delete-button");
    DELETE_BUTTON.src = "./images/utility/trash.svg";
    deleteButtons.push(DELETE_BUTTON);
    DELETE_BUTTON.addEventListener("click", () => {
        deleteBook(deleteButtons.indexOf(DELETE_BUTTON));
    });
    BUTTON_WRAPPER.appendChild(DELETE_BUTTON);

    let READ_TOGGLE = document.createElement("img");
    READ_TOGGLE.classList.add ("read-button");
    READ_TOGGLE.src = "./images/utility/check-empty.svg";
    READ_TOGGLE.setAttribute("value", "unread");
    READ_TOGGLE.addEventListener ("click", () => {
        if (READ_TOGGLE.getAttribute("value") === "unread"){
            READ_TOGGLE.setAttribute("value", "read");
            READ_TOGGLE.src = "./images/utility/Check-filled.svg";
        } else {
            READ_TOGGLE.setAttribute("value", "unread");
            READ_TOGGLE.src = "./images/utility/check-empty.svg";
        }
    });
    BUTTON_WRAPPER.appendChild(READ_TOGGLE);
}

function setId() {
    if (currentPop === null ) {
        currentPop = parseInt(0);
    } else {
        currentPop = MY_LIBRARY.length - 1;
    }
    
    MY_LIBRARY[currentPop].id = currentPop;
}

function AppendDataToObject() {
    MY_LIBRARY.push (new Book(INPUTS[0].value, INPUTS[1].value, INPUTS[2].value, INPUTS[3].value, DESCRIPTION.value));
    addBookToLibrary();
    INPUTS.forEach(element => {
        element.value = "";
    });
}

function deleteBook (index) {
    if (confirm('Are you sure you want to delete: ' + MY_LIBRARY[index].name + "?")) {
        MY_LIBRARY[index].parentDiv.remove();
        MY_LIBRARY.splice(index, 1);
        deleteButtons.splice(index, 1);
        bookCovers.splice(index, 1);
    } else {
        return;
    }
}
