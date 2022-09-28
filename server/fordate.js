function day_n_time() {
  let date_ob = new Date();
  let date = ("0" + date_ob.getDate()).slice(-2);
  let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  let year = date_ob.getFullYear();
  let hours = date_ob.getHours();
  let minutes = date_ob.getMinutes();
  let seconds = date_ob.getSeconds();
  // prints date & time in YYYY-MM-DD HH:MM:SS format
  let today_is = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds
  return {'today_is': today_is}
}

module.exports.the_day = day_n_time()