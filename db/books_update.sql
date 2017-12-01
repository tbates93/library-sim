UPDATE Books SET (title, author, image, genre, in_stock, description)
= ($1, $2, $3, $4, true, $5)
where book_id = $6;