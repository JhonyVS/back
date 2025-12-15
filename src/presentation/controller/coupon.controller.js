const CouponMongoRepository = require('../../infrastructure/repositories/database/mongo/coupon.mongo.repository');
const CouponService = require('../../application/use-cases/coupon.service');

const couponRepository = new CouponMongoRepository();
const couponService = new CouponService(couponRepository);

const couponController = {
  async create(req, res) {
    try {
      const coupon = await couponService.createCoupon(req.body);
      res.status(201).json(coupon);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async getAll(req, res) {
    try {
      const coupons = await couponService.getAllCoupons();
      res.json(coupons);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async getById(req, res) {
    try {
      const coupon = await couponService.getCouponById(req.params.id);
      if (!coupon) return res.status(404).json({ error: 'Coupon not found' });
      res.json(coupon);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async getByCode(req, res) {
    try {
      const coupon = await couponService.getCouponByCode(req.params.code);
      if (!coupon) return res.status(404).json({ error: 'Coupon not found' });
      res.json(coupon);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async update(req, res) {
    try {
      const coupon = await couponService.updateCoupon(req.params.id, req.body);
      if (!coupon) return res.status(404).json({ error: 'Coupon not found' });
      res.json(coupon);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async delete(req, res) {
    try {
      const coupon = await couponService.deleteCoupon(req.params.id);
      if (!coupon) return res.status(404).json({ error: 'Coupon not found' });
      res.json({ message: 'Coupon deleted' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async validate(req, res) {
    try {
      const { code, montoCompra } = req.body;
      const coupon = await couponService.validateCoupon(code, montoCompra);
      res.json({ valid: true, coupon });
    } catch (err) {
      res.status(400).json({ valid: false, error: err.message });
    }
  },

  async apply(req, res) {
    try {
      const { code } = req.body;
      const coupon = await couponService.applyCoupon(code);
      res.json({ message: 'Coupon applied', coupon });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
};

module.exports = couponController;
