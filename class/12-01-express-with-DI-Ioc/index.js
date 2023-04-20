import express from 'express'
import { ProductController } from './mvc/controllers/product.controller.js';
import { CouponController } from './mvc/controllers/coupon.controller.js';
import { CashService } from './mvc/controllers/services/cash.service.js';
import { ProductService } from './mvc/controllers/services/product.service.js';
import { PointService } from './mvc/controllers/services/point.service.js';

const app = express()

const cashService = new CashService();
const pointService = new PointService();
const productService = new ProductService();//new 한번으로 모든 곳에서 재사용 가능(싱글톤패턴)

// 상품 API
const productController = new ProductController(cashService, productService);
app.post("/products/buy", productController.buyProduct)
app.post("/products/refund",productController.refundProduct)

//쿠폰(상품권) API
const couponController = new CouponController(pointService);
app.post("/coupons/buy", couponController.buyCoupon)


app.listen(3000)