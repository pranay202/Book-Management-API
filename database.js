const books = [
  {
    ISBN: "12345Book",
    title: "Atomic Habits",
    pubDate: "2021-08-05",
    language: "en",
    numPage: 250,
    author: [1,2],
    publications: [1],
    category: ["tech","space","education"]
  }
]

const author = [
  {
    id: 1,
    name: "Pranay",
    books: ["12345Book", "secretBook"]
  },
  {
    id: 2,
    name: "Developer",
    books: ["12345Book"]
  }
]

const publication = [
  {
    id: 1,
    name: "writex1",
    books: ["12345Book"]
  },
  {
    id: 2,
    name: "writex2",
    books: []
  }
]