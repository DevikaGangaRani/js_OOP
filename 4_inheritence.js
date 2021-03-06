// constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// getSummary
Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

// magazine constructor
function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);

  this.month = month;
}

// inherit prototype
Magazine.prototype = Object.create(Book.prototype);

// instantiate magazine object
const mag1 = new Magazine('mag one', 'John Doe', '2018', 'jan');

// use magazine constuctor
Magazine.prototype.constuctor = Magazine;
console.log(mag1);
