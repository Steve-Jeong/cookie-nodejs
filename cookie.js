var http = require('http');
var cookie = require('cookie')
http.createServer(function (request, response) {
   var cookies = {}
   if(request.headers.cookie) {
      cookies = cookie.parse(request.headers.cookie)
      console.log(cookies);
      console.log(cookies.yummy_cookie);
   }
   
   response.writeHead(200, {
      'Set-Cookie' : [
         'yummy_cookie=choco', 
         'tasty_cookie=strawberry',
         `Permanent_cookie=model_cookies; Max-Age=${60*60*24*30}`,
         'Secure=Secure; Secure', //secure cookie tag which shows in https only
         'HttpOnly = HttpOnly; HttpOnly',  // Can be seen Http only, cannot be shown in JavaScript in the console.
         'Path=Path; Path=/cookie',    // cookie in certain route only "/cookie"
         'Domain=Domain; Domain=o2.org'  // works in certain doman only
      ]
   })
   response.end('Cookie!!');
}).listen(3001);
