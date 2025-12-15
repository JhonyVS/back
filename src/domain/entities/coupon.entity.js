class Coupon {
  constructor({
    code,
    descripcion,
    descuento,
    tipo = 'porcentaje', // porcentaje o fijo
    fechaInicio = new Date(),
    fechaExpiracion,
    usoMaximo = null,
    usoActual = 0,
    activo = true,
    minimoCompra = 0
  }) {
    this.code = code; // Código único del cupón
    this.descripcion = descripcion;
    this.descuento = descuento; // Valor del descuento (porcentaje o cantidad fija)
    this.tipo = tipo; // 'porcentaje' o 'fijo'
    this.fechaInicio = fechaInicio;
    this.fechaExpiracion = fechaExpiracion;
    this.usoMaximo = usoMaximo; // null = ilimitado
    this.usoActual = usoActual;
    this.activo = activo;
    this.minimoCompra = minimoCompra; // Monto mínimo de compra para aplicar
  }
}

module.exports = Coupon;
