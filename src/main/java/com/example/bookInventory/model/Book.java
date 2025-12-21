package com.example.bookInventory.model;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public class Book {

    private Long id;
    private String title;
    private String author;
    private BigDecimal price;
    private String isbn;
    private LocalDateTime createdAt;

    public Book() {}

    public Book(Long id, String title, String author, BigDecimal price, String isbn, LocalDateTime createdAt) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.price = price;
        this.isbn = isbn;
        this.createdAt = createdAt;
    }

    // getters & setters
}
