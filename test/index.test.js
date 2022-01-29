var module_test = require("../index");
var assert = require("assert");

/***
 * Description: GetNowTime模块单元测试
 ***/
describe("测试GetNowTime模块", function () {
  console.log("GetNowTime模块返回结果：" + module_test.GetNowTime());

  it("时间测试结果返回string类型", function () {
    // 被测试代码部分
    assert.equal(
      typeof module_test.GetNowTime(),
      "string",
      "返回结果不对,错误代码：400"
    );
  });

  it("时间测试结果返回string长度等于19", function () {
    // 被测试代码部分
    assert.equal(
      module_test.GetNowTime().length,
      19,
      "返回结果不对,错误代码：401"
    );
  });
});

/***
 * Description: GetNowFormatTime模块单元测试
 ***/
describe("测试GetNowFormatTime模块", function () {
  console.log(
    "GetNowFormatTime模块返回结果1：" + module_test.GetNowFormatTime()
  );
  console.log(
    "GetNowFormatTime模块返回结果2：" +
      module_test.GetNowFormatTime("yyyy-MM-dd hh:mm:ss")
  );
  console.log(
    "GetNowFormatTime模块返回结果3：" +
      module_test.GetNowFormatTime("YYYY-MM-DD HH:mm:SS:FFF")
  );
  console.log(
    "GetNowFormatTime模块返回结果4：" +
      module_test.GetNowFormatTime("yyyy/MM/dd HH:mm:SS")
  );
  console.log(
    "GetNowFormatTime模块返回结果5：" +
      module_test.GetNowFormatTime("dd/MM/YYYY HH:mm:SS")
  );
  console.log(
    "GetNowFormatTime模块返回结果6：" +
      module_test.GetNowFormatTime("DD/MM/YYYY HH:mm:SS:FFF")
  );
  console.log(
    "GetNowFormatTime模块返回结果7：" +
      module_test.GetNowFormatTime("yyyy年MM月dd日 HH时mm分SS秒")
  );
  console.log(
    "GetNowFormatTime模块返回结果8：" +
      module_test.GetNowFormatTime("YYYY年MM月DD日 HH时mm分SS秒FFF毫秒")
  );
  console.log(
    "GetNowFormatTime模块返回结果9：" +
      module_test.GetNowFormatTime("yyyy年M月dd日 HH时mm分SS秒")
  );
  console.log(
    "GetNowFormatTime模块返回结果10：" +
      module_test.GetNowFormatTime("YYYY年M月D日")
  );
  console.log(
    "GetNowFormatTime模块返回结果11：" +
      module_test.GetNowFormatTime("yyyy-MM-dd")
  );
  console.log(
    "GetNowFormatTime模块返回结果12：" +
      module_test.GetNowFormatTime("d/M/YYYY")
  );
  console.log(
    "GetNowFormatTime模块返回结果13：" +
      module_test.GetNowFormatTime("HH:mm:SS")
  );
  console.log(
    "GetNowFormatTime模块返回结果14：" + module_test.GetNowFormatTime("H:m:S")
  );
  console.log(
    "GetNowFormatTime模块返回结果15：" +
      module_test.GetNowFormatTime("HH时mm分SS秒")
  );
  console.log(
    "GetNowFormatTime模块返回结果16：" +
      module_test.GetNowFormatTime("YYYYMMDDHHmmSSFFF")
  );

  it("时间测试结果返回string类型", function () {
    // 被测试代码部分
    assert.equal(
      typeof module_test.GetNowFormatTime(),
      "string",
      "返回结果不对,错误代码：400"
    );
  });

  it("时间测试结果输入非法参数返回1", function () {
    // 被测试代码部分
    assert.equal(
      module_test.GetNowFormatTime("abc123").toString(),
      "",
      "返回结果不对,错误代码：402"
    );
  });

  it("时间测试结果输入非法参数返回2", function () {
    // 被测试代码部分
    assert.equal(
      module_test.GetNowFormatTime(12).toString(),
      "",
      "返回结果不对,错误代码：403"
    );
  });
});

/***
 * Description: GetUnixTimeStamp模块单元测试
 ***/
