const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  producto: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  descripcion: { type: String, required: true },
  cantidad: { type: Number, required: true },
  precio: { type: Number, required: true },
  descuento: { type: Number, default: 0 },
  total: { type: Number, required: true },
  fecha: { type: Date, default: Date.now },
  estado: { type: String, enum: ['pendiente', 'pagado', 'enviado', 'entregado', 'cancelado'], default: 'pendiente' },
  cliente: { type: String },
  direccion: { type: String }
});

module.exports = mongoose.model('Order', OrderSchema);