class Order {
  constructor({
    producto,
    descripcion,
    cantidad,
    precio,
    descuento = 0,
    total,
    fecha = new Date(),
    estado = 'pendiente',
    cliente = null,
    direccion = null
  }) {
    this.producto = producto; // Puede ser un ID o un objeto
    this.descripcion = descripcion;
    this.cantidad = cantidad;
    this.precio = precio;
    this.descuento = descuento;
    this.total = total;
    this.fecha = fecha;
    this.estado = estado; // pendiente, pagado, enviado, entregado, cancelado
    this.cliente = cliente; // Opcional: info de cliente
    this.direccion = direccion; // Opcional: dirección de entrega
  }
}

module.exports = Order;
