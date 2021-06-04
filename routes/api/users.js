const express = require('express');
const users = require('../../utils/users');
const uuid = require('uuid');
const { body, validationResult } = require('express-validator');
require('dotenv').config();

const router = express.Router();

router.use((req, res, next) => {
    if (!req.header('X-Api-Key') || req.header('X-Api-Key') != process.env.API_KEY) {
        res.status(401).json({
            code: 401,
            status: 'UNAUTHORIZED',
            message: 'Please put X-Api-Key'
        });
    } else {
        next();
    }
})

// List Users
router.get('/', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const size = parseInt(req.query.size) || 4;
    const data = users.find(page, size);
    res.status(200).json({
        code: 200,
        status: "OK",
        page,
        size,
        data
    });
});

// Get user
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const data = users.findById(id);
    if (data) {
        res.status(200).json({
            code: 200,
            status: "OK",
            data
        });
    } else {
        res.status(404).json({
            code: 404,
            status: "NOT FOUND",
            message: `No user with the id of ${id}`
        });
    }
});

router.post('/',
    body('name').custom(value => {
        if (!value) {
            throw new Error('Name must be required');
        }
        return true;
    }),
    body('email').custom(value => {
        if (!value) {
            throw new Error('Email must be required');
        }

        if (users.findByEmail(value)) {
            throw new Error('Email already registered, please enter another email');
        }
        return true;
    }),
    body('email', 'Email is not valid, please enter a valid email').isEmail()
    , (req, res) => {

        const errors = validationResult(req);
        if (errors.isEmpty()) {
            const newUser = {
                id: uuid.v4(),
                name: req.body.name,
                email: req.body.email,
                created_at: Date.now()
            }

            users.create(newUser);

            res.status(200).json({
                code: 200,
                status: 'OK',
                data: newUser
            });
        } else {
            res.status(400).json({
                code: 400,
                status: 'BAD REQUEST',
                message: errors
            });
        }
    });

router.put('/:id',
    body('name').custom(value => {
        if (!value) {
            throw new Error('Name must be required')
        }
        return true;
    }),
    body('email').custom((value, { req }) => {
        if (!value) {
            throw new Error('Email must be required')
        }

        if (users.findById(req.params.id).email != value) {
            throw new Error('Email already registered, please enter another email');
        }

        return true;
    }),
    body('email', 'Email is not valid, please enter a valid email').isEmail()
    , (req, res) => {

        const errors = validationResult(req);
        if (errors.isEmpty()) {
            const newUpdateUser = users.update(req.params.id, req.body);

            res.status(200).json({
                code: 200,
                status: 'OK',
                data: newUpdateUser
            });
        } else {
            res.status(400).json({
                code: 400,
                status: 'BAD REQUEST',
                message: errors
            });
        }
    });

module.exports = router;