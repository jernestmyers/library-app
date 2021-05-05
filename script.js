let myLibrary = [];

function Book(title, author, pages, readStatus) {
        this.title = title
        this.author = author
        this.pages = pages
        this.readStatus = readStatus
        // this.bookInfo = function() {
        //     return `${this.title} by ${this.author}, ${this.pages} pages, ${this.readStatus}`;
        // }  FROM THE EXERCISE
}

function addBookToLibrary(title, author, pages, readStatus) {
    const bookToAdd = new Book(title, author, pages, readStatus);
    const tableDisplay = document.querySelector(`tbody`);
    const newRow = tableDisplay.insertRow();
    const newTitleColumn = newRow.insertCell(0);
    const newAuthorColumn = newRow.insertCell(1);
    const newPagesColumn = newRow.insertCell(2);
    const newStatusColumn = newRow.insertCell(3);
    const removeBookButton = newRow.insertCell(4);
    newTitleColumn.textContent = title;
    newAuthorColumn.textContent = author;
    newPagesColumn.textContent = pages;
    newStatusColumn.textContent = readStatus;
    removeBookButton.textContent = `remove?`;
    myLibrary.push(bookToAdd);
    console.log(myLibrary);
}

const userInputFields = document.querySelectorAll(`.userInputs`);
const inputArray = Array.from(userInputFields);
const addBookButton = document.querySelector(`#addBook`);

addBookButton.addEventListener(`click`, (e) => {
    e.preventDefault();
    // console.log(inputArray[0].value);
    // console.log(inputArray[1].value);
    // console.log(inputArray[2].value);
    // console.log(inputArray[3].value);
    if (inputArray[0].value && inputArray[1].value && inputArray[2].value && inputArray[3].value) {
        addBookToLibrary(inputArray[0].value, inputArray[1].value, inputArray[2].value, inputArray[3].value)
    }
})
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





