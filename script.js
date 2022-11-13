class User {
  constructor(first, last, city) {
    this.first = first;
    this.last = last;
    this.city = city;
    this.borrowedBooks = [];
  }
  borrow(book) {
    if (!book.canBorrow) {
      return;
    }
    this.borrowedBooks.push(book);
  }
}

let user1 = new User("Hila", "Faingold", "Qiryat shemona");
let user2 = new User("Lial", "Faingold", "Lod");
let user3 = new User("Lior", "Faingold", "Barcelona");

class Book {
  constructor(title, author, canBorrow) {
    this.title = title;
    this.author = author;
    this.canBorrow = canBorrow ? true : false;
  }
}

let book = new Book("Spiderman 1", "Stan lee", true);
let book2 = new Book("Avengers - End Game", "Rosso Brothers", false);
let book3 = new Book("Captain America ", "Stan lee", false);
let book4 = new Book("Thor 4", "Stan lee", false);
let book5 = new Book("Iron Man 3", "Stan lee", true);
let book6 = new Book("Ant Man", "Stan lee", true);

user1.borrow(book);
user1.borrow(book2);
user1.borrow(book3);
user1.borrow(book4);
user2.borrow(book6);
user2.borrow(book3);
user3.borrow(book3);
user3.borrow(book2);
user3.borrow(book5);

class BookReport {
  constructor(name) {
    this.name = name;
    this.users = [];
  }
  addNewUser(user) {
    this.users.push(user);
  }
  printReport() {
    this.users.forEach((user) => {
      console.log(
        `${user.first} ${user.last} from ${user.city} borrowed the following books:`
      );
      user.borrowedBooks.forEach((book) => console.log(book.title));
    });
  }

  isBorrowed(bookToCheck) {
    return this.users.some((user) => user.borrowedBooks.includes(bookToCheck));
  }
}

let a = new BookReport("report1");

a.addNewUser(user1);
a.addNewUser(user2);
a.addNewUser(user3);

console.log(a);
a.printReport();

console.log(a.isBorrowed(book));
console.log(a.isBorrowed(book2));
console.log(a.isBorrowed(book3));
console.log(a.isBorrowed(book4));
console.log(a.isBorrowed(book5));
console.log(a.isBorrowed(book6));
