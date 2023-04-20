let aaa : string = "안녕하세요"
aaa = 3

let bbb : string = "반갑습니다"
bbb = 10

//타입명시가 필요한 상황
let ccc: string | number = "반갑습니다"
ccc = 10

//숫자타입
let ddd : number = 10
ddd = "철수"

//불린타입
let eee: boolean = true
eee = false

let fff : number[] = [1,2,3,4,5]
let ggg : string[] = ["철수", "영희", "훈이"]
let hhh = [1,2,3,4,5, "안녕하세요"]

interface IProfile{
    name : string,
    age : number | string,
    school : string,
    hobby?: string
}
let profile : IProfile = {
    name : "철수",
    age : 8,
    school: "다람쥐초등학교"
}

profile.age = "8살"
profile.hobby = "수영"

// 함수타입
const add = (money1:number, money2:number, unit:string): string =>{
    return money1+money2+unit
}
const result = add(1000, 2000, "원");