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

}