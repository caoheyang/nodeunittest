var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);

app.get("/a",function(req,res){
    res.send("adwwdd")
})
//定制404页面
app.use(function (req, res) {
    res.type('text/plain');
    res.status(404);
    res.end('404 NOT Found');
});

//定制500页面
app.use(function (req, res) {
    res.type('text/plain');
    res.status(500);
    res.end('500 Server Error');
});


app.listen(app.get('port'), function () {
    console.log('express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.')
})
