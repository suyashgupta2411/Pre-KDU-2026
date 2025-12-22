const bookList = document.getElementById("bookList");

function addBook() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const price = document.getElementById("price").value;
  const isbn = document.getElementById("isbn").value;

  fetch("/api/books", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title,
      author,
      price,
      isbn
    })
  })
  .then(res => {
    if (!res.ok) throw new Error("Failed to add book");
    return res.json();
  })
  .then(() => {
    clearInputs();
    loadBooks();
  })
  .catch(err => alert(err.message));
}

function loadBooks() {
  fetch("/api/books")
    .then(res => res.json())
    .then(data => {
      bookList.innerHTML = "";
      data.forEach(book => {
        const li = document.createElement("li");
        li.textContent = `${book.title} by ${book.author} (₹${book.price})`;
        bookList.appendChild(li);
      });
    });
}

function clearInputs() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("price").value = "";
  document.getElementById("isbn").value = "";
}