describe("测试GetUnixTimeStamp模块", function () {
  console.log(
    "GetUnixTimeStamp模块返回结果1：" + module_test.GetUnixTimeStamp()
  );
  console.log(
    "GetUnixTimeStamp模块返回结果2：" + module_test.GetUnixTimeStamp("ss")
  );

  it("时间测试结果返回number类型", function () {
    // 被测试代码部分
    assert.equal(
      typeof module_test.GetUnixTimeStamp(),
      "number",
      "返回结果不对,错误代码：400"
    );
  });

  it("时间测试结果返回number长度等于10", function () {
    // 被测试代码部分
    assert.equal(
      module_test.GetUnixTimeStamp("ss").toString().length,
      10,
      "返回结果不对,错误代码：401"
    );
  });

  it("时间测试结果返回number长度等于13", function () {
    // 被测试代码部分
    assert.equal(
      module_test.GetUnixTimeStamp("ms").toString().length,
      13,
      "返回结果不对,错误代码：402"
    );
  });

  it("时间测试结果返回number长度等于13", function () {
    // 被测试代码部分
    assert.equal(
      module_test.GetUnixTimeStamp().toString().length,
      13,
      "返回结果不对,错误代码：403"
    );
  });

  it("时间测试结果输入乱码返回number长度等于0", function () {
    // 被测试代码部分
    assert.equal(
      module_test.GetUnixTimeStamp("hs").toString().length,
      0,
      "返回结果不对,错误代码：404"
    );
  });

  it("时间测试结果输入乱码返回number长度等于0", function () {
    // 被测试代码部分
    assert.equal(
      module_test.GetUnixTimeStamp(21).toString().length,
      0,
      "返回结果不对,错误代码：405"
    );
  });
});

/***
 * Description: UnixTimeToDateTime模块单元测试
 ***/
describe("测试UnixTimeToDateTime模块", function () {
  console.log(
    "UnixTimeToDateTime模块返回结果1：" +
      module_test.UnixTimeToDateTime(1643077881789)
  );
  console.log(
    "UnixTimeToDateTime模块返回结果2：" +
      module_test.UnixTimeToDateTime(
        1643077881789,
        "YYYY年MM月DD日 HH时mm分SS秒FFF毫秒"
      )
  );
  console.log(
    "UnixTimeToDateTime模块返回结果3：" +
      module_test.UnixTimeToDateTime(1643175739)
  );
  console.log(
    "UnixTimeToDateTime模块返回结果4：" +
      module_test.UnixTimeToDateTime(1643175739, "yyyy/MM/dd HH:mm:SS")
  );

  it("11位时间戳测试结果返回长度标准化19", function () {
    // 被测试代码部分
    assert.equal(
      module_test.UnixTimeToDateTime(1643175739),
      "2022-01-26 13:42:19",
      "返回结果不对,错误代码：400"
    );
  });

  it("11位时间戳测试结果返回长度标准化23", function () {
    // 被测试代码部分
    assert.equal(
      module_test.UnixTimeToDateTime(1643175739, "YYYY-MM-DD HH:mm:SS:FFF"),
      "2022-01-26 13:42:19:000",
      "返回结果不对,错误代码：401"
    );
  });

  it("13位时间戳测试结果返回长度标准化1", function () {
    // 被测试代码部分
    assert.equal(
      module_test.UnixTimeToDateTime(1643077881789, "YYYY-MM-DD HH:mm:SS:FFF"),
      "2022-01-25 10:31:21:789",
      "返回结果不对,错误代码：402"
    );
  });

  it("13位时间戳测试结果返回长度标准化2", function () {
    // 被测试代码部分
    assert.equal(
      module_test.UnixTimeToDateTime(1643077881789),
      "2022-01-25 10:31:21",
      "返回结果不对,错误代码：403"
    );
  });

  it("时间测试结果输入空值", function () {
    // 被测试代码部分
    assert.equal(
      module_test.UnixTimeToDateTime(),
      "",
      "返回结果不对,错误代码：404"
    );
  });

  it("时间测试结果输入位数不对", function () {
    // 被测试代码部分
    assert.equal(
      module_test.UnixTimeToDateTime(164307763212),
      "",
      "返回结果不对,错误代码：405"
    );
  });

  it("时间测试结果输入乱值1", function () {
    // 被测试代码部分
    assert.equal(
      module_test.UnixTimeToDateTime("abc1643077632"),
      "",
      "返回结果不对,错误代码：406"
    );
  });

  it("时间测试结果输入乱值2", function () {
    // 被测试代码部分
    assert.equal(
      module_test.UnixTimeToDateTime(1643077881789, "hs"),
      "",
      "返回结果不对,错误代码：407"
    );
  });

  it("时间测试结果输入乱值3", function () {
    // 被测试代码部分
    assert.equal(
      module_test.UnixTimeToDateTime(16430778817892, "YYYY-MM-DD HH:mm:SS"),
      "",
      "返回结果不对,错误代码：408"
    );
  });

  it("时间测试结果输入乱值4", function () {
    // 被测试代码部分
    assert.equal(
      module_test.UnixTimeToDateTime("", "YYYY-MM-DD HH:mm:SS"),
      "",
      "返回结果不对,错误代码：409"
    );
  });
});

/***
 * Description: GetMonthDate和GetMonthDateCN模块单元测试
 ***/
