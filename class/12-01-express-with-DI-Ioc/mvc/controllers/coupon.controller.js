import { CashService } from "./services/cash.service.js";
import { ProductService } from "./services/product.service.js";

export class CouponController{

    constructor(myPointService){
        this.pointService = myPointService;
    }

    buyCoupon = (req, res) =>{
        // 1. 가진돈 검증하는 코드 (대략 10줄 정도)
        const cashService = new CashService()
        const hasMoney = this.cashService.checkValue();
    
        // 2.쿠폰 구매하는 코드
        if(hasMoney){
            res.send("상품 구매 완료!!")
        }
    }
}