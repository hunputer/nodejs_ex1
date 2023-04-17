import { getToday } from "./util.js";
import nodemailer from "nodemailer"
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

export function checkValidationEmail(email){
    const inValid = true;

    if(email == null || email.indexOf("@") == -1){
        console.log("유효하지 않은 이메일 입니다");
        return false;
    }

    return inValid;
}

export function getWelcomeTemplate({name, age, school, createdAt}){

    const result = `
    <html>
        <body>
            <h1>${name}님 가입을 환영합니다!!!</h1>
            <hr/>
            <div>이름 : ${name}</div>
            <div>나이 : ${age}</div>
            <div>학교 : ${school}</div>
            <div>가입일 : ${getToday()}</div>
        </body>
    </html>
    `
    return result;
}

export function sendTemplateToEmail(email, mytemplate){
    console.log(process.env.EMAIL_USER);
    console.log(process.env.EMAIL_PASS);
    console.log(process.env);
    console.log("!!!!!!!!!!!!!!!!!!!")

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth : {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    })

    transporter.sendMail({
        from : process.env.EMAIL_USER,
        to : email,
        subject : "회원 가입을 축하합니다!!",
        html: mytemplate
    })
    
    // console.log(`${email}로 이메일 전달하였습니다.<br>${mytemplate}`)
}