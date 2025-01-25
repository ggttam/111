if ($response.statusCode != 200) {
  $done(Null);
}

var body = $response.body;
var obj = JSON.parse(body);
var title = obj['regionName'] + obj['city']; 
var subtitle = obj['query'];
var ip = obj['query'];

$done({title, subtitle, ip});