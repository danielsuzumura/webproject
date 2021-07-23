import mongoose from 'mongoose';

const Review = mongoose.model('Review');

/**
 * Get every review
 * @param {*} req Requisition
 * @param {*} res Response
 */
export const getAll = async (req, res) => {
    try {
        let data = await Review.find({}, 'id name rating productId reviewText');
        res.status(200).send(data);
    } catch (err) {
        res.status(400).send(err);
    }
};

/**
 * Get review of query id
 * @param {*} req Requisition
 * @param {*} res Response
 */
export const get = async (req, res) => {
    try {
        let data = await Review.findOne({
            id: req.params.id
        }, 'id name rating productId reviewText');
        if (data) {
            res.status(200).send(data);
        } else {
            throw Error('Review not found');
        }
    } catch (err) {
        res.status(400).send(err.message);
    }
};

/**
 * Insert review
 * @param {*} req Requisition
 * @param {*} res Response
 */
export const put = async (req, res) => {
    let review = new Review(req.body);
    try {
        await review.save();
        res.status(201).send({message: 'Review inserted'});
    } catch (err) {
        res.status(400).send(
            {
                message: 'Review not inserted',
                data: {err}
            }
        );
    }
};

export const del = async (req, res) => {
    try {
        await Review.findOneAndRemove({
            id: req.params.id
        });
        res.status(200).send({message: 'Review removed'});
    } catch (err) {
        res.status(400).send(err);
    }
};
