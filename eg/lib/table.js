var poyo_table = require('../../lib/poyo_table.js');

if (typeof Test == 'undefined') Test = {};

Test.Table = function (database, table_name) {
    this.database = database;
    this.table    = table_name;
};

Test.Table.prototype = poyo_table.new();

exports.new = function (database, table_name) {
    return new Test.Table(database, table_name);
};
