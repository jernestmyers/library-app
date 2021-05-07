let myLibrary = [];

function Book(title, author, pages, readStatus) {
        this.title = title,
        this.author = author,
        this.pages = pages,
        this.readStatus = readStatus,
        this.libraryIndex = myLibrary.length
}

function addBookToLibraryArray(title, author, pages, readStatus) {
    const bookToAdd = new Book(title, author, pages, readStatus);
    myLibrary.push(bookToAdd);
    const bookIndex = (myLibrary.length - 1);
    displayBook(bookIndex, myLibrary);
}

function displayBook(index, bookArray) {
    // for (let i = 0; i < bookArray.length; i++) {
        const tableDisplay = document.querySelector(`tbody`);
        const newRow = tableDisplay.insertRow();
        const newTitleColumn = newRow.insertCell(0);
        const newAuthorColumn = newRow.insertCell(1);
        const newPagesColumn = newRow.insertCell(2);
        const newStatusColumn = newRow.insertCell(3);
        const removeBookColumn = newRow.insertCell(4);
        const removeBookButton = document.createElement(`button`);
        const changeStatusButton = document.createElement(`button`);
        changeStatusButton.textContent = `Update`;
        newStatusColumn.textContent = bookArray[index].readStatus;
        newStatusColumn.appendChild(changeStatusButton);
        changeStatusButton.addEventListener(`click`, changeReadStatus);
        newTitleColumn.textContent = bookArray[index].title;
        newAuthorColumn.textContent = bookArray[index].author;
        newPagesColumn.textContent = bookArray[index].pages;
        removeBookColumn.appendChild(removeBookButton);
        removeBookButton.textContent = `Remove`;
        removeBookButton.classList.add(`removeBook`);
        removeBookButton.setAttribute(`id`, `${index}`);
        removeBookButton.addEventListener(`click`, removeBookFromLibrary);
    // }
}

const userInputFields = document.querySelectorAll(`.userInputs`);
const inputArray = Array.from(userInputFields);
const addBookButton = document.querySelector(`#addBook`);
// const buttonToRemoveBook = document.querySelectorAll(`.removeBook`);

addBookButton.addEventListener(`click`, (e) => {
    e.preventDefault();
    // console.log(inputArray[0].value);
    // console.log(inputArray[1].value);
    // console.log(inputArray[2].value);
    // console.log(inputArray[3].value);
    if (inputArray[0].value && inputArray[1].value && inputArray[2].value && inputArray[3].value) {
        addBookToLibraryArray(inputArray[0].value, inputArray[1].value, inputArray[2].value, inputArray[3].value)
    }
})

function removeBookFromLibrary(e) {
    const bookIndexToRemove = e.currentTarget.id;
    const tr = e.currentTarget.parentElement.parentElement;
    const tbody = tr.parentElement;
    // console.log(e.currentTarget.id);
    // console.log(tr);
    // console.log(tbody);
    myLibrary.splice(bookIndexToRemove, 1);
    tbody.removeChild(tr);
    updateBookIndex(bookIndexToRemove);
}

function updateBookIndex(indexRemoved) {
    for (let i = indexRemoved; i < myLibrary.length; i++) {
        myLibrary[i].libraryIndex = i;
    }
};

function changeReadStatus(e) {
    console.log(`here`);
}

// userInputFields.forEach((userInputFields) => {
    // userInputFields.addEventListener(`invalid`, (e) => {
        // const inputArrayValues = Array.from(inputArray.value);
        // // console.log(inputArrayValues);
        // console.log(inputArray[0].value);
        // console.log(inputArray[1].value);
        // console.log(inputArray[2].value);
        // console.log(inputArray[3].value);
        // console.log(userInputFields.checkValidity());
        // if (inputArray[0].value && inputArray[1].value && inputArray[2].value && inputArray[3].value) {
            // console.log(e.target.value);
            // console.log(inputArray[1].value);
            // console.log(inputArray[2].value);
            // console.log(inputArray[3].value);
            // addBookToLibrary(inputArray[0].value, inputArray[1].value, inputArray[2].value, inputArray[3].value)
        // }
    // })
// })





