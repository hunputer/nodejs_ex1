export function checkValidationPhone(myphone){
    const isValid = true;

    if(myphone.length != 10 && myphone.length != 11){
        console.log("에러발생!! 핸드폰 번호를 제대로 입력해 주세요!!");
        return false;
    }

    return isValid;
}

export function createToken(aaaa){

    if(aaaa == undefined){
        console.log("에러 발생!!! 갯수를 제대로 입력해 주세용");
        return -1;
    }else if(aaaa <= 0){
        console.log("에러 발생 갯수가 너무 적습니다");
        return -1;
    }else if(aaaa > 10){
        console.log("에러 발생 갯수가 너무 많습니다");
        return -1;
    }

    const result =  String(Math.floor(Math.random()* 10 ** aaaa)).padStart(aaaa,"0");
    return result;
}

export function printTokenResult(phone, token){
    console.log(phone + "번호로 인증번호" + token + "를 전송합니다!!");
}