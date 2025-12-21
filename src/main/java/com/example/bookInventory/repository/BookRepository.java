package com.example.bookInventory.repository;

import com.example.bookInventory.model.Book;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public class BookRepository {

    private final Map<Long, Book> store = new HashMap<>();
    private Long idCounter = 1L;

    public Book save(Book book) {
        book.setId(idCounter++);
        store.put(book.getId(), book);
        return book;
    }

    public Optional<Book> findById(Long id) {
        return Optional.ofNullable(store.get(id));
    }

    public Collection<Book> findAll() {
        return store.values();
    }
}
