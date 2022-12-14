export {};
// interface Book {
//   title: string,
//   author: string,
//   isRead: boolean
// }

//const library: Book [] = [
const library = [
  {
    title: "Bill Gates",
    author: "The Road Ahead",
    isRead: true
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    isRead: true
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    isRead: false
  }
];

//const showStatus = (listOfBooks: Book[]): void => {
  //listOfBooks.forEach(book => {
    //if(book.isRead) {
      //console.log(`Already read '${book.title}' by ${book.author}.`)
    //} else {
      //console.log(`You still need to read '${book.title}' by ${book.author}.`)
    //}
  //})
const showStatus = (lib: {title: string, author: string, isRead: boolean}[]): void => {
  for (let i = 0; i < lib.length; i++) {
    let alreadyRed: string = "Already";
    if (!lib[i].isRead) {
      alreadyRed = "You still need to"
    }
    console.log(`${alreadyRed} read '${lib[i].title}' by ${lib[i].author}.`)
  }
};

showStatus(library);

/*
  Expected output:

  Already read 'Bill Gates' by The Road Ahead.
  Already read 'Steve Jobs' by Walter Isaacson.
  You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.

*/