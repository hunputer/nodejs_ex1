//express = require('express')
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})