describe("测试GetMonthDate和GetMonthDateCN模块", function () {
  it("GetMonthDate结果输入值1", function () {
    // 被测试代码部分
    assert.equal(
      module_test.GetMonthDate(1643369132000),
      "January",
      "返回结果不对,错误代码：400"
    );
  });

  it("GetMonthDate结果输入值2", function () {
    // 被测试代码部分
    assert.equal(
      module_test.GetMonthDate("2022-01-25 10:31:21"),
      "January",
      "返回结果不对,错误代码：401"
    );
  });

  it("GetMonthDate结果输入值3", function () {
    // 被测试代码部分
    assert.equal(
      module_test.GetMonthDate("02/25/2022 10:31:21"),
      "February",
      "返回结果不对,错误代码：402"
    );
  });

  it("GetMonthDate输入乱值", function () {
    // 被测试代码部分
    assert.equal(
      module_test.GetMonthDate("abc123"),
      "",
      "返回结果不对,错误代码：403"
    );
  });

  it("GetMonthDateCN结果输入值1", function () {
    // 被测试代码部分
    assert.equal(
      module_test.GetMonthDateCN(1643369132000),
      "一月",
      "返回结果不对,错误代码：404"
    );
  });

  it("GetMonthDateCN结果输入值2", function () {
    // 被测试代码部分
    assert.equal(
      module_test.GetMonthDateCN("2022-01-25 10:31:21"),
      "一月",
      "返回结果不对,错误代码：405"
    );
  });

  it("GetMonthDateCN结果输入值3", function () {
    // 被测试代码部分
    assert.equal(
      module_test.GetMonthDateCN("02/25/2022 10:31:21"),
      "二月",
      "返回结果不对,错误代码：406"
    );
  });

  it("GetMonthDateCN输入乱值", function () {
    // 被测试代码部分 2022-01-28 18:42:25的UNIX时间戳
    assert.equal(
      module_test.GetMonthDateCN(1643366545000),
      "一月",
      "返回结果不对,错误代码：407"
    );
  });
});

/***
 * Description: GetWeekDate和GetWeekDateCN模块单元测试
 ***/
describe("测试GetWeekDate和GetWeekDateCN模块", function () {
  it("GetWeekDate结果输入值1", function () {
    // 被测试代码部分
    assert.equal(
      module_test.GetWeekDate(1643369132000),
      "Friday",
      "返回结果不对,错误代码：400"
    );
  });

  it("GetWeekDate结果输入值2", function () {
    // 被测试代码部分
    assert.equal(
      module_test.GetWeekDate("2022-01-28 10:31:21"),
      "Friday",
      "返回结果不对,错误代码：401"
    );
  });

  it("GetWeekDate结果输入值3", function () {
    // 被测试代码部分
    assert.equal(
      module_test.GetWeekDate("02/25/2022 10:31:21"),
      "Friday",
      "返回结果不对,错误代码：402"
    );
  });

  it("GetWeekDate输入乱值", function () {
    // 被测试代码部分
    assert.equal(
      module_test.GetWeekDate("abc123"),
      "",
      "返回结果不对,错误代码：403"
    );
  });

  it("GetWeekDateCN结果输入值1", function () {
    // 被测试代码部分
    assert.equal(
      module_test.GetWeekDateCN(1643369132000),
      "星期五",
      "返回结果不对,错误代码：404"
    );
  });

  it("GetWeekDateCN结果输入值2", function () {
    // 被测试代码部分
    assert.equal(
      module_test.GetWeekDateCN("2022-01-28 10:31:21"),
      "星期五",
      "返回结果不对,错误代码：405"
    );
  });

  it("GetWeekDateCN结果输入值3", function () {
    // 被测试代码部分
    assert.equal(
      module_test.GetWeekDateCN("02/25/2022 10:31:21"),
      "星期五",
      "返回结果不对,错误代码：406"
    );
  });

  it("GetWeekDateCN输入乱值", function () {
    // 被测试代码部分 2022-01-28 18:42:25的UNIX时间戳
    assert.equal(
      module_test.GetWeekDateCN(1643366545000),
      "星期五",
      "返回结果不对,错误代码：407"
    );
  });
});

/***
 * Description: ParseDate模块单元测试
 ***/
describe("测试ParseDate模块", function () {
    it("ParseDate输入参数1", function () {
        // 被测试代码部分
        assert.equal(
          module_test.ParseDate("2022-01-28 10:31:21") instanceof Date,
          true,
          "返回结果不对,错误代码：400"
        );
      });

      it("ParseDate输入参数2", function () {
        // 被测试代码部分
        assert.equal(
          module_test.ParseDate(1643369132000) instanceof Date,
          true,
          "返回结果不对,错误代码：401"
        );
      });

      it("ParseDate输入参数3", function () {
        // 被测试代码部分
        assert.equal(
          module_test.ParseDate("02/25/2022 10:31:21") instanceof Date,
          true,
          "返回结果不对,错误代码：402"
        );
      });

      it("ParseDate输入乱值", function () {
        // 被测试代码部分
        assert.equal(
          module_test.ParseDate("abc123"),
          "",
          "返回结果不对,错误代码：403"
        );
      });
});
