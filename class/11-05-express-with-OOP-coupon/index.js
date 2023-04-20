import express from 'express'
import {ProductController} from './mvc/controllers/product.controller'
import { ConponController } from './mvc/controllers/conpon.controller'

const app = express()


// 상품 API
const productController = new ProductController();
app.post("/products/buy", productController.buyProduct)
app.post("/products/refund",productController.refundProduct)

//쿠폰(상품권) API
const conponController = new ConponController();
app.post("/conpons/buy", conponController.buyCoupon)


app.listen(3000)