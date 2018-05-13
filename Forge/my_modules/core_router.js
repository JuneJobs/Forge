var _path = __dirname + '/../Views';
var storeTempUserInfo = require('./sgu.js'); //웹 클라이언트 라우팅

router.get("/",function(req,res){
    res.sendFile("/Forms/SignIn.html", {'root': _path});
});

router.get("/Themes/logo-ucsd.png", function (req, res) {
    console.log('test');
    res.sendFile("/Themes/logo-ucsd.png", { 'root': _path });
});

//Login
router.get("/sendVerifyMail", function (req, res) {
    // const mailOptions = {
    //     from: 'jack7777ok@gmail.com',
    //     to: req.query.USERID,
    //     subject: 'Hello, this is Jack',
    //     html: '<h1>have a good day</h1>'
    // }
    // transporter.sendMail(mailOptions, (error, info) => {
    //     if(error){
    //         res.send("error");
    //     } else {
    //         res.send(req.query.USERID);
    //     }
    //     transporter.close();
    // })
    
    storeTempUserInfo(req.query.FIRSTNAME, req.query.LASTNAME, req.query.USERID, req.query.PASSWORD);
    res.send("ok");
});