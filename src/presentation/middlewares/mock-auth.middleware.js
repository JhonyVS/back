
const mockAuthMiddleware = (req, res, next) => {

  const userRole = req.headers['x-user-role']; 
  const userId = req.headers['x-user-id'] || 'user-123';

  if (!userRole) {
    return res.status(401).json({ 
      message: 'No autenticado. Proporcione el header x-user-role para pruebas.' 
    });
  }


  req.user = {
    id: userId,
    role: userRole
  };

  next();
};

module.exports = { mockAuthMiddleware };
