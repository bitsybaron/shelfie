
module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db');

        db.get_inventory()
            .then(products => res.status(200).send(products))
            .catch(err => {
                res.status(404).send({errorMessage: 'Oops! Something went wrong.'})
                console.log(err)
            })
        
    },
    addProduct: (req, res) => {
        const db = req.app.get('db');

        db.add_product([req.body.productName, req.body.price, req.body.imageUrl])
            .then(products => res.status(200).send(products))
            .catch(err => {
                res.status(500).send('Whoops!')
                console.log(err)
            })

        
    },
    deleteProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        
        db.delete_product(id)
        .then(() => res.sendStatus(200))
        .catch((err) => {
            res.sendStatus(500)
            console.log(err)
        })
    }
}