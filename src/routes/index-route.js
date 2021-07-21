import express from 'express';

export const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        title: 'Exercicio 1 nodejs',
        version: '0.0.1'
    });
});
