const express = require('express');
const app = express();
var fs = require('fs');
var bodyParser = require('body-parser');  
var compression = require('compression');
var topicRouter = require('./routes/topic');
var indexRouter = require('./routes/index');
var helmet = require('helmet');
app.use(helmet());


app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false })); //false면 기본으로 내장된 querystring 모듈을 사용하고  true면 따로 설치가 필요한 qs 모듈을 사용하여 쿼리 스트링을 해석합니다.
app.use(compression()); //compresstion을 호출하면 미들웨어를 리턴하기로 약속하기로 되어있고 그것을 app.use로 장착함



app.use((request, response, next) => {
  fs.readdir('./data', function (err, filelist) {
    request.list = filelist;
    next();
  });
})

  app.use('/', indexRouter);
  
  app.use('/topic', topicRouter);

  app.use((request, response, next) =>{
    response.status(404).send('Not Found');
  });

  app.use((err, request, response, next) => {
    console.error(err.stack);
    response.status(500).send('Something broken!!')
  })

  app.listen(3000, () => console.log('Example app listening on port 3000!'));
