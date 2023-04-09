const apple = 3;
const banana = 2;

console.log(`철수는 사과를 ${apple}개 바나나를 ${banana}개 가지고 있습니다`);

function getWelcomeTemplate(user){
    const result = `
        <html>
            <body>
                <h1>${user.name}님 가입을 환영합니다!!!</h1>
                <hr/>
                <div>이름 : ${user.name}</div>
                <div>나이 : ${user.age}</div>
                <div>학교 : ${user.school}</div>
                <div>가입일 : ${user.createdAt}</div>
            </body>
        </html>
    `

    console.log(result);
}

const myUser ={
    name: "영희",
    age: 12,
    school: "토끼초등학교",
    createdAt: "2020-01-02"
}

getWelcomeTemplate(myUser);