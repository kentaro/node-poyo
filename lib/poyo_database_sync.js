var mysql = require('mysql-libmysqlclient'), conn, result, row, rows;

if (typeof Poyo == 'undefined') Poyo = {};
if (typeof Poyo.DataBase == 'undefined') Poyo.DataBase = {};

Poyo.DataBase.Sync = function () {};

Poyo.DataBase.Sync.prototype.connect = function () {
    this.conn = mysql.createConnectionSync();
    this.conn.connectSync(this.host, this.user, this.password, this.database);
}

Poyo.DataBase.Sync.prototype.bind_sql = function (sql, binds) {
    var i = 0;
    if (!binds || !binds.length) return sql;

    return sql.replace(/\?/g, function (sql, place_hodler) {
        return binds[i++].replace(/(['";])/g, '\\$1');
    });
};

Poyo.DataBase.Sync.prototype.execute = function (sql, binds) {
    sql = this.bind_sql(sql, binds);
    return this.conn.querySync(sql);
};

exports.new = function () {
    return new Poyo.DataBase.Sync();
};
