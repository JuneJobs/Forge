//Promise pattern
var storeTempUserInfo = function(firstName, lastName, userId, password){
    

    var generator = new codeGen();
    var vc = generator.generateCodes('####', 1, {});
    var ac = generator.generateCodes('*#*#*#*#*#*#*#*#*#*#', 1, {});
    var promiseFirst = new Promise(resolve => resolve(1)).then(result => );
    //redis.set(key, firstName);
    redisCli.incr("tempUi");
    redisCli.get("tempUi", function (err, reply) {
        redisCli.set("u:" + reply + ":uid", userId, 'EX', 300, redis.print);
        redisCli.set("u:" + reply + ":pw", password, 'EX', 300, redis.print);
        redisCli.set("u:" + reply + ":fn", firstName, 'EX', 300, redis.print);
        redisCli.set("u:" + reply + ":ln", lastName, 'EX', 300, redis.print);
        redisCli.set("u:" + reply + ":vc", vc, 'EX', 300, redis.print);
        redisCli.set("u:" + reply + ":ac", ac, 'EX', 300, redis.print);
    })
}

function setData() {
    return new Promise({

    })
}

setData()
    .then(userInfo)
    .then(tempUi)

module.exports = storeTempUserInfo;
