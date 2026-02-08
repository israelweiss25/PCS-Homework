import express from 'express';

const app = express();

app.use('/', (req, res, next) => {
    let num1 = Number(req.query.num1);
    let num2 = Number(req.query.num2);
    if (Number.isFinite(num1) && Number.isFinite(num2)) {
        req.num1 = num1;
        req.num2 = num2;
        next()
    } else {
        res.status(400);
        res.send('<h1 style="color:red"> 400 - Bad request, not a type of number</h1>')
    }
})

app.get('/add', (req, res, next) => {
    res.send(`total is : ${req.num1 + req.num2}`)
})
app.get('/subtract', (req, res, next) => {
    res.send(`total is : ${req.num1 - req.num2}`)
})
app.get('/operator:operator', (req, res, next) => {
    let opSymbol = req.params.operator.replace(':', '');
    switch (opSymbol) {
        case '+':
            res.send(`total is : ${req.num1 + req.num2}`);
            break;
        case '-':
            res.send(`total is : ${req.num1 - req.num2}`);
            break;
        case '*':
            res.send(`total is : ${req.num1 * req.num2}`);
            break;
        case '/':
            res.send(`total is : ${req.num1 / req.num2}`);
            break;
    }
    res.end(() => console.log(req.params.operator, opSymbol))
})
app.listen(80);
