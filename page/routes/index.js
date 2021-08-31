var express = require('express');
var router = express.Router();
var template = require('../lib/template2.js');

router.get('/', function (request, response) {
    var title = 'Show!!';
    var list = template.list(request.list);
    var list2 = template.list2(request.list2);
    var context = `            
    <img src="images/1.jpg" width="250" style="padding-left: 20px; padding-top: 20px; padding-right: 20px; float: left;">
    <p style="text-align:center; font-size:23px">쇼미더머니9 "Drop The Beat!!"</p>
    쇼미더머니는 'WHO IS THE NEXT YOUNG BOSS?' 한국 힙합 씬의 새로운 주인공으로 등극할 ‘Young Boss’라는 타이틀을 두고 대결하는 힙합 서바이벌 프로그램.
    쇼미더머니 <p>시즌은 총 1~9까지 9개의 시즌이있음.</p>
    <p>쇼미더머니9은 2020-10-16부터 시작해서 2020-12-18일까지 총 10부작이며 금요일 오후 11:00에 Mnet에서 생방송으로 방영된다.</p>
    쇼미더머니는 총 10라운드이며 
    <p>
        <p>1. 1차예선  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2. 60초 팀 래퍼 선발전 &nbsp;&nbsp;&nbsp;3. 리더 선발 싸이퍼 &nbsp;&nbsp;&nbsp;4. 트리플 크루 배틀</p> 
        <p>5. 음원 배틀 &nbsp;&nbsp;&nbsp;&nbsp; 6. 팀 디스 배틀 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
        7. 본선 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8. 세미파이널</p>
        <p>9. 결승전 1라운드 &nbsp;&nbsp;10. 결승전 2라운드가 있음.</p>
    </p>
    <p>네이버에서 1.650원에 다시보기로 시청가능하며 시청률은 2.1%나옴.</p>
    <p style="margin-bottom: 30px; margin-top: 30px;">쇼미더머니9에 참가한 프로듀서는 총 4팀이며</p>
    <p style="text-align: center;">1. 다이나믹듀오 X 비와이 팀</p>
    <iframe width="900" height="506" src="https://www.youtube.com/embed/wmy-fTX2w_A" 
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="padding-left: 85px;"></iframe>
    <p style="text-align: center; margin-top: 130px; margin-bottom: 20px;">2. 저스디스 X 그루비룸 팀</p>
    <iframe width="900" height="506" src="https://www.youtube.com/embed/yRKrep_Imu8" 
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="padding-left: 85px;"></iframe>
    <p style="text-align: center; margin-top: 130px; margin-bottom: 20px;">3. 자이언티 X 기리보이 팀</p>
    <iframe width="900" height="506" src="https://www.youtube.com/embed/ehAW4Uvhxks" 
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="padding-left: 85px;"></iframe>
    <p style="text-align: center; margin-top: 130px; margin-bottom: 20px;">4. 코드 쿤스트 X 팔로알토 팀</p>
    <iframe width="900" height="506" src="https://www.youtube.com/embed/bTcFouKzmrE" 
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="padding-left: 85px;"></iframe>
    <p style="font-style:oblique; font-size: 6px; text-decoration: line-through; text-align: right ; margin-right: 60px;">
        쇼미더머니9이 역대급이라는 소문이 자자하다!!
    </p>`;
    var html = template.HTML(title, list,list2,context,'');


    response.send(html);
  });

module.exports = router;