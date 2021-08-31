module.exports = {   // = module.exports = template;
    HTML : function(title, list, body, control) {
      return `
      <!DOCTYPE html>
      <html>
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${title}</title>
          <link rel="stylesheet" href="css/style.css">
          <style>
          @font-face {
            font-family:"ffont";
            src: url("/fonts/font.ttf");
            }
            @font-face {
                font-family:"fffont";
                src: url("/fonts/englishf.otf");
            }
          </style>
      </head> 
      <body>
          <div id="grid">
              <div class="titleblank">
                  made by. LHJ
              </div>
          <div class="head">
              <h1 style="text-align: center;">쇼미더머니</h1>
          </div>
          <div class="menubar">  
          <ul class="headMenu">
            ${list}
          </ul>
          </div>
          <div class="blank">
          </div>
              <div class="sidemenu">
              <p style="margin-top: 0px;">
                  <a class="winner" href="우승자.html">
                  쇼미더머니 시즌별 우승자 →
                  </a>
              </p>
              <p>
                  <a class="rank" href="순위.html">
                  쇼미더머니 조회수 순위 →     
                  </a>
              </p>
              <p class="top5">
              내가 좋아하는 래퍼  top5
              </p>
              <ul class="rapper">
                  <li><a class ="menulink1" href="rapper/비와이">비와이</a></li>
                  <li><a class ="menulink1" href="index">창모</a></li>
                  <li><a class ="menulink1" href="머쉬베놈">머쉬베놈</a></li>
                  <li><a class ="menulink1" href="미란이">미란이</a></li>      
                  <li><a class ="menulink1" href="index">김하온</a></li>
              </ul>     
              </div>
              <div class="maintext">
              ${control}
                  ${body}
              </div>
              <div class="item">
                  <img src="images/images.jpg" width="200" style="margin-left: 15px; margin-top: 15px;">
                  <img src="images/images1.jpg" width="200" style="margin-left: 15px; margin-top: 50px;">
                  <p style="margin-left: 50px; font-size:17px; font-style: oblique;">
                      모든 출처는 Mnet! 
                      <br>수익창출 X
                  </p>
              </div>
              <div class="bottomm">
              </div>
              <div class="finish">
                  @made by. LHJ :D
              </div>    
          </div>
      </body> 
      </html> 
      `;
  
    },
    list : function(filelist) {
      var list = '';
      for (var i = 0; i < filelist.length; i++) {
        list += `<li><a class ="menulink" href="/topic/${filelist[i]}">${filelist[i]}</a></li>`
      }
      return list;
    }
    
  }

