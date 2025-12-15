const express = require('express');
const router = express.Router();
const couponController = require('../controller/coupon.controller');

// CRUD básico
router.post('/', couponController.create);
router.get('/', couponController.getAll);
router.get('/:id', couponController.getById);
router.put('/:id', couponController.update);
router.delete('/:id', couponController.delete);

// Rutas especiales
router.get('/code/:code', couponController.getByCode);
router.post('/validate', couponController.validate);
router.post('/apply', couponController.apply);

module.exports = router;
