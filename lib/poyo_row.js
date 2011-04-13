if (typeof Poyo == 'undefined') Poyo = {};

Poyo.Row = function () {};


Poyo.Table.prototype.execute = function (sql, binds) {
    binds.unshift(this.table);
    var result = this.database.execute(sql, binds);
    return new global[this.row_class](result);
};

Poyo.Table.prototype.puts_table = function () {
    sys.puts(this.table);
}

exports.new = function () {
    return new Poyo.Table();
}
