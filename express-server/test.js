import {MyHttp} from "./myhttp";
import {History} from './models/chart_history';
let http = new MyHttp();
var mongoose = require('mongoose');
var options = {
  "symbol": "IBM",
  "type": "daily",
  "startDate": "20151209000000"
}
mongoose.connect('mongodb://localhost/mean');
http.get("getHistory",options, function (err, results) {
  console.log("sssssssss");
  results.forEach(result => {
     var history = new History(result);
     history.save();
     console.log("saved");
  });
  //console.log(results);
});

//var CronJob = require('cron').CronJob;
/*new CronJob('* * * * * *', function() {
  console.log('You will see this message every second');
}, null, true, 'America/Los_Angeles');*/
