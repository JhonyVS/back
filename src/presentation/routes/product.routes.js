const { Router } = require('express');
const ProductController = require('../controller/product.controller');

// Middlewares
const { mockAuthMiddleware } = require('../middlewares/mock-auth.middleware');
const { checkAdminRole } = require('../middlewares/auth.middleware');

// Esta es la "Inyección de Dependencias" manual
const ProductService = require('../../application/use-cases/product.service');

const ProductMongoRepository = require('../../infrastructure/repositories/database/mongo/product.mongo.repository');
const productRepository = new ProductMongoRepository();

const productService = new ProductService(productRepository);
const productController = new ProductController(productService);

const router = Router();
router.get('/', productController.getAll);
router.get('/:id', productController.getById);
router.post('/', mockAuthMiddleware, checkAdminRole, productController.create); // Requiere rol admin
router.put('/:id', mockAuthMiddleware, checkAdminRole, productController.update); // Requiere rol admin
router.delete('/:id', mockAuthMiddleware, checkAdminRole, productController.delete); // Requiere rol admin

module.exports = router;
