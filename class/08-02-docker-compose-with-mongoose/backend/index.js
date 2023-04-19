//express = require('express')
import {checkValidationPhone, createToken, printTokenResult} from './phone.js'
import { checkValidationEmail, getWelcomeTemplate, sendTemplateToEmail} from './email.js'
import {Board} from './models/board.model.js'

import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
const app = express()
const port = 3000

app.use(express.json());
app.use(cors())
app.get('/boards', async (req, res) => {
  //1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
  const result = await Board.find();

  //2. 꺼내온 결과 응답 주기

  res.send(result);
})

app.post('/boards', async (req, res) => {
  console.log(req.body);

  //1. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기

  const board = new Board({
    writer : req.body.writer,
    title : req.body.title,
    contents : req.body.contents
  })
  await board.save()

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

app.post( '/users', (req, res) =>{
  const user = req.body.myUser;

  const inValid = checkValidationEmail(user.email);

  if(inValid){
      const mytemplate = getWelcomeTemplate(user);

      sendTemplateToEmail(user.email, mytemplate);
  }

  res.send("회원가입이 완료되었습니다!!");
})

//몽고DB 접속!!
await mongoose.connect("mongodb://my-database:27017/mydocker03")

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})