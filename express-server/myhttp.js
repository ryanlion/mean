import { createFetch, base, accept, parse } from 'http-client';
import * as _ from 'underscore';
import {History} from './models/chart_history'
const request = require("es6-request");


class MyHttp {
    constructor() {
        //this.principal = principal;
        this.base_url = "http://marketdata.websol.barchart.com/";
        this.barchart_key = "db1cf917d8b8547742f179bf472285db";
        this.fetch = createFetch(
            base(this.base_url),  // Prefix all request URLs
            accept('application/json'),         // Set "Accept: application/json" in the request headers
            parse('json')                       // Read the response as JSON and put it in response.body
        )
    }


    get(aspect,options) {
        let url = `${aspect}.json?key=${this.barchart_key}`;
        let params = "";

        _.each(_.keys(options), function(key) {
            params += `&${key}=${options[key]}`;
        });
        url = this.base_url + url + params;

        request.get(url)
            .then((body) => {
                let results = JSON.parse(body[0])["results"];
                results.forEach(result => {
                    var history = new History(result);
                    console.log(history);
                })


                // should output this README file!
            });
        //this.fetch(url).then(response => {
        //console.log(response.jsonData)
        //});
    }
}
export {MyHttp};
