import mongoose from 'mongoose';

const Product = mongoose.model('Product');

/**
 * Get every product
 * @param {*} req Requisition
 * @param {*} res Response
 */
export const getAll = async (req, res) => {
    try {
        let data = await Product.find({}, 'code name photo description price quantityStock quantitySold category');
        res.status(200).send(data);
    } catch (err) {
        res.status(400).send(err);
    }
};

/**
 * Get product of query code
 * @param {*} req Requisition
 * @param {*} res Response
 */
export const get = async (req, res) => {
    try {
        let data = await Product.findOne({
            code: req.params.code
        }, 'code name photo description price quantityStock quantitySold category');
        if (data) {
            res.status(200).send(data);
        } else {
            throw Error('Product not found');
        }
    } catch (err) {
        res.status(400).send(err.message);
    }
};

/**
 * Insert product
 * @param {*} req Requisition
 * @param {*} res Response
 */
export const put = async (req, res) => {
    let product = new Product(req.body);
    try {
        await product.save();
        res.status(201).send({message: 'Product inserted'});
    } catch (err) {
        res.status(400).send(
            {
                message: 'Product not inserted',
                data: {err}
            }
        );
    }
};

export const del = async (req, res) => {
    try {
        await Product.findOneAndRemove({
            code: req.params.code
        });
        res.status(200).send({message: 'Product removed'});
    } catch (err) {
        res.status(400).send(err);
    }
};
