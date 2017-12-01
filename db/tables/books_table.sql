CREATE TABLE books (
    book_id SERIAL PRIMARY KEY,
    title text,
    author text,
    image text,
    genre int,
    in_stock boolean,
    description text
)