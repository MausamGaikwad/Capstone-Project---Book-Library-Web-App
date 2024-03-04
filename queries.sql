CREATE TABLE IF NOT EXISTS books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  rating INTEGER,
  -- Add more fields as needed
);

CREATE TABLE IF NOT EXISTS reading_history (
  id SERIAL PRIMARY KEY,
  book_id INTEGER REFERENCES books(id),
  date_read DATE,
  notes TEXT,
  -- Add more fields as needed
);

-- Insert a new book
INSERT INTO books (title, author, rating) VALUES ('The Great Gatsby', 'F. Scott Fitzgerald', 5);

-- Insert reading history for a book
INSERT INTO reading_history (book_id, date_read, notes) VALUES (1, '2023-01-01', 'Enjoyed the book!');
