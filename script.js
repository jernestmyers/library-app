let myLibrary = [];

class LibraryBook {
    constructor(title, author, pages, readStatus) {
        this.title = title,
        this.author = author,
        this.pages = pages,
        this.readStatus = readStatus,
        this.libraryIndex = myLibrary.length
    }
}


// submits and resets the inputs for the book info
const userInputFields = document.querySelectorAll(`.userInputs`);
const inputArray = Array.from(userInputFields);
const addBookButton = document.querySelector(`#addBook`);

    addBookButton.addEventListener(`click`, (e) => {
        const inputsToReset = document.querySelector(`#addBookForm`)
        e.preventDefault();
        if (inputArray[0].value && inputArray[1].value && inputArray[2].value && inputArray[3].value) {
            addBookToLibraryArray(inputArray[0].value, inputArray[1].value, inputArray[2].value, inputArray[3].value)
            inputsToReset.reset();
        }
    })

// instantiates the book object constructor
function addBookToLibraryArray(title, author, pages, readStatus) {
    const bookToAdd = new LibraryBook(title, author, pages, readStatus);
    myLibrary.push(bookToAdd);
    const bookIndex = (myLibrary.length - 1);
    displayBook(bookIndex, myLibrary);
}

// creates a new row and columns to fill in with book info and includes a remove button and calls a function to build the readStatus selector
function displayBook(index, bookArray) {
    // for (let i = 0; i < bookArray.length; i++) {
        const tableDisplay = document.querySelector(`tbody`);
        const newRow = tableDisplay.insertRow();
        newRow.classList.add(`newBookInfo`)
        const newTitleColumn = newRow.insertCell(0);
        newTitleColumn.textContent = bookArray[index].title;
        const newAuthorColumn = newRow.insertCell(1);
        newAuthorColumn.textContent = bookArray[index].author;
        const newPagesColumn = newRow.insertCell(2);
        newPagesColumn.textContent = bookArray[index].pages;
        
        const newStatusColumn = newRow.insertCell(3);
        newStatusColumn.textContent = bookArray[index].readStatus;
        buildReadStatusSelector(newStatusColumn);
        
        const removeBookColumn = newRow.insertCell(4);
        const removeBookButton = document.createElement(`button`);
        removeBookColumn.appendChild(removeBookButton);
        removeBookButton.textContent = `Remove`;
        removeBookButton.classList.add(`removeBook`);
        removeBookButton.setAttribute(`id`, `${index}`);
        removeBookButton.addEventListener(`click`, removeBookFromLibrary);
    // }
}

// builds a selector to update the readStatus
function buildReadStatusSelector(columnToUpdate, index) {
    const updateStatusSelector = document.createElement(`select`);
    const option1 = document.createElement(`option`);
    const option2 = document.createElement(`option`);
    const option3 = document.createElement(`option`);
    const option4 = document.createElement(`option`);
    updateStatusSelector.appendChild(option1);
    updateStatusSelector.appendChild(option2);
    updateStatusSelector.appendChild(option3);
    updateStatusSelector.appendChild(option4);
    option1.textContent = `Update`
    option2.textContent = `Read it`;
    option3.textContent = `Reading it`;
    option4.textContent = `Wish to read`;
    updateStatusSelector.classList.add(`statusSelector`);
    columnToUpdate.appendChild(updateStatusSelector);
    updateStatusSelector.addEventListener(`change`, updateReadStatus);
}

// removes a book from display, the library array, and calls a function to update the indices on remaining book objects
function removeBookFromLibrary(e) {
    const bookIndexToRemove = e.currentTarget.id;
    const tr = e.currentTarget.parentElement.parentElement;
    const tbody = tr.parentElement;
    myLibrary.splice(bookIndexToRemove, 1);
    tbody.removeChild(tr);
    updateBookIndex(bookIndexToRemove);
}
function updateBookIndex(indexRemoved) {
    for (let i = indexRemoved; i < myLibrary.length; i++) {
        myLibrary[i].libraryIndex = i;
    }
};

// this calls the function to build the readStatus selector after updating the read status
// updateReadStatus.prototype = Object.create(Book);
function updateReadStatus(e) {
    const statusToUpdate = e.currentTarget.parentElement;
    const newReadStatus = e.currentTarget.value;
    const bookIndexToUpdate = statusToUpdate.nextElementSibling.firstChild.id;
    myLibrary[bookIndexToUpdate].readStatus = e.currentTarget.value;
    statusToUpdate.textContent = newReadStatus;
    buildReadStatusSelector(statusToUpdate);
}