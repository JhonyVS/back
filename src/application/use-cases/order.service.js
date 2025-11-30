const Order = require('../../domain/entities/order.entity');

class OrderService {
  constructor(orderRepository) {
    this.orderRepository = orderRepository;
  }

  async createOrder(data) {
    // Calcular total
    const total = (data.precio * data.cantidad) - (data.descuento || 0);
    const order = new Order({ ...data, total });
    return await this.orderRepository.create(order);
  }

  async getOrderById(id) {
    return await this.orderRepository.findById(id);
  }

  async getAllOrders() {
    return await this.orderRepository.findAll();
  }

  async updateOrder(id, data) {
    if (data.precio && data.cantidad) {
      data.total = (data.precio * data.cantidad) - (data.descuento || 0);
    }
    return await this.orderRepository.update(id, data);
  }

  async deleteOrder(id) {
    return await this.orderRepository.delete(id);
  }
}

module.exports = OrderService;
