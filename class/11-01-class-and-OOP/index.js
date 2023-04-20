const aaa = new Date();
console.log(aaa.getFullYear())
console.log(aaa.getMonth() + 1)

class Monster{
    power = 10

    attack = () =>{
        console.log("공격하자!!")
    }

    run = () =>{
        console.log("도망가자!!")
    }

}

const mymonster1 = new Monster();
mymonster1.attack()
mymonster1.run();

const mymonster2 = new Monster();
mymonster2.attack();
mymonster2.run();
