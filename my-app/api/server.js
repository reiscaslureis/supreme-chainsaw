const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser)

// Custom route that requires authentication
server.post('/api/auth', (req, res) => {

    if (req.body['username'] != "username" || req.body['password'] != "password") {
        res.status(401).json({ error: 'Unauthorized' });
    } else {
        res.status(200).json({ error: 'Authorized' });
    }

    console.log(req.body)

});

server.use(middlewares);
server.use(router);

server.listen(3000, "192.168.0.5", () => {
    console.log('JSON Server is running');
});