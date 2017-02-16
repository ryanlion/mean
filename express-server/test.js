import {MyHttp} from "./myhttp";
let http = new MyHttp();
var options = {
  "symbol": "IBM",
  "type": "daily",
  "startDate": "20151209000000"
}
http.get("getHistory",options);
var CronJob = require('cron').CronJob;
/*new CronJob('* * * * * *', function() {
  console.log('You will see this message every second');
}, null, true, 'America/Los_Angeles');*/
