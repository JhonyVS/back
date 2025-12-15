const Coupon = require('../../domain/entities/coupon.entity');

class CouponService {
  constructor(couponRepository) {
    this.couponRepository = couponRepository;
  }

  async createCoupon(data) {
    const coupon = new Coupon(data);
    return await this.couponRepository.create(coupon);
  }

  async getCouponById(id) {
    return await this.couponRepository.findById(id);
  }

  async getCouponByCode(code) {
    return await this.couponRepository.findByCode(code);
  }

  async getAllCoupons() {
    return await this.couponRepository.findAll();
  }

  async updateCoupon(id, data) {
    return await this.couponRepository.update(id, data);
  }

  async deleteCoupon(id) {
    return await this.couponRepository.delete(id);
  }

  async validateCoupon(code, montoCompra) {
    const coupon = await this.couponRepository.findByCode(code);
    
    if (!coupon) {
      throw new Error('Cupón no encontrado');
    }

    if (!coupon.activo) {
      throw new Error('Cupón inactivo');
    }

    const now = new Date();
    if (now < coupon.fechaInicio) {
      throw new Error('Cupón aún no válido');
    }

    if (now > coupon.fechaExpiracion) {
      throw new Error('Cupón expirado');
    }

    if (coupon.usoMaximo && coupon.usoActual >= coupon.usoMaximo) {
      throw new Error('Cupón agotado');
    }

    if (montoCompra < coupon.minimoCompra) {
      throw new Error(`Compra mínima de ${coupon.minimoCompra} requerida`);
    }

    return coupon;
  }

  async applyCoupon(code) {
    const coupon = await this.couponRepository.findByCode(code);
    if (!coupon) {
      throw new Error('Cupón no encontrado');
    }

    coupon.usoActual += 1;
    return await this.couponRepository.update(coupon._id, { usoActual: coupon.usoActual });
  }
}

module.exports = CouponService;
