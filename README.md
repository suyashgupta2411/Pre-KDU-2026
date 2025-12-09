# StreamFlix Content Management System

Database Module – Submission

This project contains SQL queries and concepts for managing the content database of the StreamFlix platform.
The tasks include table creation, data insertion, JOIN queries, analytics queries, indexing, and conceptual explanations.

---
## **1. Database Setup**

### **Create Database**

```sql
CREATE DATABASE streamflix;
```

### **Create Tables**

```sql
CREATE TABLE category (
    category_id SERIAL PRIMARY KEY,
    category_name VARCHAR(100) NOT NULL,
    description TEXT
);

CREATE TABLE content (
    content_id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    rating DECIMAL(3,1) CHECK (rating >= 0 AND rating <= 10),
    views_in_millions DECIMAL(10,2),
    release_year INTEGER,
    category_id INTEGER,
    FOREIGN KEY (category_id) REFERENCES category(category_id)
);
```

---

##  **2. Insert Sample Data**

```sql
INSERT INTO category (category_name, description) VALUES
('Movies', 'Feature-length films'),
('Series', 'Multi-episode TV shows'),
('Documentaries', 'Non-fiction educational content'),
('Anime', 'Japanese animated content');

INSERT INTO content (title, rating, views_in_millions, release_year, category_id) VALUES
('Stranger Adventures', 8.7, 142.50, 2023, 2),
('The Cosmic Heist', 7.9, 89.30, 2024, 1),
('Planet Earth: Oceans', 9.2, 201.75, 2023, 3),
('Code Warriors', 8.1, 67.20, 2024, 2),
('Attack on Mars', 9.0, 156.80, 2023, 4),
('The Algorithm', 7.5, 45.60, 2024, 1),
('Wildlife Mysteries', 8.8, 178.90, 2024, 3),
('Cyberpunk Chronicles', 8.4, 123.45, 2023, 4);
```

---

## **3. SQL Queries**

---

###  **Query 1: List all content with category names**
<img width="366" height="251" alt="Query 1" src="https://github.com/user-attachments/assets/844f80d2-6b47-4b47-bb1b-e98a1cf30605" />



---

### **Query 2: Sort content by popularity (views descending)**
<img width="374" height="242" alt="Query 2" src="https://github.com/user-attachments/assets/a711ffa4-a4e1-4f37-a881-b9aba15b1397" />



---

### **Query 3: Average rating per category**
<img width="284" height="204" alt="Query 3" src="https://github.com/user-attachments/assets/fc3a5d74-76d2-48d6-8174-fe24e673e86b" />



---

### **Query 4: High-rated AND high-views content**
<img width="479" height="245" alt="Query 4" src="https://github.com/user-attachments/assets/cfdb1943-880f-44eb-a68f-8e0f5c372f09" />


---

### **Query 5: Indexing Demonstration**
<img width="845" height="331" alt="Query 5" src="https://github.com/user-attachments/assets/6ac28609-d498-4525-ac0d-6a63bf40c5d0" />


---

## **4. Concept Check – The 3 Why’s**

### **Why #1 – Why do we use Foreign Keys?**

* Ensures every content item belongs to a valid category.
* Prevents inserting invalid values like `category_id = 999`.
* Keeps relationships correct and the database consistent.

---

### **Why #2 – Why is ACID important?**

* If many users watch the same show at once, the view count must update correctly.
* Without ACID:

  * Numbers may become incorrect
  * Updates could overwrite each other
  * Crashes might lose data
* ACID guarantees correct, reliable updates.

---

### **Why #3 – Why create an index on category_id?**

* Homepage filters content by category very frequently.
* Index makes these lookups fast.
* Instead of scanning the whole table, the database jumps directly to matching rows.
* This improves performance significantly.

---



