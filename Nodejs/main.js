
var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var template = require('./lib/template.js');
var path = require('path');
var sanitizeHtml = require('sanitize-html');


// var template = {
//   HTML : function(title, list, body, control) {
//     return `
//     <!doctype html>
//     <html>
//     <head>
//       <title>WEB1 - ${title}</title>
//       <meta charset="utf-8">
//     </head>
//     <body>
//       <h1><a href="/">WEB</a></h 1>   
//     ${list}
//     ${control}
//     ${body}
//     </body>
//     </html>
//     `;

//   },
//   list : function(filelist) {
//     var list = '<ul>';
//     for (var i = 0; i < filelist.length; i++) {
//       list += `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`
//     }
//     list += '</ul>';
//     return list;
//   }
// }

// function templateHTML(title, list, body, control) {
//   return `
//   <!doctype html>
//   <html>
//   <head>
//     <title>WEB1 - ${title}</title>
//     <meta charset="utf-8">
//   </head>
//   <body>
//     <h1><a href="/">WEB</a></h1>
//   ${list}
//   ${control}
//   ${body}
//   </body>
//   </html>
//   `;
// }

// function templateList(filelist) {
//   var list = '<ul>';
//   for (var i = 0; i < filelist.length; i++) {
//     list += `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`
//   }
//   list += '</ul>';
//   return list;
// }



var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;
  if (pathname === '/') { 
    if (queryData.id === undefined) {

      fs.readdir('./data', function (err, filelist) {
        var title = 'Welcome';
        var description = 'Hello Node.js'
        // var list = templateList(filelist);
        var list = template.list(filelist);
        // var template = templateHTML(title, list, `<h2>${title}</h2>${description}`,`<a href="/create">create</a>`);
        var html = template.HTML(title, list, `<h2>${title}</h2>${description}`,`<a href="/create">create</a>`);
        response.writeHead(200);
        response.end(html);
      });

    } else {
      fs.readdir('./data', function (err, filelist) {
        // var list = templateList(filelist);
        var filteredId = path.parse(queryData.id).base;
        fs.readFile(`data/${filteredId}`, 'utf8', function (err, description) {
          var title = queryData.id;
          var sanitizedTitle = sanitizeHtml(title);
          var sanitizedDescription = sanitizeHtml(description, {
            allowedTags:['h1']
          });
          var list = template.list(filelist);
          // var template = templateHTML(title, list, `<h2>${title}</h2>${description}`,
          // `<a href="/create">create</a> 
          // <a href="/update?id=${title}">update</a>
          // <form action="/delete_process" method="post">
          //   <input type="hidden" name="id" value="${title}">
          //   <input type="submit" value="delete">
          // </form>`
          // );
          var html = template.HTML(sanitizedTitle, list, `<h2>${sanitizedTitle}</h2>${sanitizedDescription}`,
          `<a href="/create">create</a> 
          <a href="/update?id=${sanitizedTitle}">update</a>
          <form action="/delete_process" method="post">
            <input type="hidden" name="id" value="${sanitizedTitle}">  
            <input type="submit" value="delete">
          </form>`
          );
          response.writeHead(200);
          response.end(html);
        });
     
      });
    }
  } else if (pathname === '/create') {
    fs.readdir('./data', function (err, filelist) {
      var title = 'Web/create';
      // var list = templateList(filelist);
      var list = template.list(filelist);
      // var template = templateHTML(title, list,`
      // <form action="/create_process" method="post">
      //   <input type="text" name="title" placeholder="title">
      //   <p>
      //     <textarea name="description" placeholder="description"></textarea>
      //   </p>
      //   <p>
      //     <input type="submit">
      //   </p>
      // </form>
      // `,'');
      var html = template.HTML(title, list,`
      <form action="/create_process" method="post">
        <input type="text" name="title" placeholder="title">
        <p>
          <textarea name="description" placeholder="description"></textarea>
        </p>
        <p>
          <input type="submit">
        </p>
      </form>
      `,'');
      response.writeHead(200);
      response.end(html);
    });
  }else if(pathname ==='/create_process'){
    var body = '';
    request.on('data',function(data){
      body = body + data;
    });
    request.on('end',function(){
      var post = qs.parse(body);
      var title = post.title;
      var description = post.description;
      fs.writeFile(`data/${title}`,description, 'utf-8', function(err){
        response.writeHead(302, {Location : `/?id=${title}`});
        response.end();
      })
    });
  }else if(pathname === '/update'){
    fs.readdir('./data', function (err, filelist) {
      // var list = templateList(filelist);
      var list = template.list(filelist);
      var filteredId = path.parse(queryData.id).base
      fs.readFile(`data/${filteredId}`, 'utf8', function (err, description) {
        var title = queryData.id;
        // var template = templateHTML(title, list, `
        // <form action="/update_process" method="post">
        // <input type="hidden" name="id" value="${title}">
        // <input type="text" name="title" placeholder="title" value="${title}">
        // <p>
        //   <textarea name="description" placeholder="description">${description}</textarea>
        // </p>
        // <p>
        //   <input type="submit">
        // </p>
        // </form>
        // `,`<a href="/create">create</a> <a href="/update?id=${title}">update</a>`);
        var html = template.HTML(title, list, `
        <form action="/update_process" method="post">
        <input type="hidden" name="id" value="${title}">
        <input type="text" name="title" placeholder="title" value="${title}">
        <p>
          <textarea name="description" placeholder="description">${description}</textarea>
        </p>
        <p>
          <input type="submit">
        </p>
        </form>
        `,`<a href="/create">create</a> <a href="/update?id=${title}">update</a>`);
        response.writeHead(200);
        response.end(html);
      });
    });
  }else if(pathname ==='/update_process'){
    var body = '';
    request.on('data',function(data){
      body = body + data;
    });
    request.on('end',function(){
      var post = qs.parse(body);
      var id = post.id;
      var title = post.title;
      var description = post.description;
      fs.rename(`data/${id}`,`data/${title}`,function(err){
        fs.writeFile(`data/${title}`,description, 'utf-8', function(err){
          response.writeHead(302, {Location : `/?id=${title}`});
          response.end();
        })
      })
    });
  }else if(pathname ==='/delete_process'){
    var body = '';
    request.on('data',function(data){
      body = body + data;
    });
    request.on('end',function(){
      var post = qs.parse(body);
      var id = post.id;
      var filteredId = path.parse(id).base;
      fs.unlink(`data/${filteredId}`,function(err){
        response.writeHead(302, {Location: `/`});
        response.end(); 
      })
    });
  }
  else {
    response.writeHead(404);
    response.end('Not found');
  }
});
app.listen(3000);
