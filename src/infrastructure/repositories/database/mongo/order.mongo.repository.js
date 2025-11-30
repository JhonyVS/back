const OrderModel = require('./models/order.model');
const OrderRepositoryInterface = require('../../../../domain/repositories/order.repository.interface');

class OrderMongoRepository extends OrderRepositoryInterface {
  async create(order) {
    return await OrderModel.create(order);
  }
  async findById(id) {
    return await OrderModel.findById(id).populate('producto');
  }
  async findAll() {
    return await OrderModel.find().populate('producto');
  }
  async update(id, order) {
    return await OrderModel.findByIdAndUpdate(id, order, { new: true });
  }
  async delete(id) {
    return await OrderModel.findByIdAndDelete(id);
  }
}

module.exports = OrderMongoRepository;
