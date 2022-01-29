## <u>English Edition</u>   <u>[中文版说明](README_CN.md)</u>

![NPM](https://img.shields.io/npm/l/zhanghua_date)   ![npm](https://img.shields.io/npm/dw/zhanghua_date)  ![npm collaborators](https://img.shields.io/npm/collaborators/zhanghua_date)   ![npm bundle size](https://img.shields.io/bundlephobia/min/zhanghua_date)

### 1、Name

​    **zhanghua_date**

### 2、Description

​     **zhanghua_date is a node.js package that parses, validates, manipulates, and displays dates and times** 

### 3、How to Use

#### 	3.1 Download Package

```node.js
	npm i zhanghua_date
```

#### 	3.2 Usage

```node.js
	
	var mytest=require("zhanghua_date");
	
	console.log(mytest.GetNowTime());       	//2022-01-25 12:25:30
	
```

#### 3.3 Function Description

```
（1）function GetNowTime()
	param: None
	Description: output the formatted time string of the current time, default format 'yyyy-MM-dd hh:mm:ss' 
  		
（2）function GetNowFormatTime(string fmt ='yyyy-MM-dd hh:mm:ss')
	param: time format of string type，The specific format is shown in Section 3.4；default format 'yyyy-MM-dd hh:mm:ss'
	Description: output the formatted time string of the current time
	
（3）function GetUnixTimeStamp(string fmt ='ms')
	param:  'ms' 13 bits Unix timestamp； 
  			'ss' 10 bits Unix timestamp；
  			default 'ms'
	Description: output the Unix time stamp of the current time
  		When the parameter is 'ms', for example：1643077881 
  		When the parameter is 'ms', for example：1643077881789
  		
（4）function UnixTimeToDateTime(number unixTime, string fmt ='yyyy-MM-dd hh:mm:ss')
	param1: 10 bits or 13 bits Unix timestamp
	param2: the formatted time string of the current time, default format 'yyyy-MM-dd hh:mm:ss' 
	Description: convert Unix timestamp to a specific time format string
  	
（5）function GetMonthDate(var date)
  	param: 13 bits Unix timestamp，string format of time ，Date type，
  		default the current time。
        	The following formats are supported, such as：
        	var date = 1643077881789;
        	var date = '2022-01-09 09:30:05';
        	var date = '09/01/22 09:30:05';
        	var date = new Date();
  	Description: output the month name
  		
（6）function GetMonthDateCN(var date)
  	param: 13 bits Unix timestamp，string format of time ，Date type，
  			default the current time
        	The following formats are supported, such as：
        	var date = 1643077881789;
        	var date = '2022-01-09 09:30:05';
        	var date = '09/01/22 09:30:05';
        	var date = new Date();
  	Description: output the month name in chinese
  		
（7）function GetWeekDate(var date)
  	param: 13 bits Unix timestamp，string format of time ，Date type，
  			default the current time。
    The following formats are supported, such as：
        	var date = 1643077881789;
        	var date = '2022-01-09 09:30:05';
        	var date = '09/01/22 09:30:05';
        	var date = new Date();
  	Description: output the week name
  		
（8）function GetWeekDateCN(var date)
  	param: 13 bits Unix timestamp，string format of time ，Date type
  			default the current time。
    The following formats are supported, such as：
        	var date = 1643077881789;
        	var date = '2022-01-09 09:30:05';
        	var date = '09/01/22 09:30:05';
        	var date = new Date();
  	Description: output the week month name in chinese
  		
（9）function IsDateType(var date) 	
  	param: 13 bits Unix timestamp，string format of time ，Date type，
  			default the current time。
 	Description: whether it is a date type，return boolen type
 		
（10）function ParseDate(var date)
  	param: 13 bits Unix timestamp，string format of time ，Date type，
  			default the current time。
 	The following formats are supported, such as：
        	var date = 1643077881789;
        	var date = '2022-01-09 09:30:05';
        	var date = '09/01/22 09:30:05';
        	var date = new Date();
 	Description: output the Date type，unrecognized return ''
 		
（11）function GetFormatTime(Date date, string fmt ='yyyy-MM-dd hh:mm:ss')
	param1: Date type，default the current time
   	param2: time format of string type，The specific format is shown in Section 3.4；default format 'yyyy-MM-dd hh:mm:ss'
 	Description: output a formatted string of time
```

 		

#### 3.4 String of time type

Take  2022-01-09 09:30:05:056  as an example

| String of time type                | Output                             |
| :--------------------------------- | ---------------------------------- |
| yyyy-MM-dd hh:mm:ss                | 2022-01-09 09:30:05                |
| yyyy-M-d h:mm:s                    | 2022-1-9  9:30:5                   |
| yyyy-MM-dd hh:mm:ss:fff            | 2022-01-09 09:30:05:056            |
| yyyy-M-d h:mm:s:f                  | 2022-01-09 09:30:05:56             |
| yyyy/MM/dd hh:mm:ss                | 2022/01/09 09:30:05                |
| yyyy/M/d h:mm:s                    | 2022/1/9  9:30:5                   |
| yyyy/MM/dd hh:mm:ss:fff            | 2022/01/09 09:30:05:056            |
| yyyy/M/d h:mm:s:f                  | 2022/01-/09 09:30:05:56            |
| dd/MM/yy hh:mm:ss                  | 09/01/22 09:30:05                  |
| d/M/yy h:mm:s                      | 9/1/22 9:30:5                      |
| dd/MM/yy hh:mm:ss:fff              | 09/01/22 09:30:05:056              |
| d/M/yy h:mm:s:f                    | 9/1/22 9:30:5:56                   |
| MM/dd/yy hh:mm:ss                  | 01/09/22 09:30:05                  |
| M/d/yy h:mm:s                      | 1/9/22 9:30:5                      |
| MM/dd/yy hh:mm:ss:fff              | 01/09/22 09:30:05:056              |
| M/d/yy h:mm:s:f                    | 1/9/22 9:30:5:56                   |
| dd/MM/yyyy hh:mm:ss                | 09/01/2022 09:30:05                |
| d/M/yyyy h:mm:s                    | 9/1/2022 9:30:5                    |
| dd/MM/yyyy hh:mm:ss:fff            | 09/01/2022 09:30:05:056            |
| d/M/yyyy h:mm:s:f                  | 9/1/2022 9:30:5:56                 |
| yyyyMMddhhmmss                     | 20220109093005                     |
| yyyyMMddhhmmssfff                  | 20220109093005056                  |
| yyyy年MM月dd日 hh时mm分ss秒        | 2022年01月09日 09时30分05秒        |
| yyyy年M月d日 h时m分s秒             | 2022年1月9日 9时30分5秒            |
| yyyy年MM月dd日 hh时mm分ss秒fff毫秒 | 2022年01月09日 09时30分05秒056毫秒 |
| yyyy年M月d日 h时m分s秒f毫秒        | 2022年1月9日 9时30分5秒56毫秒      |
| yyyy-MM-dd                         | 2022-01-09                         |
| yyyy-M-d                           | 2022-1-9                           |
| yyyy/MM/dd                         | 2022/01/09                         |
| yyyy/M/d                           | 2022/1/9                           |
| dd/MM/yyyy                         | 09/01/2022                         |
| d/M/yyyy                           | 9/1/2022                           |
| dd/MM/yy                           | 09/01/22                           |
| d/M/yy                             | 9/1/2022                           |
| MM/dd/yy                           | 01/09/22                           |
| M/d/yy                             | 1/9/22                             |
| yyyy年MM月dd日                     | 2022年01月09日                     |
| yyyy年M月d日                       | 2022年1月9日                       |
| hh:mm:ss                           | 09:30:05                           |
| h:mm:s                             | 9:30:5                             |
| hh时mm分ss秒                       | 09时30分05秒                       |
| h时m分s秒                          | 9时30分5秒                         |

#### 	3.5 Examples of use

```node.js
	
	var mytest=require("zhanghua_date");
	
	// GetNowTime function for example
	console.log(mytest.GetNowTime());   //2022-01-09 09:30:05
	
	//   09/01/2022 09:30:05
	console.log(mytest.GetNowTime('dd/MM/yy hh:mm:ss'));   
	
	//2022-01-09 09:30:05:056
	console.log(mytest.GetNowTime('yyyy-MM-dd hh:mm:ss:fff'));  
	
	// GetNowFormatTime function for example
	console.log(mytest.GetNowFormatTime());	//2022-01-09 09:30:05
	
	//  09/01/2022 09:30:05
	console.log(mytest.GetNowFormatTime('dd/MM/yy hh:mm:ss'));	
	
	//20220109093005056
	console.log(mytest.GetNowFormatTime('yyyyMMddhhmmssfff'));	
	
	// GetUnixTimeStamp function for example
	console.log(mytest.GetUnixTimeStamp());		//1643084730250
	
	console.log(mytest.GetUnixTimeStamp('ms'));	//1643084730250
	
	console.log(mytest.GetUnixTimeStamp('ss'));	//1643084730
	
	// UnixTimeToDateTime function for example
	
	//2022-01-25 12:25:30
	console.log(mytest.UnixTimeToDateTime(1643084730250));
	
	//2022-01-25 12:25:30
	console.log(mytest.UnixTimeToDateTime(1643084730));	
    
	// 25/01/22 12:25:30:250
	console.log(mytest.UnixTimeToDateTime(1643084730250,'dd/MM/yy hh:mm:ss'));	
	
	// GetMonthDate function for example
	console.log(mytest.GetMonthDate());  //  "January"

	// GetMonthDateCN function for example
	console.log(mytest.GetMonthDateCN(1643084730250));  //  "一月"
	
	// GetWeekDate function for example
	console.log(mytest.GetWeekDate());  //  "Monday"

	// GetWeekDateCN function for example
	console.log(mytest.GetWeekDateCN(1643084730250));  // "星期一"
	
	// IsDateType function for example
	console.log(mytest.IsDateType(1643084730250));  //  "true"

	// ParseDate function for example
	console.log(mytest.ParseDate('2022-01-25 12:25:30')); 
    
   	//GetFormatTime function for example
   	
   	// 09/01/2022 09:30:05
	console.log(mytest.GetFormatTime('','dd/MM/yy hh:mm:ss'));  
	
```

### 4、Structure

```
├── package.json          // configuration file 1
├── package-lock.json     // configuration file 2
├── node_modules          // Reference module
├── scr                   // Source file
│   ├── index.js
├── test                  // Test file
│   ├── index.test.js
├── index.js              // Entry file
├── README.md             // Instructions in English
├── README_CN.md          // Instructions in Chinese
├── LicenseEN.md             // License in English
├── LicenseCN.md          // License in Chinese
```

### 5、Author

​    Author：Hua Zhang 

​	Email：33072324@163.com

### 6、License

​     This package is licensed under a [MIT License](LicenseEN.md). 

### 7、Version

​    2022-01-24 V1.0.0  Initialize version release

​    2022-01-24 V1.0.2 Modified annotation

​	2022-01-25 V1.0.4 Add unit test

​	2022-01-26 V1.0.6 update function name and parameters

​	2022-01-26 V1.0.8 update document description

​	2022-01-29 V1.0.10 Add new functions such as getformattime

### 8、Contributors

​    2022-01-24  Hua Zhang