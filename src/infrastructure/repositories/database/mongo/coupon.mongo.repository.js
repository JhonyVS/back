const CouponModel = require('./models/coupon.model');
const CouponRepositoryInterface = require('../../../../domain/repositories/coupon.repository.interface');

class CouponMongoRepository extends CouponRepositoryInterface {
  async create(coupon) {
    return await CouponModel.create(coupon);
  }
  
  async findById(id) {
    return await CouponModel.findById(id);
  }
  
  async findByCode(code) {
    return await CouponModel.findOne({ code: code.toUpperCase() });
  }
  
  async findAll() {
    return await CouponModel.find();
  }
  
  async update(id, coupon) {
    return await CouponModel.findByIdAndUpdate(id, coupon, { new: true });
  }
  
  async delete(id) {
    return await CouponModel.findByIdAndDelete(id);
  }
}

module.exports = CouponMongoRepository;
