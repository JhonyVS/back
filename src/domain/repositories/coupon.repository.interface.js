class CouponRepositoryInterface {
  async create(coupon) { throw new Error('Not implemented'); }
  async findById(id) { throw new Error('Not implemented'); }
  async findByCode(code) { throw new Error('Not implemented'); }
  async findAll() { throw new Error('Not implemented'); }
  async update(id, coupon) { throw new Error('Not implemented'); }
  async delete(id) { throw new Error('Not implemented'); }
}

module.exports = CouponRepositoryInterface;
