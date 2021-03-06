var express = require('express');
var router = express.Router();
var template = require('../lib/template.js');

router.get('/', function (request, response) {
    var title = 'Welcome';
    var description = 'Hello Node.js'
    var list = template.list(request.list);
    var html = template.HTML(title, list,
      `<h2>${title}</h2>${description}
      <link rel="stylesheet" href="../css/style.css">
        <img src="images/images.jpg" style="width:100px; display : block; margin : 10px;">`,
      `<a href="/topic/create">create</a>`);
    response.send(html);
  });

module.exports = router;