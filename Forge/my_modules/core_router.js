var _path = __dirname + '/../Views/Forms';

router.get("/",function(req,res){
    res.sendFile("/Main.html", {'root': _path});
});