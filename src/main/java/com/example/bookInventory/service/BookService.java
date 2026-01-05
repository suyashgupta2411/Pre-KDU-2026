package com.example.bookInventory.service;

import com.example.bookInventory.exception.BookNotFoundException;
import com.example.bookInventory.model.Book;
import com.example.bookInventory.repository.BookRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Collection;

@Service
public class BookService {

    private final BookRepository repository;

    public BookService(BookRepository repository) {
        this.repository = repository;
    }

    public Book addBook(Book book) {
        if (book.getPrice().signum() < 0) {
            throw new IllegalArgumentException("Price cannot be negative");
        }
        book.setCreatedAt(LocalDateTime.now());
        return repository.save(book);
    }

    public Book getBookById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new BookNotFoundException("Book with id " + id + " not found"));
    }

    public Book getBookByAuthor(String author) {
        return repository.findByAuthor(author)
                .orElseThrow(() ->
                    new BookNotFoundException("Book by author " + author + " not found"));
    }
    
    public Book getBookByIsbn(String isbn) {
    return repository.findByIsbn(isbn)
            .orElseThrow(() ->
                new BookNotFoundException("Book with ISBN " + isbn + " not found"));
    }

    public Collection<Book> getAllBooks() {
        return repository.findAll();
    }
}
