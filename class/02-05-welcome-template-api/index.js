import { checkValidationEmail, getWelcomeTemplate, sendTemplateToEmail} from './email.js'

function createUser(user){
    const inValid = checkValidationEmail(user.email);

    if(inValid){
        const mytemplate = getWelcomeTemplate(user);

        sendTemplateToEmail(user.email, mytemplate);
    }
}

const myUser = {
    name : "철수",
    age : 8,
    school : "다람쥐초등학교",
    email : "a@a.com"
}

createUser(myUser);