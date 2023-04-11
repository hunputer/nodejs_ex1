//express = require('express')
import {checkValidationPhone, createToken, printTokenResult} from './phone.js'
import express from 'express'
const app = express()
const port = 3000

app.use(express.json());
app.get('/boards', (req, res) => {
  //1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
  const result = [
    {number: 1, writer:"철수", title:"제목입니다~~", contents : "내용이에요@@@"},
    {number: 2, writer:"영희", title:"제목입니다~~", contents : "내용이에요@@@"},
    {number: 3, writer:"훈이", title:"제목입니다~~", contents : "내용이에요@@@"}
  ]

  //2. 꺼내온 결과 응답 주기

  res.send(result);
})

app.post('/boards', (req, res) => {
  console.log(req.body);

  //1. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기

  //2. 저장 결과 응답 주기

  const result = [{code : 200, message:"게시물 등록에 성공하였습니다!"}]

  res.send(result);
})

app.post( '/tokens/phone', (req, res) => {

  const aaa = req.body.myphone;

   //1.휴대폰번호 자릿수 맞는지 확인하기
    const isValid = checkValidationPhone(aaa);

    if(!isValid){
       console.log("자릿수가 틀립니다.");
       return;     
    }

    const token = createToken(6);

    if(token == -1){
        return;
    }

    printTokenResult(aaa, token);

    res.send("인증완료!!!");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})