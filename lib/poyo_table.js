var sys = require('sys');

if (typeof Poyo == 'undefined') Poyo = {};

Poyo.Table = function () {};

Poyo.Table.prototype.execute = function (sql, binds) {
    binds.unshift(this.table);
    return this.database.execute(sql, binds);
    //return new global[this.row_class](result);
};

Poyo.Table.prototype.puts_table = function () {
    sys.puts(this.table);
}

exports.new = function () {
    return new Poyo.Table();
}
