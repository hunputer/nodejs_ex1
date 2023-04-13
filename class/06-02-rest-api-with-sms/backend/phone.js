import coolsms from 'coolsms-node-sdk'

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

export async function printTokenResult(phone, token){

    const mysms = coolsms.default;
    const messageService = new mysms("NCS9KXDXPCSEXXVU","FU9W4FY1XL6UQP9IQKV0GJ1NP87UNXIH");
    const result = await messageService.sendOne({
        to: `${phone}`,
        from : '01072773791',
        text : `안녕하세요 요청하신 인증번호는 [${token}]입니다.`
    })

    console.log(result);

    //console.log(phone + "번호로 인증번호" + token + "를 전송합니다!!");
}