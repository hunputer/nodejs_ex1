import {checkValidationPhone, createToken, printTokenResult} from './phone.js'

console.log("안녕하세요")

function createTokenOfPhone(myphone){
    //1.휴대폰번호 자릿수 맞는지 확인하기
    const isValid = checkValidationPhone(myphone);

    if(!isValid){
       console.log("자릿수가 틀립니다.");
       return;     
    }

    const token = createToken(6);

    if(token == -1){
        return;
    }

    printTokenResult(myphone, token);
}

createTokenOfPhone("01012345678");