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

/**
 * Update product
 * @param {*} req Requisition
 * @param {*} res Response
 */
export const patch = async (req, res) => {
    let code = req.params.code;
    try {
        await Product.findOneAndUpdate({code: code}, {
            $set: {
                name: req.body.name,
                photo: req.body.photo,
                description: req.body.description,
                price: req.body.price,
                quantityStock: req.body.quantityStock,
                quantitySold: req.body.quantitySold,
                category: req.body.category
            }
        });
        res.status(201).send({message: 'Product updated'});
    } catch (err) {
        res.status(400).send(
            {
                message: 'Product not updated',
                data: {err}
            }
        );
    }
};

/**
 * Change quantity stock of product
 * @param {*} req Requisition
 * @param {*} res Response
 */
export const changeStock = async (req, res) => {
    let code = req.params.code;
    try {
        await Product.findOneAndUpdate({code: code}, {
            $set: {
                quantityStock: req.body.quantityStock
            }
        });
        res.status(201).send({message: 'Product updated'});
    } catch (err) {
        res.status(400).send(
            {
                message: 'Product not updated',
                data: {err}
            }
        );
    }
};

/**
 * Change quantity sold of product
 * @param {*} req Requisition
 * @param {*} res Response
 */
export const changeSold = async (req, res) => {
    let code = req.params.code;
    try {
        await Product.findOneAndUpdate({code: code}, {
            $set: {
                quantitySold: req.body.quantitySold
            }
        });
        res.status(201).send({message: 'Product updated'});
    } catch (err) {
        res.status(400).send(
            {
                message: 'Product not updated',
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
