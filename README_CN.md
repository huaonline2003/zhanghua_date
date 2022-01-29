## **[English Edition](https://github.com/huaonline2003/zhanghua_date/blob/main/README.md)**   <u>**中文版说明**</u> 

![NPM](https://img.shields.io/npm/l/zhanghua_date)   ![npm](https://img.shields.io/npm/dw/zhanghua_date)  ![npm collaborators](https://img.shields.io/npm/collaborators/zhanghua_date)   ![npm bundle size](https://img.shields.io/bundlephobia/min/zhanghua_date)

### 1、项目名称

​    **zhanghua_date**

### 2、项目说明

​     zhanghua_date 是一个轻量的处理时间和日期的nodejs库 

### 3、如何使用

#### 	3.1 下载模块

```node.js
	npm i zhanghua_date
```

#### 	3.2 使用示例

```node.js
	
	var mytest=require("zhanghua_date");
	
	console.log(mytest.GetNowTime());       	//2022-01-25 12:25:30
	
```

#### 3.3 函数说明

```
  （1）function GetNowTime()
  		param: None
  		Description: 输出当前时间的格式化时间字符串,输出格式为 yyyy-MM-dd hh:mm:ss 
  		
  （2）function GetNowFormatTime(string fmt ='yyyy-MM-dd hh:mm:ss')
  		param: 字符串类型的时间格式，具体格式如3.4节所示；默认格式 'yyyy-MM-dd hh:mm:ss'
  		Description: 输出当前时间的格式化时间字符串
	
  （3）function GetUnixTimeStamp(string fmt ='ms')
  		param: 'ms' 输出精确到毫秒； 'ss' 输出精确毫秒；默认'ms'
  		Description: 获取当前时间的Unix时间戳
  		当参数为ss，输出格式为10位Unix时间戳 例如：1643077881 
  		当参数为ms，输出格式为13位Unix时间戳 例如：1643077881789
  		
  （4）function UnixTimeToDateTime(number unixTime, string fmt ='yyyy-MM-dd hh:mm:ss')
  		param1: unixTime为10位或者13位的Unix时间戳
  		param2: 字符串类型的时间格式，具体格式如3.4节所示；默认格式 'yyyy-MM-dd hh:mm:ss'
  		Description: 将Unix时间戳转换为标准时间格式字符串
  	
  （5）function GetMonthDate(var date)
  		param: number类型的13位Unix时间，或标准的时间string格式，或Date类型，
  			   当为空时默认当前该时刻的时间
        	支持以下几种格式，例如：
        	var date = 1643077881789;
        	var date = '2022-01-09 09:30:05';
        	var date = '09/01/22 09:30:05';
        	var date = new Date();
  		Description: 获取英文月份
  		
  （6）function GetMonthDateCN(var date)
  		param: number类型的13位Unix时间，或标准的时间string格式，或Date类型
  			   当为空时默认当前该时刻的时间。
        	支持以下几种格式，例如：
        	var date = 1643077881789;
        	var date = '2022-01-09 09:30:05';
        	var date = '09/01/22 09:30:05';
        	var date = new Date();
  		Description: 获取中文月份
  		
  （7）function GetWeekDate(var date)
  		param: number类型的13位Unix时间，或标准的时间string格式，或Date类型，
  			   当为空时默认当前该时刻的时间。
        	支持以下几种格式，例如：
        	var date = 1643077881789;
        	var date = '2022-01-09 09:30:05';
        	var date = '09/01/22 09:30:05';
        	var date = new Date();
  		Description: 获取英文星期几
  		
  （8）function GetWeekDateCN(var date)
  		param: number类型的13位Unix时间，或标准的时间string格式，或Date类型，
  			   当为空时默认当前该时刻的时间。
        	支持以下几种格式，例如：
        	var date = 1643077881789;
        	var date = '2022-01-09 09:30:05';
        	var date = '09/01/22 09:30:05';
        	var date = new Date();
  		Description: 获取中文星期几
  		
  （9）function IsDateType(var date) 	
 		param: number类型的13位Unix时间，或string格式，或Date类型
 		Description: 判断是否为Date类型，返回 boolen类型
 		
  （10）function ParseDate(var date)
 		param: number类型的13位Unix时间，或string格式，或Date类型
 		    支持以下几种格式，例如：
        	var date = 1643077881789;
        	var date = '2022-01-09 09:30:05';
        	var date = '09/01/22 09:30:05';
        	var date = new Date();
 		Description: 将number、标准时间string格式转换为Date类型，无法识别返回''
 		
  （11）function GetFormatTime(Date date, string fmt ='yyyy-MM-dd hh:mm:ss')
   		param1: Date类型的时间，当为空时默认当前时刻的时间
   		param2: 字符串类型的时间格式，具体格式如3.4节所示；当为空时默认'yyyy-MM-dd hh:mm:ss'格式
 		Description: 输出格式化时间字符串
 		
```

#### 3.4 字符串类型的时间格式

以当前时间为2022-01-09 09:30:05:056为例

| 字符串类型的时间格式               | 示例输出                           |
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

#### 	3.5 程序使用示例

```node.js
	
	var mytest=require("zhanghua_date");
	
	// GetNowTime 功能示例
	console.log(mytest.GetNowTime());       	//2022-01-09 09:30:05
	
	console.log(mytest.GetNowTime('dd/MM/yy hh:mm:ss'));   	//   09/01/2022 09:30:05
	
	console.log(mytest.GetNowTime('yyyy-MM-dd hh:mm:ss:fff'));  //2022-01-09 09:30:05:056
	
	// GetNowFormatTime 功能示例
	console.log(mytest.GetNowFormatTime());		//2022-01-09 09:30:05
	
	console.log(mytest.GetNowFormatTime('dd/MM/yy hh:mm:ss'));	//  09/01/2022 09:30:05
	
	console.log(mytest.GetNowFormatTime('yyyyMMddhhmmssfff'));	//20220109093005056
	
	// GetUnixTimeStamp 功能示例
	console.log(mytest.GetUnixTimeStamp());		//1643084730250
	
	console.log(mytest.GetUnixTimeStamp('ms'));	//1643084730250
	
	console.log(mytest.GetUnixTimeStamp('ss'));	//1643084730
	
	// UnixTimeToDateTime 功能示例
	console.log(mytest.UnixTimeToDateTime(1643084730250));		//2022-01-25 12:25:30
	
	console.log(mytest.UnixTimeToDateTime(1643084730));			//2022-01-25 12:25:30
	
	console.log(mytest.UnixTimeToDateTime(1643084730250,'dd/MM/yy hh:mm:ss'));	// 25/01/22 12:25:30:250
	
	// GetMonthDate 功能示例
	console.log(mytest.GetMonthDate());  //    "January"

	// GetMonthDateCN 功能示例
	console.log(mytest.GetMonthDateCN(1643084730250));  //    "一月"
	
	// GetWeekDate function for example
	console.log(mytest.GetWeekDate());  //    "Monday"

	// GetWeekDateCN 功能示例
	console.log(mytest.GetWeekDateCN(1643084730250));  //    "星期一"
	
	// IsDateType 功能示例
	console.log(mytest.IsDateType(1643084730250));  //    "true"

	// ParseDate 功能示例
	console.log(mytest.ParseDate('2022-01-25 12:25:30')); 
    
   	//GetFormatTime 功能示例
	console.log(mytest.GetFormatTime('','dd/MM/yy hh:mm:ss'));  // 09/01/2022 09:30:05
	
```

### 4、目录结构

```
├── package.json          // 应用配置1
├── package-lock.json     // 应用配置2
├── node_modules          // 引用模块
├── scr                   // 源文件
│   ├── index.js
├── test                  // 测试文件
│   ├── index.test.js
├── index.js              // 入口文件
├── README.md             // 英文版说明
├── README_CN.md          // 中文版说明
├── LicenseEN.md             // 英文版License
├── LicenseCN.md          // 中文版License
```

### 5、项目作者

​    项目作者：Hua Zhang（张 华）  

​	联系方式：33072324@163.com

### 6、版权说明

​    该项目执行MIT授权许可，详情请参阅[MIT协议](https://github.com/huaonline2003/zhanghua_date/blob/main/LicenseCN.md)

### 7、版本控制

​    2022-01-24 V1.0.0 初始化版本发布

​    2022-01-24 V1.0.2 修改了注释发布

​	2022-01-25 V1.0.4 添加单元测试发布

​	2022-01-26 V1.0.6 更改函数名及参数发布

​	2022-01-26 V1.0.8 更改文档说明

​	2022-01-29 V1.0.10 添加 GetFormatTime等新的函数

### 8、历史贡献者

​    2022-01-24  Hua Zhang（张 华）   