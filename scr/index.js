/********************************************
 * Title: index.js
 * Package None
 * Description: A JavaScript date library for parsing, manipulating, and formatting dates
 * author Zhang Hua
 * date 2022-01-24
 * version V1.0
 ********************************************/

/***
 * Description: get the current time and dates
 * param: none
 * return: for example-> 2022-01-25 10:31:21
 * throws: ''
 ***/
function GetNowTime() {
  var fmt = "yyyy-MM-dd hh:mm:ss";

  var date = new Date(); //get current time and date

  //formatting dates
  var currentFormatDate = GetFormatTime(date, fmt);

  return currentFormatDate;
}

/***
 * Description: formatting dates
 * param:  One of the format types, default yyyy-mm-dd hh:mm:ss
 * return: for example-> 2022-01-25 10:31:21
 * throws: ''
 ***/
function GetNowFormatTime(fmt) {
  if (!fmt) fmt = "yyyy-MM-dd hh:mm:ss"; //default yyyy-mm-dd hh:mm:ss

  var date = new Date();  //get current time and date

  //formatting dates
  var currentFormatDate = GetFormatTime(date, fmt);

  return currentFormatDate;
}

/***
 * Description: get the Unix Time Stamp
 * param: 'ss' is accurate to seconds; 'ms' is accurate to milliseconds, default 'ms'
 * return: for example-> 1643169944 or 1643169944633
 * throws: ''
 ***/
function GetUnixTimeStamp(acc) {
  var a = acc ? acc : "ms"; //default 'ms'

  a = a.toString().replace(/M/g, "m").replace(/S/g, "s");

  var time;
  if (a === "ms") {
    time = new Date().getTime();
  } else if (a === "ss") {
    time = parseInt(new Date().getTime() / 1000);
  } else {
    return "";
  }

  if (typeof time !== "number" || time < 0) return "";
  else return time;
}

/***
 * Description: convert this unix time stamp to standard time format
 * param: unixTime is 10 digits or 13 digits, fmt is One of the format types, default yyyy-mm-dd hh:mm:ss
 * return: for example-> 2022-01-25 10:31:21 
 * throws: ''
 ***/
function UnixTimeToDateTime(unixTime, fmt) {
  if (!unixTime) return "";

  if (!fmt) fmt = "yyyy-MM-dd hh:mm:ss";

  if (unixTime.toString().length === 10 || unixTime.toString().length === 13) {
    if (typeof unixTime !== "number") return "";

    if (unixTime.toString().length === 10) unixTime = unixTime * 1000;

    var date;

    date = new Date(unixTime);

    if (!IsDateType(date)) return "";

    //formatting dates
    var currentFormatDate = GetFormatTime(date, fmt);

    return currentFormatDate;

  } else {
    return "";
  }
}

/***
 * Description: Return month
 * param: date type，default current date
 * return:  for example->January
 * throws: ''
 ***/
function GetMonthDate(date) {
  var m_date;

  if (date) {
    m_date = new Date(date);
  } else {
    m_date = new Date();
  }

  if (!IsDateType(m_date)) return ""; // check date format

  var index = m_date.getMonth();
  var months = new Array(
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  );
  var month = months[index];
  return month;
}


/***
 * Description: Return month in chinese
 * param: date type，default current date
 * return:  for example->January
 * throws: ''
 ***/
function GetMonthDateCN(date) {
  var m_date;

  if (date) {
    m_date = new Date(date);
  } else {
    m_date = new Date();
  }

  if (!IsDateType(m_date)) return "";

  var index = m_date.getMonth();
  var months = new Array(
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月"
  );
  var month = months[index];
  return month;
}

/***
 * Description: Return month in chinese
 * param: date type，default current date
 * return:  for example->Sunday
 * throws: ''
 ***/
function GetWeekDate(date) {
  var m_date;

  if (date) {
    m_date = new Date(date);
  } else {
    m_date = new Date();
  }

  if (!IsDateType(m_date)) return "";

  var index = m_date.getDay();
  var weeks = new Array(
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  );
  var week = weeks[index];
  return week;
}

/***
 * Description: Return month in chinese
 * param: date type，default current date
 * return:  for example->Sunday
 * throws: ''
 ***/
function GetWeekDateCN(date) {
  var m_date;

  if (date) {
    m_date = new Date(date);
  } else {
    m_date = new Date();
  }

  if (!IsDateType(m_date)) return "";

  var index = m_date.getDay();
  var weeks = new Array(
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六"
  );
  var week = weeks[index];
  return week;
}

