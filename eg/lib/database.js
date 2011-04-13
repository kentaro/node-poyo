var poyo_database = require('../../lib/poyo_database_sync.js');

if (typeof Test == 'undefined') Test = {};

Test.DataBase = function (host, user, password, dbname) {
    this.host     = host;
    this.user     = user;
    this.password = password;
    this.database = dbname;
};

Test.DataBase.prototype = poyo_database.new();

exports.new = function (host, user, password, dbname) {
    return new Test.DataBase(host, user, password, dbname);
};
