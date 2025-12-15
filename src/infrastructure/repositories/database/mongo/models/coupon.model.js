const mongoose = require('mongoose');

const CouponSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true, uppercase: true, trim: true },
  descripcion: { type: String, required: true },
  descuento: { type: Number, required: true, min: 0 },
  tipo: { type: String, enum: ['porcentaje', 'fijo'], default: 'porcentaje' },
  fechaInicio: { type: Date, default: Date.now },
  fechaExpiracion: { type: Date, required: true },
  usoMaximo: { type: Number, default: null }, // null = ilimitado
  usoActual: { type: Number, default: 0 },
  activo: { type: Boolean, default: true },
  minimoCompra: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Coupon', CouponSchema);
