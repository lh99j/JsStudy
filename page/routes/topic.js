
var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var template = require('../lib/template2.js');

router.get('/create', (request, response) => {
    var title = 'Web/create';
    var list = template.list(request.list);
    var list2 = template.list2(request.list2);
    var html = template.HTML(title, list,list2, `
        <form action="/topic/create_process" method="post">
          <input type="text" name="title" placeholder="title">
          <p>
            <textarea name="description" placeholder="description"></textarea>
          </p>
          <p>
            <input type="submit">
          </p>
        </form>
        `, '');
    response.send(html);
});


router.post('/create_process', (request, response) => {
    var post = request.body;
    var title = post.title;
    var description = post.description;
    fs.writeFile(`data/${title}`, description, 'utf-8', function (err) {
        response.redirect(302, `/topic/${title}`)
    })
});


router.get('/:pageId', (request, response, next) => {
    var filteredId = path.parse(request.params.pageId).base;
    fs.readFile(`data/${filteredId}`, 'utf-8', function (err, description) {
        if (err) {
            next(err);
        } else {
            var title = request.params.pageId;
            var list = template.list(request.list);
            var list2 = template.list2(request.list2);
            var html = template.HTML(title, list,list2,description,
            `
            <a href="/topic/create" style="text-decoration:none; margin-left:20px; margin-top:100px">만들기<a> 
            <a href="/topic/update/${title}" style="text-decoration:none;">수정하기</a>
            <form action="/topic/delete_process" method="post">
              <input type="hidden" name="id" value="${title}">  
              <input type="submit" style=" margin-left:20px; margin-top:20px" value="페이지 삭제하기">
            </form>
            `
            );
            response.send(html);
        }
    });
});


router.get('/update/:pageId', (request, response) => {
    var list = template.list(request.list);
    var list2 = template.list2(request.list2);
    var filteredId = path.parse(request.params.pageId).base
    fs.readFile(`data/${filteredId}`, 'utf8', function (err, description) {
        var title = request.params.pageId;
        var html = template.HTML(title, list,list2, `
        <form action="/topic/update_process" method="post">
        <input type="hidden" name="id" value="${title}">
        <input type="text" name="title" placeholder="title" value="${title}">
        <p>
          <textarea name="description" placeholder="description">${description}</textarea>
        </p>
        <p>
          <input type="submit">
        </p>
        </form>
        `, `<a href="/topic/create">create</a> <a href="/topic/update/${title}">update</a>`);
        response.writeHead(200);
        response.end(html);
    });
});



router.post('/update_process', (request, response) => {
    var post = request.body;
    var id = post.id;
    var title = post.title;
    var description = post.description;
    fs.rename(`data/${id}`, `data/${title}`, function (err) {
        fs.writeFile(`data/${title}`, description, 'utf-8', function (err) {
            response.redirect(302, `/topic/${title}`);
        })
    })
});


router.post('/delete_process', (request, response) => {
    var post = request.body;
    var id = post.id;
    var filteredId = path.parse(id).base;
    fs.unlink(`data/${filteredId}`, function (err) {
        response.redirect(302, '/');
    })
});


module.exports = router;
