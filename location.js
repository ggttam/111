if ($response.statusCode != 200) {
  $done(Null);
}

var body = $response.body;
var obj = JSON.parse(body);
var title = obj['country'] + obj['regionName'] + obj['city']; 
var subtitle = obj['query'];
var ip = obj['query'];
var description = "国家" + ":" + obj['country'] + '\n' 
+ "城市" + ":" + obj['city'] + '\n' 
+ "ip" + ":" + obj['query'] + '\n' 
+ "数据中心" + ":" + obj['org'];

$done({title, subtitle, ip, description});