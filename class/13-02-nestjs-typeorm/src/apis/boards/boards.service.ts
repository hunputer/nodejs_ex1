import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardService {
  // aaa() {
  //   return 'Hello World';
  // }
  findAll() {
    const result = [
      {
        number: 1,
        writer: '철수',
        title: '제목입니다~~',
        contents: '내용이에요@@@',
      },
      {
        number: 2,
        writer: '영희',
        title: '제목입니다~~',
        contents: '내용이에요@@@',
      },
      {
        number: 3,
        writer: '훈이',
        title: '제목입니다~~',
        contents: '내용이에요@@@',
      },
    ];

    return result;
  }

  create() {
    return '등록에 성공하였습니다';
  }
}
