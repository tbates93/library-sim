module.exports = {
    insertBook: (req, res, next) => {
        console.log(req.body)
        const db = req.app.get('db')
        const {image, title, author, genre, description} = req.body

        db.books_insert([title, author, image, genre, description]).then(response => {
            res.status(200).send(response)
        })
    },
    getBooks: (req, res, next) => {
        const db = req.app.get('db')
      

        db.books_get().then(response => {
            res.status(200).send(response)
        })
    },

    updateBook: (req, res, next) => {
        console.log(req.params,req.body)
        const db = req.app.get('db')
      
        const {book_id} = req.params
        const {image, title, author, genre, description} = req.body

        db.books_update([title, author, image, genre, description, book_id]).then(response => {
            res.status(200).send(response)
        })
    },
    deleteBook: (req, res, next) => {
        console.log(req.params,req.body)
        const db = req.app.get('db')
      
        const {book_id} = req.params

        db.books_delete([book_id]).then(response => {
            res.status(200).send(response)
        })
    },

}