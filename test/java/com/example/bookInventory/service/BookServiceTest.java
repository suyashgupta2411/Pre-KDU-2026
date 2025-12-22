package com.example.bookInventory.service;

import com.example.bookInventory.exception.BookNotFoundException;
import com.example.bookInventory.model.Book;
import com.example.bookInventory.repository.BookRepository;
import org.junit.jupiter.api.*;
import java.math.BigDecimal;

import static org.junit.jupiter.api.Assertions.*;

class BookServiceTest {

    private BookService service;

    @BeforeEach
    void setup() {
        service = new BookService(new BookRepository());
    }

    @Test
    void addBook_success() {
        Book book = new Book(null, "Clean Code", "Robert", new BigDecimal("500"), "123", null);
        Book saved = service.addBook(book);
        assertNotNull(saved.getId());
    }

    @Test
    void addBook_negativePrice_throwsException() {
        Book book = new Book(null, "Bad", "Author", new BigDecimal("-10"), "111", null);
        assertThrows(IllegalArgumentException.class, () -> service.addBook(book));
    }

    @Test
    void getBookById_success() {
        Book book = service.addBook(new Book(null, "Test", "Me", new BigDecimal("100"), "222", null));
        assertEquals("Test", service.getBookById(book.getId()).getTitle());
    }

    @Test
    void getBookById_notFound() {
        assertThrows(BookNotFoundException.class, () -> service.getBookById(999L));
    }
}
