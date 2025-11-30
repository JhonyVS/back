const OrderMongoRepository = require('../../infrastructure/repositories/database/mongo/order.mongo.repository');
const OrderService = require('../../application/use-cases/order.service');

const orderRepository = new OrderMongoRepository();
const orderService = new OrderService(orderRepository);

const orderController = {
  async create(req, res) {
    try {
      const order = await orderService.createOrder(req.body);
      res.status(201).json(order);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
  async getAll(req, res) {
    try {
      const orders = await orderService.getAllOrders();
      res.json(orders);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  async getById(req, res) {
    try {
      const order = await orderService.getOrderById(req.params.id);
      if (!order) return res.status(404).json({ error: 'Order not found' });
      res.json(order);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  async update(req, res) {
    try {
      const order = await orderService.updateOrder(req.params.id, req.body);
      if (!order) return res.status(404).json({ error: 'Order not found' });
      res.json(order);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
  async delete(req, res) {
    try {
      const order = await orderService.deleteOrder(req.params.id);
      if (!order) return res.status(404).json({ error: 'Order not found' });
      res.json({ message: 'Order deleted' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};

module.exports = orderController;
