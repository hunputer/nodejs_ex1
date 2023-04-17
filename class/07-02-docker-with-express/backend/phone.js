import coolsms from 'coolsms-node-sdk'
import 'dotenv/config'

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
    const SMS_KEY = process.env.SMS_KEY;
    const SMS_SECRET = process.env.SMS_SECRET;
    const SMS_SENDER = process.env.SMS_SENDER;

    const mysms = coolsms.default;
    const messageService = new mysms(SMS_KEY, SMS_SECRET);
    const result = await messageService.sendOne({
        to: `${phone}`,
        from : SMS_SENDER,
        text : `안녕하세요 요청하신 인증번호는 [${token}]입니다.`
    })

    console.log(result);

    //console.log(phone + "번호로 인증번호" + token + "를 전송합니다!!");
}

