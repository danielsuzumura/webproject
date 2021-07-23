import mongoose from 'mongoose';

const ContactUs = mongoose.model('ContactUs');

/**
 * Get every admin
 * @param {*} req Requisition
 * @param {*} res Response
 */
export const getAll = async (req, res) => {
    try {
        let data = await ContactUs.find({}, 'name email message');
        res.status(200).send(data);
    } catch (err) {
        res.status(400).send(err);
    }
};

/**
 * Insert admin
 * @param {*} req Requisition
 * @param {*} res Response
 */
export const put = async (req, res) => {
    let admin = new ContactUs(req.body);
    try {
        await admin.save();
        res.status(201).send({message: 'ContactUs inserted'});
    } catch (err) {
        res.status(400).send(
            {
                message: 'ContactUs not inserted',
                data: {err}
            }
        );
    }
};
