import express from 'express'
import { ProductController } from './mvc/controllers/product.controller'
import { ConponController } from './mvc/controllers/conpon.controller'
import { CashService } from './mvc/controllers/services/cash.service';
import { ProductService } from './mvc/controllers/services/product.service';

const app = express()

const cashService = new CashService();
const productService = new ProductService();

// 상품 API
const productController = new ProductController(cashService, productService);
app.post("/products/buy", productController.buyProduct)
app.post("/products/refund",productController.refundProduct)

//쿠폰(상품권) API
const conponController = new ConponController(cashService, productService);
app.post("/conpons/buy", conponController.buyCoupon)


app.listen(3000)