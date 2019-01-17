

const requestHandler = (req, res) => {
  const url = req.url;

  if(url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Greeting</title></head>');
    res.write('<body>');
    res.write('<h1>Hello from my Node.js server!</h1>');
    res.write('<form action="/create-user" method="POST"><input type="text" name="username"/><button type="submit">Submit</button></form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  if(url === '/users') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Greeting</title></head>');
    res.write('<body>');
    res.write('<ul>');
    res.write('<li>user1</li>');
    res.write('<li>user2</li>');
    res.write('<li>user3</li>');
    res.write('</ul>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  if(url === '/create-user') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString(); // username=whatever-the-user-entered
      console.log('parsedBody: ', parsedBody.split('=')[1]);
    });
    res.statusCode = 302;
    res.setHeader('Location', '/');
    res.end();
  }
};

module.exports = {
  requestHandler
};