const booksData = `[
  {
      "title": "JavaScript for Dummies",
      "author": "Dummy Dumb Dumb",
      "read": false,
      "cover": "javascript_cover.jpg"
  },
  {
      "title": "HTML & CSS Basics",
      "author": "Coder McCoder",
      "read": true,
      "cover": "html_css_cover.jpg"
  },
  {
      "title": "Python Crash Course",
      "author": "Pythonista Pro",
      "read": false,
      "cover": "python_cover.jpg"
  }
]`;

const books = JSON.parse(booksData);
const booksContainer = document.getElementById("books-container");

books.forEach((book) => {
  // Create the book element
  const bookElement = document.createElement("div");
  bookElement.className = "book";
  if (!book.read) {
    bookElement.classList.add("unread");
  }

  // Create the book title element
  const titleElement = document.createElement("h3");
  titleElement.textContent = book.title;
  bookElement.appendChild(titleElement);

  // Create the book author element
  const authorElement = document.createElement("p");
  authorElement.textContent = "By " + book.author;
  bookElement.appendChild(authorElement);

  // Create the book cover image element
  const coverElement = document.createElement("img");
  coverElement.src = book.cover;
  bookElement.appendChild(coverElement);

  // Append the book element to the container
  booksContainer.appendChild(bookElement);
});
