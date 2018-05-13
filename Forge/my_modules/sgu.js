
var storeTempUserInfo = function(firstName, lastName, userId, password){
    
    //redis.set(key, firstName);
    redisCli.incr("tempUi");
    redisCli.get("tempUi", function (err, reply) {
        redisCli.set("u:" + reply + ":uid", userId, 'EX', 300, redis.print);
        redisCli.set("u:" + reply + ":pw", password, 'EX', 300, redis.print);
        redisCli.set("u:" + reply + ":fn", firstName, 'EX', 300, redis.print);
        redisCli.set("u:" + reply + ":ln", lastName, 'EX', 300, redis.print);
    });
}
module.exports = storeTempUserInfo;