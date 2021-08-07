const express = require("express");

//Database
const database = require("./database");

//Initialise express
const booky = express();

/*
Route            /
Description      Get all the books
Access           PUBLIC
Parameter        NONE
Methods          GET
*/
booky.get("/",(req,res) => {
  return res.json({books: database.books});
});

/*
Route            /is
Description      Get specific book on ISBN
Access           PUBLIC
Parameter        isbn
Methods          GET
*/
booky.get("/is/:isbn",(req,res) => {
  const getSpecificBook = database.books.filter(
    (book) => book.ISBN ===  req.params.isbn
  );

  if(getSpecificBook.length === 0) {
    return res.json({error: `No book found for the ISBN of ${req.params.isbn}`});
  }

  return res.json({book: getSpecificBook});
});


/*
Route            /c
Description      Get specific book on category
Access           PUBLIC
Parameter        category
Methods          GET
*/

booky.get("/c/:category", (req,res) => {
  const getSpecificBook = database.books.filter(
    (book) => book.category.includes(req.params.category)
  )

  if(getSpecificBook.length === 0) {
    return res.json({error: `No book found for the category of ${req.params.category}`})
  }

  return res.json({book: getSpecificBook});
});

/*
Route            /l
Description      Get specific language
Access           PUBLIC
Parameter        language
Methods          GET
*/
  
 
 
 
  booky.listen(3000,() => {
  console.log("Server is up and running");
});

