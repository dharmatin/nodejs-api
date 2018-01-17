import express from "express";
import bodyParser from "body-parser";
import accessLog from "morgan";
import path from "path";
import fs from "fs";
import config from "./common/config.json";
import dateFormat from "dateformat";
import routes from "./routes";

const app = express();
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, `${config.development.accessLog}/access-${dateFormat(new Date(), "yyyymmdd")}.log`), 
  {flags: 'a'}
);

//set date token to localtime
accessLog.token('date', function() {
  var p = new Date().toString().replace(/[A-Z]{3}\+/,'+').split(/ /);
  return( p[2]+'/'+p[1]+'/'+p[3]+':'+p[4]+' '+p[5] );
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(accessLog('combined', {stream: accessLogStream}));

routes(app);

export default app;


