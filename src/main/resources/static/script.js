function addBook() {
  fetch('/api/books', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      title: title.value,
      author: author.value,
      price: price.value
    })
  }).then(loadBooks);
}

function loadBooks() {
  fetch('/api/books')
    .then(res => res.json())
    .then(data => {
      list.innerHTML = '';
      data.forEach(b => {
        list.innerHTML += `<li>${b.title} - ${b.author}</li>`;
      });
    });
}

loadBooks();
