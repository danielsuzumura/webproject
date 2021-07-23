import mongoose from 'mongoose';

const Category = mongoose.model('Category');

/**
 * Get every category
 * @param {*} req Requisition
 * @param {*} res Response
 */
export const getAll = async (req, res) => {
    try {
        let data = await Category.find({}, 'name photo alt slogan');
        res.status(200).send(data);
    } catch (err) {
        res.status(400).send(err);
    }
};

/**
 * Get category of query name
 * @param {*} req Requisition
 * @param {*} res Response
 */
export const get = async (req, res) => {
    try {
        let data = await Category.findOne({
            name: req.params.name
        }, 'name photo alt slogan');
        if (data) {
            res.status(200).send(data);
        } else {
            throw Error('Category not found');
        }
    } catch (err) {
        res.status(400).send(err.message);
    }
};

/**
 * Insert category
 * @param {*} req Requisition
 * @param {*} res Response
 */
export const put = async (req, res) => {
    let category = new Category(req.body);
    try {
        await category.save();
        res.status(201).send({message: 'Category inserted'});
    } catch (err) {
        res.status(400).send(
            {
                message: 'Category not inserted',
                data: {err}
            }
        );
    }
};

export const del = async (req, res) => {
    try {
        await Category.findOneAndRemove({
            name: req.params.name
        });
        res.status(200).send({message: 'Category removed'});
    } catch (err) {
        res.status(400).send(err);
    }
};