/***
 * Description: Check whether it is a Date type
 * param: digit,number,string
 * return: bool type
 * throws: false
 ***/
function IsDateType(s_date) {
  if (!s_date) return false;

  if (s_date instanceof Date && !isNaN(s_date.getTime())) {
    return true;
  } else return false;
}

/***
 * Description: convert to date type
 * param: digit,number,string
 * return: Date or ''
 * throws: ''
 ***/
function ParseDate(s_date) {
  if (!s_date) return "";

  var m_date;
  m_date = new Date(s_date);

  if (IsDateType(m_date)) {
    return m_date;
  } else {
    return "";
  }
}

/***
 * Description: formatting dates
 * param: date is a type of dates, fmt is One of the format types, default yyyy-mm-dd hh:mm:ss
 * return: for example-> 2022-01-25 10:31:21 
 * throws: ''
 ***/
function GetFormatTime(date, fmt) {
  //verify format
  if (!fmt) fmt = "yyyy-MM-dd hh:mm:ss";

  //verify date
  var m_date;
  if (date) {
    if (IsDateType(date)) {
      m_date = date;
    } else {
      return "";
    }
  } else {
    m_date = new Date();
  }

  //ignore capital and small letter ( exception M and m)
  fmt = fmt
    .toString()
    .replace(/Y/g, "y")
    .replace(/D/g, "d")
    .replace(/H/g, "h")
    .replace(/S/g, "s")
    .replace(/F/g, "f");

  var patrn1 = /^y{4}-M{2}-d{2}\sh{2}:m{2}:s{2}$/;
  var patrn2 = /^y{4}-M{1,2}-d{1,2}\sh{1,2}:m{1,2}:s{1,2}$/;
  var patrn3 = /^y{4}-M{2}-d{2}\sh{2}:m{2}:s{2}:f{3}$/;
  var patrn4 = /^y{4}-M{1,2}-d{1,2}\sh{1,2}:m{1,2}:s{1,2}:f{1,3}$/;

  var patrn5 = /^y{4}\/M{2}\/d{2}\sh{2}:m{2}:s{2}$/;
  var patrn6 = /^y{4}\/M{1,2}\/d{1,2}\sh{1,2}:m{1,2}:s{1,2}$/;
  var patrn7 = /^y{4}\/M{2}\/d{2}\sh{2}:m{2}:s{2}:f{3}$/;
  var patrn8 = /^y{4}\/M{1,2}\/d{1,2}\sh{1,2}:m{1,2}:s{1,2}:f{1,3}$/;

  var patrn9 = /^d{2}\/M{2}\/y{2}\sh{2}:m{2}:s{2}$/;
  var patrn10 = /^d{1,2}\/M{1,2}\/y{2}\sh{1,2}:m{1,2}:s{1,2}$/;
  var patrn11 = /^d{2}\/M{2}\/y{2}\sh{2}:m{2}:s{2}:f{3}$/;
  var patrn12 = /^d{1,2}\/M{1,2}\/y{2}\sh{1,2}:m{1,2}:s{1,2}:f{1,3}$/;

  var patrn13 = /^M{2}\/d{2}\/y{2}\sh{2}:m{2}:s{2}$/;
  var patrn14 = /^M{1,2}\/d{1,2}\/y{2}\sh{1,2}:m{1,2}:s{1,2}$/;
  var patrn15 = /^M{2}\/d{2}\/y{2}\sh{2}:m{2}:s{2}:f{3}$/;
  var patrn16 = /^M{1,2}\/d{1,2}\/y{2}\sh{1,2}:m{1,2}:s{1,2}:f{1,3}$/;

  var patrn17 = /^y{4}年M{2}月d{2}日\sh{2}时m{2}分s{2}秒$/;
  var patrn18 = /^y{4}年M{1,2}月d{1,2}日\sh{1,2}时m{1,2}分s{1,2}秒$/;
  var patrn19 = /^y{4}年M{2}月d{2}日\sh{2}时m{2}分s{2}秒f{3}毫秒$/;
  var patrn20 = /^y{4}年M{1,2}月d{1,2}日\sh{1,2}时m{1,2}分s{1,2}秒f{1,3}毫秒$/;

  var patrn21 = /^d{2}\/M{2}\/y{4}\sh{2}:m{2}:s{2}$/;
  var patrn22 = /^d{1,2}\/M{1,2}\/y{4}\sh{1,2}:m{1,2}:s{1,2}$/;
  var patrn23 = /^d{2}\/M{2}\/y{4}\sh{2}:m{2}:s{2}:f{3}$/;
  var patrn24 = /^d{1,2}\/M{1,2}\/y{4}\sh{1,2}:m{1,2}:s{1,2}:f{1,3}$/;

  var patrn1_str = /^y{4}M{2}d{2}h{2}m{2}s{2}$/;
  var patrn2_str = /^y{4}M{2}d{2}h{2}m{2}s{2}f{3}$/;

  var patrn1_date = /^y{4}-M{2}-d{2}$/;
  var patrn2_date = /^y{4}-M{1,2}-d{1,2}$/;
  var patrn3_date = /^y{4}\/M{2}\/d{2}$/;
  var patrn4_date = /^y{4}\/M{1,2}\/d{1,2}$/;
  var patrn5_date = /^d{2}\/M{2}\/y{2}$/;
  var patrn6_date = /^d{1,2}\/M{1,2}\/y{2}$/;
  var patrn7_date = /^M{2}\/d{2}\/y{2}$/;
  var patrn8_date = /^M{1,2}\/d{1,2}\/y{2}$/;
  var patrn9_date = /^y{4}年M{2}月d{2}日$/;
  var patrn10_date = /^y{4}年M{1,2}月d{1,2}日$/;
  var patrn11_date = /^d{2}\/M{2}\/y{4}$/;
  var patrn12_date = /^d{1,2}\/M{1,2}\/y{4}$/;

  var patrn1_time = /^h{2}:m{2}:s{2}$/;
  var patrn2_time = /^h{1,2}:m{1,2}:s{1,2}$/;
  var patrn3_time = /^h{2}时m{2}分s{2}秒$/;
  var patrn4_time = /^h{1,2}时m{1,2}分s{1,2}秒$/;

  var arr_datetime, currentFormatDate;

  //verify string
  if (patrn1.test(fmt)) {
    arr_datetime = splitDate(m_date, true);
    currentFormatDate =
      arr_datetime.yyyy +
      "-" +
      arr_datetime.MM +
      "-" +
      arr_datetime.dd +
      " " +
      arr_datetime.hh +
      ":" +
      arr_datetime.mm +
      ":" +
      arr_datetime.ss;
  } else if (patrn2.test(fmt)) {
    arr_datetime = splitDate(m_date);
    currentFormatDate =
      arr_datetime.yyyy +
      "-" +
      arr_datetime.MM +
      "-" +
      arr_datetime.dd +
      " " +
      arr_datetime.hh +
      ":" +
      arr_datetime.mm +
      ":" +
      arr_datetime.ss;
  } else if (patrn3.test(fmt)) {
    arr_datetime = splitDate(m_date, true);
    currentFormatDate =
      arr_datetime.yyyy +
      "-" +
      arr_datetime.MM +
      "-" +
      arr_datetime.dd +
      " " +
      arr_datetime.hh +
      ":" +
      arr_datetime.mm +
      ":" +
      arr_datetime.ss +
      ":" +
      arr_datetime.fff;
  } else if (patrn4.test(fmt)) {
    arr_datetime = splitDate(m_date);
    currentFormatDate =
      arr_datetime.yyyy +
      "-" +
      arr_datetime.MM +
      "-" +
      arr_datetime.dd +
      " " +
      arr_datetime.hh +
      ":" +
      arr_datetime.mm +
      ":" +
      arr_datetime.ss +
      ":" +
      arr_datetime.fff;
  } else if (patrn5.test(fmt)) {
    arr_datetime = splitDate(m_date, true);
    currentFormatDate =
      arr_datetime.yyyy +
      "/" +
      arr_datetime.MM +
      "/" +
      arr_datetime.dd +
      " " +
      arr_datetime.hh +
      ":" +
      arr_datetime.mm +
      ":" +
      arr_datetime.ss;
  } else if (patrn6.test(fmt)) {
    arr_datetime = splitDate(m_date);
    currentFormatDate =
      arr_datetime.yyyy +
      "/" +
      arr_datetime.MM +
      "/" +
      arr_datetime.dd +
      " " +
      arr_datetime.hh +
      ":" +
      arr_datetime.mm +
      ":" +
      arr_datetime.ss;
  } else if (patrn7.test(fmt)) {
    arr_datetime = splitDate(m_date, true);
    currentFormatDate =
      arr_datetime.yyyy +
      "/" +
      arr_datetime.MM +
      "/" +
      arr_datetime.dd +
      " " +
      arr_datetime.hh +
      ":" +
      arr_datetime.mm +
      ":" +
      arr_datetime.ss +
      ":" +
      arr_datetime.fff;
  } else if (patrn8.test(fmt)) {
    arr_datetime = splitDate(m_date);
    currentFormatDate =
      arr_datetime.yyyy +
      "/" +
      arr_datetime.MM +
      "/" +
      arr_datetime.dd +
      " " +
      arr_datetime.hh +
      ":" +
      arr_datetime.mm +
      ":" +
      arr_datetime.ss +
      ":" +
      arr_datetime.fff;
  } else if (patrn9.test(fmt)) {
    arr_datetime = splitDate(m_date, true);
    currentFormatDate =
      arr_datetime.dd +
      "/" +
      arr_datetime.MM +
      "/" +
      arr_datetime.yyyy.toString().substring(2, 2) +
      " " +
      arr_datetime.hh +
      ":" +
      arr_datetime.mm +
      ":" +
      arr_datetime.ss;
  } else if (patrn10.test(fmt)) {
    arr_datetime = splitDate(m_date);
    currentFormatDate =
      arr_datetime.dd +
      "/" +
      arr_datetime.MM +
      "/" +
      arr_datetime.yyyy.toString().substring(2, 2) +
      " " +
      arr_datetime.hh +
      ":" +
      arr_datetime.mm +
      ":" +
      arr_datetime.ss;
  } else if (patrn11.test(fmt)) {
    arr_datetime = splitDate(m_date, true);
    currentFormatDate =
      arr_datetime.dd +
      "/" +
      arr_datetime.MM +
      "/" +
      arr_datetime.yyyy.toString().substring(2, 2) +
      " " +
      arr_datetime.hh +
      ":" +
      arr_datetime.mm +
      ":" +
      arr_datetime.ss +
      ":" +
      arr_datetime.fff;
  } else if (patrn12.test(fmt)) {
    arr_datetime = splitDate(m_date);
    currentFormatDate =
      arr_datetime.dd +
      "/" +
      arr_datetime.MM +
      "/" +
      arr_datetime.yyyy.toString().substring(2, 2) +
      " " +
      arr_datetime.hh +
      ":" +
      arr_datetime.mm +
      ":" +
      arr_datetime.ss +
      ":" +
      arr_datetime.fff;
  } else if (patrn13.test(fmt)) {
    arr_datetime = splitDate(m_date, true);
    currentFormatDate =
      arr_datetime.MM +
      "/" +
      arr_datetime.dd +
      "/" +
      arr_datetime.yyyy.toString().substring(2, 2) +
      " " +
      arr_datetime.hh +
      ":" +
      arr_datetime.mm +
      ":" +
      arr_datetime.ss;
  } else if (patrn14.test(fmt)) {
    arr_datetime = splitDate(m_date);
    currentFormatDate =
      arr_datetime.MM +
      "/" +
      arr_datetime.dd +
      "/" +
      arr_datetime.yyyy.toString().substring(2, 2) +
      " " +
      arr_datetime.hh +
      ":" +
      arr_datetime.mm +
      ":" +
      arr_datetime.ss;
  } else if (patrn15.test(fmt)) {
    arr_datetime = splitDate(m_date, true);
    currentFormatDate =
      arr_datetime.MM +
      "/" +
      arr_datetime.dd +
      "/" +
      arr_datetime.yyyy.toString().substring(2, 2) +
      " " +
      arr_datetime.hh +
      ":" +
      arr_datetime.mm +
      ":" +
      arr_datetime.ss;
  } else if (patrn16.test(fmt)) {
    arr_datetime = splitDate(m_date);
    currentFormatDate =
      arr_datetime.MM +
      "/" +
      arr_datetime.dd +
      "/" +
      arr_datetime.yyyy.toString().substring(2, 2) +
      " " +
      arr_datetime.hh +
      ":" +
      arr_datetime.mm +
      ":" +
      arr_datetime.ss;
  } else if (patrn17.test(fmt)) {
    arr_datetime = splitDate(m_date, true);
    currentFormatDate =
      arr_datetime.yyyy +
      "年" +
      arr_datetime.MM +
      "月" +
      arr_datetime.dd +
      "日 " +
      arr_datetime.hh +
      "时" +
      arr_datetime.mm +
      "分" +
      arr_datetime.ss +
      "秒";
  } else if (patrn18.test(fmt)) {
    arr_datetime = splitDate(m_date);
    currentFormatDate =
      arr_datetime.yyyy +
      "年" +
      arr_datetime.MM +
      "月" +
      arr_datetime.dd +
      "日 " +
      arr_datetime.hh +
      "时" +
      arr_datetime.mm +
      "分" +
      arr_datetime.ss +
      "秒";
  } else if (patrn19.test(fmt)) {
    arr_datetime = splitDate(m_date, true);
    currentFormatDate =
      arr_datetime.yyyy +
      "年" +
      arr_datetime.MM +
      "月" +
      arr_datetime.dd +
      "日 " +
      arr_datetime.hh +
      "时" +
      arr_datetime.mm +
      "分" +
      arr_datetime.ss +
      "秒" +
      arr_datetime.fff +
      "毫秒";
  } else if (patrn20.test(fmt)) {
    arr_datetime = splitDate(m_date);
    currentFormatDate =
      arr_datetime.yyyy +
      "年" +
      arr_datetime.MM +
      "月" +
      arr_datetime.dd +
      "日 " +
      arr_datetime.hh +
      "时" +
      arr_datetime.mm +
      "分" +
      arr_datetime.ss +
      "秒" +
      arr_datetime.fff +
      "毫秒";
  } else if (patrn21.test(fmt)) {
    arr_datetime = splitDate(m_date, true);
    currentFormatDate =
      arr_datetime.dd +
      "/" +
      arr_datetime.MM +
      "/" +
      arr_datetime.yyyy +
      " " +
      arr_datetime.hh +
      ":" +
      arr_datetime.mm +
      ":" +
      arr_datetime.ss;
  } else if (patrn22.test(fmt)) {
    arr_datetime = splitDate(m_date);
    currentFormatDate =
      arr_datetime.dd +
      "/" +
      arr_datetime.MM +
      "/" +
      arr_datetime.yyyy +
      " " +
      arr_datetime.hh +
      ":" +
      arr_datetime.mm +
      ":" +
      arr_datetime.ss;
  } else if (patrn23.test(fmt)) {
    arr_datetime = splitDate(m_date, true);
    currentFormatDate =
      arr_datetime.dd +
      "/" +
      arr_datetime.MM +
      "/" +
      arr_datetime.yyyy +
      " " +
      arr_datetime.hh +
      ":" +
      arr_datetime.mm +
      ":" +
      arr_datetime.ss +
      ":" +
      arr_datetime.fff;
  } else if (patrn24.test(fmt)) {
    arr_datetime = splitDate(m_date);
    currentFormatDate =
      arr_datetime.dd +
      "/" +
      arr_datetime.MM +
      "/" +
      arr_datetime.yyyy +
      " " +
      arr_datetime.hh +
      ":" +
      arr_datetime.mm +
      ":" +
      arr_datetime.ss +
      ":" +
      arr_datetime.fff;
  } else if (patrn1_str.test(fmt)) {
    arr_datetime = splitDate(m_date, true);
    currentFormatDate =
      arr_datetime.yyyy +
      arr_datetime.MM +
      arr_datetime.dd +
      arr_datetime.hh +
      arr_datetime.mm +
      arr_datetime.ss;
  } else if (patrn2_str.test(fmt)) {
    arr_datetime = splitDate(m_date, true);
    currentFormatDate =
      arr_datetime.yyyy +
      arr_datetime.MM +
      arr_datetime.dd +
      arr_datetime.hh +
      arr_datetime.mm +
      arr_datetime.ss +
      arr_datetime.fff;
  } else if (patrn1_date.test(fmt)) {
    arr_datetime = splitDate(m_date, true);
    currentFormatDate =
      arr_datetime.yyyy + "-" + arr_datetime.MM + "-" + arr_datetime.dd;
  } else if (patrn2_date.test(fmt)) {
    arr_datetime = splitDate(m_date);
    currentFormatDate =
      arr_datetime.yyyy + "-" + arr_datetime.MM + "-" + arr_datetime.dd;
  } else if (patrn3_date.test(fmt)) {
    arr_datetime = splitDate(m_date, true);
    currentFormatDate =
      arr_datetime.yyyy + "/" + arr_datetime.MM + "/" + arr_datetime.dd;
  } else if (patrn4_date.test(fmt)) {
    arr_datetime = splitDate(m_date);
    currentFormatDate =
      arr_datetime.yyyy + "/" + arr_datetime.MM + "/" + arr_datetime.dd;
  } else if (patrn5_date.test(fmt)) {
    arr_datetime = splitDate(m_date, true);
    currentFormatDate =
      arr_datetime.dd +
      "/" +
      arr_datetime.MM +
      "/" +
      arr_datetime.yyyy.toString().substring(2, 2);
  } else if (patrn6_date.test(fmt)) {
    arr_datetime = splitDate(m_date);
    currentFormatDate =
      arr_datetime.dd +
      "/" +
      arr_datetime.MM +
      "/" +
      arr_datetime.yyyy.toString().substring(2, 2);
  } else if (patrn7_date.test(fmt)) {
    arr_datetime = splitDate(m_date, true);
    currentFormatDate =
      arr_datetime.MM +
      "/" +
      arr_datetime.dd +
      "/" +
      arr_datetime.yyyy.toString().substring(2, 2);
  } else if (patrn8_date.test(fmt)) {
    arr_datetime = splitDate(m_date);
    currentFormatDate =
      arr_datetime.MM +
      "/" +
      arr_datetime.dd +
      "/" +
      arr_datetime.yyyy.toString().substring(2, 2);
  } else if (patrn9_date.test(fmt)) {
    arr_datetime = splitDate(m_date, true);
    currentFormatDate =
      arr_datetime.yyyy +
      "年" +
      arr_datetime.MM +
      "月" +
      arr_datetime.dd +
      "日";
  } else if (patrn10_date.test(fmt)) {
    arr_datetime = splitDate(m_date);
    currentFormatDate =
      arr_datetime.yyyy +
      "年" +
      arr_datetime.MM +
      "月" +
      arr_datetime.dd +
      "日";
  } else if (patrn11_date.test(fmt)) {
    arr_datetime = splitDate(m_date, true);
    currentFormatDate =
      arr_datetime.dd + "/" + arr_datetime.MM + "/" + arr_datetime.yyyy;
  } else if (patrn12_date.test(fmt)) {
    arr_datetime = splitDate(m_date);
    currentFormatDate =
      arr_datetime.dd + "/" + arr_datetime.MM + "/" + arr_datetime.yyyy;
  } else if (patrn1_time.test(fmt)) {
    arr_datetime = splitDate(m_date, true);
    currentFormatDate =
      arr_datetime.hh + ":" + arr_datetime.mm + ":" + arr_datetime.ss;
  } else if (patrn2_time.test(fmt)) {
    arr_datetime = splitDate(m_date);
    currentFormatDate =
      arr_datetime.hh + ":" + arr_datetime.mm + ":" + arr_datetime.ss;
  } else if (patrn3_time.test(fmt)) {
    arr_datetime = splitDate(m_date, true);
    currentFormatDate =
      arr_datetime.hh + "时" + arr_datetime.mm + "分" + arr_datetime.ss + "秒";
  } else if (patrn4_time.test(fmt)) {
    arr_datetime = splitDate(m_date);
    currentFormatDate =
      arr_datetime.hh + "时" + arr_datetime.mm + "分" + arr_datetime.ss + "秒";
  } else {
    currentFormatDate = "";
  }

  return currentFormatDate;
}

