var sys           = require('sys');
var poyo_database = require('./lib/database.js');
var poyo_table    = require('./lib/table.js');

var database = poyo_database.new("localhost", "root", "", "test");
    database.connect();
var table    = poyo_table.new(database, "test_table");

result = table.execute("select * from ?;", []);
rows = result.fetchAllSync();

sys.puts("Tables in database '" + database + "':");
sys.puts(sys.inspect(rows) + "\n");
