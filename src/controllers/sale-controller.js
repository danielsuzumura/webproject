import mongoose from 'mongoose';

const Sale = mongoose.model('Sale');

/**
 * Get every sale
 * @param {*} req Requisition
 * @param {*} res Response
 */
export const getAll = async (req, res) => {
    try {
        let data = await Sale.find({}, 'id cart price user date time');
        res.status(200).send(data);
    } catch (err) {
        res.status(400).send(err);
    }
};

/**
 * Get sale of query id
 * @param {*} req Requisition
 * @param {*} res Response
 */
export const get = async (req, res) => {
    try {
        let data = await Sale.findOne({
            id: req.params.id
        }, 'id cart price user date time');
        if (data) {
            res.status(200).send(data);
        } else {
            throw Error('Sale not found');
        }
    } catch (err) {
        res.status(400).send(err.message);
    }
};

/**
 * Insert sale
 * @param {*} req Requisition
 * @param {*} res Response
 */
export const put = async (req, res) => {
    let sale = new Sale(req.body);
    try {
        await sale.save();
        res.status(201).send({message: 'Sale inserted'});
    } catch (err) {
        res.status(400).send(
            {
                message: 'Sale not inserted',
                data: {err}
            }
        );
    }
};

export const del = async (req, res) => {
    try {
        await Sale.findOneAndRemove({
            id: req.params.id
        });
        res.status(200).send({message: 'Sale removed'});
    } catch (err) {
        res.status(400).send(err);
    }
};
