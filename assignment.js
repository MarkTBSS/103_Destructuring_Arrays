"use strict";

// Define the books array
const books = ["Book1", "Book2", "Book3"];

//1.1
const [firstBook, secondBook] = books;

//1.2
const [, , thirdBook] = books;

// Define the ratings array
const ratings = [['rating', 4.19], ['ratingsCount', 144584]];

//1.3
const [[, rating], [, ratingsCount]] = ratings;

// Define the ratingStars array
const ratingStars = [63405, 1808];

//1.4
const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;

console.log(firstBook, secondBook, thirdBook, rating, ratingsCount, fiveStarRatings, oneStarRatings, threeStarRatings);