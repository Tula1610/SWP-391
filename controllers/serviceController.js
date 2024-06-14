const Service = require('../models/serviceSchema');

const indexService = (req, res) => {
    res.send('<h1>This is service page</h1>');;
}

// CREATE
const createService = (req, res) => {
    let query = {id: req.body.id.toString() };
    Service.findOne(query)
        .then(result => {
            if (result) res.json({ message: 0 });
            else {
                const newService = new Service({
                    id: req.body.id,
                    name: req.body.name,
                    price: req.body.price
                });

                newService.save()
                    .then(result => res.json(result))
                    .catch(err => console.log(err));
            }
        })
}


// READ
const readAllService = (req, res) => {
    Service.find().sort({ id: 1 })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
}

const readOneService = (req, res) => {
    const id = req.params.id;

    Service.findOne({ id: id })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
}


// DELETE
const deleteOneService = (req, res) => {
    const id = req.params.id;

    Service.deleteOne({ id: id })
        .then(() => {
            res.redirect('/services');
        })
        .catch(err => console.log(err));
}

// UPDATE
const updateOneService = (req, res) => {
    const oldId = req.body.oldId;
    const newId = req.body.newId;
    let query = {id: newId.toString()}
    
    Service.findOne(query)
        .then((result) => {
            if (result && result.id !== oldId) res.json({ message: 0 });
            else {
                Service.deleteOne({ id: req.body.oldId })
                    .then(result => res.send(result))
                    .catch(err => console.log(err));

                const newService = new Service({
                    id: req.body.newId,
                    name: req.body.name,
                    price: req.body.price
                });

                newService.save()
                    .then(result => res.json(result))
                    .catch(err => console.log(err));
            }
        })
        .catch(err => console.log(err));
}


module.exports = {
    indexService,
    readAllService,
    readOneService,
    deleteOneService,
    createService,
    updateOneService
}