/***
 * Description: format date type to JSON type
 * param: d is a date type, is_format bool tyoe
 * return: JSON
 * throws: ''
 ***/
function splitDate(d, is_format) {
  var yyyy, MM, dd, hh, mm, ss, fff;
  if (is_format) {
    yyyy = d.getFullYear();
    MM = d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1;
    dd = d.getDate() < 10 ? "0" + d.getDate() : d.getDate();
    hh = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();
    mm = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
    ss = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();
    fff = d.getMilliseconds();

    for (i = fff.toString().length; i < 3; i++) {
      fff = "0" + fff;
    }
  } else {
    yyyy = d.getFullYear();
    MM = d.getMonth() + 1;
    dd = d.getDate();
    hh = d.getHours();
    mm = d.getMinutes();
    ss = d.getSeconds();
    fff = d.getMilliseconds();
  }

  return { yyyy: yyyy, MM: MM, dd: dd, hh: hh, mm: mm, ss: ss, fff: fff };
}

/***
 * Description: function export
 ***/
module.exports = {
  GetNowTime,
  GetNowFormatTime,
  GetUnixTimeStamp,
  UnixTimeToDateTime,
  GetMonthDateCN,
  GetMonthDate,
  GetWeekDateCN,
  GetWeekDate,
  GetFormatTime,
  IsDateType,
  ParseDate,
};
