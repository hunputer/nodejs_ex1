const apple = 3;
const banana = 2;

console.log(`철수는 사과를 ${apple}개 바나나를 ${banana}개 가지고 있습니다`);

function getWelcomeTemplate(name, age, school, createAt){
    const result = `
        <html>
            <body>
                <h1>${name}님 가입을 환영합니다!!!</h1>
                <hr/>
                <div>이름 : ${name}</div>
                <div>나이 : ${age}</div>
                <div>학교 : ${school}</div>
                <div>가입일 : ${createAt}</div>
            </body>
        </html>
    `

    console.log(result);
}

const myname = "영희";
const myage = 12;
const myschool = "다람쥐초등학교";
const mycreatedAt = "2020-01-02";

getWelcomeTemplate(myname, myage, myschool, mycreatedAt);