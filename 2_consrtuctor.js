// constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  };
}

//instatiate an object
const book1 = new Book('Book one', 'John Doe', '2013');
const book2 = new Book('Book two', 'john Doe', '2016');
console.log(book2.getSummary());
