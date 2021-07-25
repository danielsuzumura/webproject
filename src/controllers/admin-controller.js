import mongoose from 'mongoose';

const Admin = mongoose.model('Admin');

/**
 * Get every admin
 * @param {*} req Requisition
 * @param {*} res Response
 */
export const getAll = async (req, res) => {
    try {
        let data = await Admin.find({}, 'email');
        res.status(200).send(data);
    } catch (err) {
        res.status(400).send(err);
    }
};

/**
 * Get admin of query email
 * @param {*} req Requisition
 * @param {*} res Response
 */
export const get = async (req, res) => {
    try {
        let data = await Admin.findOne({
            email: req.params.email
        }, 'email');
        if (data) {
            res.status(200).send(data);
        } else {
            throw Error('Admin not found');
        }
    } catch (err) {
        res.status(400).send(err.message);
    }
};

/**
 * Insert admin
 * @param {*} req Requisition
 * @param {*} res Response
 */
export const put = async (req, res) => {
    let admin = new Admin(req.body);
    try {
        await admin.save();
        res.status(201).send({message: 'Admin inserted'});
    } catch (err) {
        res.status(400).send(
            {
                message: 'Admin not inserted',
                data: {err}
            }
        );
    }
};

export const del = async (req, res) => {
    try {
        await Admin.findOneAndRemove({
            email: req.params.email
        });
        res.status(200).send({message: 'Admin removed'});
    } catch (err) {
        res.status(400).send(err);
    }
};
