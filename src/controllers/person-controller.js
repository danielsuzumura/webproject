import mongoose from 'mongoose';

const Person = mongoose.model('Person');

/**
 * Get every user
 * @param {*} req Requisition
 * @param {*} res Response
 */
export const getAll = async (req, res) => {
    try {
        let data = await Person.find({}, 'name email password address phone');
        res.status(200).send(data);
    } catch (err) {
        res.status(400).send(err);
    }
};

/**
 * Get user of query email
 * @param {*} req Requisition
 * @param {*} res Response
 */
export const get = async (req, res) => {
    try {
        let data = await Person.findOne({
            email: req.params.email
        }, 'name email password address phone');
        if (data) {
            res.status(200).send(data);
        } else {
            throw Error('User not found');
        }
    } catch (err) {
        res.status(400).send(err.message);
    }
};

/**
 * Insert user
 * @param {*} req Requisition
 * @param {*} res Response
 */
export const put = async (req, res) => {
    let person = new Person(req.body);
    try {
        await person.save();
        res.status(201).send({message: 'User inserted'});
    } catch (err) {
        res.status(400).send(
            {
                message: 'User not inserted',
                data: {err}
            }
        );
    }
};

export const del = async (req, res) => {
    try {
        await Person.findOneAndRemove({
            email: req.params.email
        });
        res.status(200).send({message: 'User removed'});
    } catch (err) {
        res.status(400).send(err);
    }
};
