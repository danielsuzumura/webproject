import {db} from '../../server.js';

export const get = (req, res) => {
    const id = req.params.id;
    let user = db[id];
    res.status(200).send(user);
};

export const post = (req, res) => {
    res.status(201).send(req.body);
};

export const put = (req, res) => {
    const id = req.params.id;
    const user = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        address: req.body.address
    };
    db[id] = user;
    res.status(200).send({
        id: id,
        user: user
    });
};

export const del = (req, res) => {
    const id = req.params.id;
    delete db[id];
    res.status(200).send('Deleted');
};
