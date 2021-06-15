const express = require('express');
const express_monitor = require('express-status-monitor')();
const responseTime = require('response-time');
const cors = require('cors');
const os = require('os');

const app = express();

app.use(responseTime());
app.use(express_monitor);
app.use(cors({
    origin: '*',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))

app.get('/api', (req, res) => {
    console.log
    res.send('hello, world!')
})

console.log(os.cpus());
// console.log(os.totalmem());
// console.log(os.freemem())

app.listen(5050);
