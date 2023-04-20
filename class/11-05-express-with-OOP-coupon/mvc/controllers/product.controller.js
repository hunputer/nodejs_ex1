import { CashService } from "./services/cash.service";
import { ProductService } from "./services/product.service";

export class ProductController{
    buyProduct = (req, res) => {
        // 1. 가진돈 검증하는 코드 (대략 10줄 정도)
        const cashService = new CashService()
        const hasMoney = cashService.checkValue();
    
        // 2. 판매여부 검증하는 코드 (대략 10줄 정도)
        const productService = new ProductService();
        const isSoldout = productService.checkSoldout();
        
        // 3. 상품 구매하는 코드
        // if(돈있음 && 판매완료){
    
        if(hasMoney && !isSoldout){
            res.send("상품 구매 완료!!")
        }
    }

    refundProduct = (req, res) => {
        // 1. 판매여주 검증하는 코드(대략 10줄 정도)
        const productService = new ProductService();
        const isSoldout = productService.checkSoldout();
    
    
        //2. 상품 환불하는 코드
        // if(판매완료)
        if(isSoldout){
            res.send("상품 환불 완료!!")
        }
    }
}