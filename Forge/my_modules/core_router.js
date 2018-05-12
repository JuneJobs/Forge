var _path = __dirname + '/../Views';

router.get("/",function(req,res){
    res.sendFile("/Forms/SignIn.html", {'root': _path});
});
router.get("/Themes/logo-ucsd.png", function (req, res) {
    console.log('test');
    res.sendFile("/Themes/logo-ucsd.png", { 'root': _path });
});