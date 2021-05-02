let myLibrary = [];

function Book() {
    bookToDisplay {
        title: ``,
        author: ``,
        page-length: ``,
        read-status: ``
    }
}

function addBookToLibrary() {

}

const userInputFields = document.querySelectorAll(`.userInputs`);
// const titleInput = document.querySelector(`#title`);
// const authorInput = document.querySelector(`#author`);
// const pagesInput = document.querySelector(`#page-length`);
// const readStatusInput = document.querySelector(`#read-status`);
// const buttonToAddBook = document.querySelector(`#addBook`);

userInputFields.forEach((userInputFields) => {
    userInputFields.addEventListener(`click`, () => {
        console.log(userInputFields.id);
    })
})



