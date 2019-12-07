var request_smoke_price = function(asset, element_id) {
  return new Promise(resolve => {
    var requestURL = `/json/${asset}.json`;
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
      var response = request.response;
      document.getElementById(element_id + "price").innerHTML = parseFloat((response.market_ticker.latest.price).toFixed(5));

      var last_value = 1;
      if (asset == "smoke_bts") {
        last_value = parseFloat((response.market_ticker.latest.price).toFixed(5));
      } else if (asset == "bts_usd") {
        last_value = parseFloat((response.market_ticker.latest.price).toFixed(5));
      } else if (asset == "rudexsmoke_bts") {
        last_value = parseFloat((response.market_ticker.latest.price).toFixed(5));
      }

      var diff_in_secs = Math.floor((Date.now() - Date.parse(response.timestamp))/1000);

      document.getElementById(element_id + "timestamp").innerHTML = diff_in_secs.toString() + "s";

      resolve(last_value);
    }
  });
}

const price_function = async function f1() {
  var last_smoke_bts = await request_smoke_price('smoke_bts', 'smoke_bts_');
  var last_rudex_smoke_bts = await request_smoke_price('rudexsmoke_bts', 'rudexsmoke_bts_');
  var last_bts_usd = await request_smoke_price('bts_usd', 'bts_usd_');
  document.getElementById("smoke_usd_price").innerHTML = parseFloat((((last_smoke_bts + last_rudex_smoke_bts)/2) * last_bts_usd).toFixed(5));
}

price_function();
