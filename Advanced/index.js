document.addEventListener("DOMContentLoaded", () => {
  const booksContainer = document.getElementById("books-container");

  // Retrieve books data from local storage or use an empty array if not available
  const booksData = localStorage.getItem("books")
    ? JSON.parse(localStorage.getItem("books"))
    : [];

  // Render the books on the page
  function renderBooks() {
    booksContainer.innerHTML = ""; // Clear the container before rendering

    booksData.forEach((book) => {
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
  }

  renderBooks(); // Initial rendering

  // Save the books data to local storage
  function saveBooksToStorage() {
    localStorage.setItem("books", JSON.stringify(booksData));
  }

  // Update the book status and save changes
  function updateBookStatus(index, read) {
    booksData[index].read = read;
    saveBooksToStorage();
    renderBooks();
  }

  // Fetch books data from the external JSON file
  fetch("books.json")
    .then((response) => response.json())
    .then((data) => {
      booksData.push(...data);
      saveBooksToStorage();
      renderBooks();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
