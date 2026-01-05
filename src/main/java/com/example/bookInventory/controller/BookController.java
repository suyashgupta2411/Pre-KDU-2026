package com.example.bookInventory.controller;

import com.example.bookInventory.model.Book;
import com.example.bookInventory.service.BookService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/api/books")
public class BookController {

    private final BookService service;

    public BookController(BookService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<Book> addBook(@RequestBody Book book) {
        return new ResponseEntity<>(service.addBook(book), HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Book> getBook(@PathVariable Long id) {
        return ResponseEntity.ok(service.getBookById(id));
    }

    @GetMapping("/{author}")
    public ResponseEntity<Book> getBook(@PathVariable String author) {
        return ResponseEntity.ok(service.getBookByAuthor(author));
    }

    @GetMapping("/search/{isbn}")
    public ResponseEntity<Book> getBookByIsbn(@RequestParam String isbn) {
    return ResponseEntity.ok(service.getBookByIsbn(isbn));
    }

    @GetMapping
    public ResponseEntity<Collection<Book>> getAllBooks() {
        return ResponseEntity.ok(service.getAllBooks());
    }
}
