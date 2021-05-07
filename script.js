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
        newTitleColumn.textContent = bookArray[index].title;
        const newAuthorColumn = newRow.insertCell(1);
        newAuthorColumn.textContent = bookArray[index].author;
        const newPagesColumn = newRow.insertCell(2);
        newPagesColumn.textContent = bookArray[index].pages;
        
        const newStatusColumn = newRow.insertCell(3);
        const updateStatusSelector = document.createElement(`select`);
        const option1 = document.createElement(`option`);
        const option2 = document.createElement(`option`);
        const option3 = document.createElement(`option`);
        const option4 = document.createElement(`option`);
        // option2.setAttribute(`value`, `Read it`);
        // option3.setAttribute(`value`, `Reading it`);
        // option4.setAttribute(`value`, `Wish to read`);
        updateStatusSelector.appendChild(option1);
        updateStatusSelector.appendChild(option2);
        updateStatusSelector.appendChild(option3);
        updateStatusSelector.appendChild(option4);
        option1.textContent = `Update`
        option2.textContent = `Read it`;
        option3.textContent = `Reading it`;
        option4.textContent = `Wish to read`;
        newStatusColumn.textContent = bookArray[index].readStatus;
        newStatusColumn.appendChild(updateStatusSelector);
        updateStatusSelector.setAttribute(`id`, `${index}`);
        updateStatusSelector.addEventListener(`change`, updateReadStatus);
        
        const removeBookColumn = newRow.insertCell(4);
        const removeBookButton = document.createElement(`button`);
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

addBookButton.addEventListener(`click`, (e) => {
    e.preventDefault();
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

// const updateStatus = Object.create(Book);
// Book.prototype.updateReadStatus = function() {
    // console.log(e.currentTarget.value);
// };

function updateReadStatus(e) {
    // Book.prototype.changeReadStatus = function(e) {
        console.log(e.currentTarget.value);
        const bookIndexToUpdate = e.currentTarget.id;
        myLibrary[bookIndexToUpdate].readStatus = e.currentTarget.value;
        e.currentTarget.textContent = `Update`;
        console.log(myLibrary);
    // }
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





