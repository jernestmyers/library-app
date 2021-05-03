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

function addBookToLibrary() {

}

const userInputFields = document.querySelectorAll(`.userInputs`);
const inputArray = Array.from(userInputFields);

userInputFields.forEach((userInputFields) => {
    userInputFields.addEventListener(`click`, () => {
        // const inputArrayValues = Array.from(inputArray.value);
        // console.log(inputArrayValues);
        console.log(inputArray[0].value);
        console.log(inputArray[1].value);
        console.log(inputArray[2].value);
        console.log(inputArray[3].value);
        if (inputArray[0].value !== undefined && inputArray[1].value !== undefined && inputArray[2].value !== undefined && inputArray[3].value !== undefined) {
            console.log(inputArray[0].value);
            console.log(inputArray[1].value);
            console.log(inputArray[2].value);
            console.log(inputArray[3].value);
        }
    })
})


// FROM THE EXERCISE
// const book1 = new Book(`A Sick Day with Amos McGee`, `Don't Know`, `15`, `read`);
// console.log(book1.bookInfo());



