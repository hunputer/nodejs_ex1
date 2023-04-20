import { CashService } from "./services/cash.service";
import { ProductService } from "./services/product.service";

export class ConponController{
    buyCoupon = (req, res) =>{
        // 1. 가진돈 검증하는 코드 (대략 10줄 정도)
        const cashService = new CashService()
        const hasMoney = cashService.checkValue();
    
        // 2.쿠폰 구매하는 코드
        if(hasMoney){
            res.send("상품 구매 완료!!")
        }
    }
}