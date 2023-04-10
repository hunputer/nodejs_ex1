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
            <div>가입일 : ${createdAt}</div>
        </body>
    </html>
    `
    return result;
}

export function sendTemplateToEmail(email, mytemplate){
    console.log(`
    ${email}로 이메일 전달하였습니다.<br>
    ${mytemplate}
    `)
}