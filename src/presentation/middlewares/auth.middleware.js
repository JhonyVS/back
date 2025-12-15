
const checkAdminRole = (req, res, next) => {
  try {
    const userRole = req.user?.role;

    if (!userRole) {
      return res.status(401).json({ 
        message: 'No autenticado. Se requiere autenticación.' 
      });
    }

    if (userRole !== 'admin') {
      return res.status(403).json({ 
        message: 'Acceso denegado. Se requiere rol de administrador.' 
      });
    }

    next();
  } catch (error) {
    return res.status(500).json({ 
      message: 'Error al validar permisos',
      error: error.message 
    });
  }
};

module.exports = { checkAdminRole };
