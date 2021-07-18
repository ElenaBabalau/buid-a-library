// Created a parent class "Book, CD, and Movie" classes, called Media
class Media {
  constructor(title) { //created constructor()
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  
  // Created getters for the title, isCheckedOut, and ratings properties
  get title() {
    return this._title;
  }
  
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  
  // Created a setter for the isCheckedOut property
  set isCheckedOut(check) {
    this._isCheckedOut = check;
  }
  
  get ratings() {
    return this._ratings;
  }

  //Create a method named toggleCheckOutStatus that changes the value saved to the _isCheckedOut property
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }

  // Created a method named getAverageRating. Returned the average value of the ratings array. Used the reduce method to find the sum of the ratings array. Divided this sum by the length of the ratings array, and return the result
  getAverageRating() {
    let ratingsSum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);
    return ratingsSum / this._ratings.length;
  }

  //Addes a method named addRating that accepts one argument and uses .push() to add it to the end of the ratings array
  addRating(ratings){
    this._ratings.push(ratings);
  }
}


//Created a Book class that extends Media
class Book extends Media {
  constructor(author, title, pages,) {  // Created a constructor that accepts three arguments
    super(title); //Call super on the first line of the Books‘s constructor method
//Set the author and pages properties in Book
    this._author = author;
    this._pages = pages;
  }

  //Created two new getters in the Book class
  get author() {
    return this._author;
  }
  
  get pages () {
    return this._pages;
  }
}

//Created a Movie class
class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director (){
    return this._director;
  }

  get runTime (){
    return this._runTime;
  }
}

//Created a Book instance with the following properties with variable named historyOfEverything
const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);

//Call .toggleCheckOutStatus() on the historyOfEverything instance
historyOfEverything.toggleCheckOutStatus();

//Log the value saved to the isCheckedOut property in the historyOfEverything instance
console.log(historyOfEverything.isCheckedOut);

//Call .addRating() three times on historyOfEverything with inputs of 4, 5, and 5
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);

//Call .getAverageRating() on historyOfEverything. Log the result to the console
console.log(historyOfEverything.getAverageRating());

//Create a Movie instance with the following properties with variable named speed
const speed = new Movie('Speed', 'Jan de Bont', 116);

//Call .toggleCheckOutStatus() on the speed instance
speed.toggleCheckOutStatus();

//Log the value saved to the isCheckedOut property in the speed instance.
console.log(speed.isCheckedOut);

//Call .addRating() three times on speed with inputs of 1, 1, and 5.
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);

//Call .getAverageRating() on speed. Log the result to the console.
console.log(speed.getAverageRating());