import Mock from "mockjs";
Mock.mock("/api/user/login",{
    "status":0,
    "data":{
        "id|100-200":12,
        "username":"@cname",
        "email": "admin@qq.com",
        "phone": null,
        "role": 0,
        "createTime": 147904004010419,
        "updateTime": 1313213124144144
    }
})
// 这个文件是mockjs拦截ajax请求模拟mock时调用，开关在main.js
// 本身是有一系列语法的
// 如"id|100-200":0,就是产生100-200之间的id值
// "username":"@name",会随机生成英文名@cname会随机生成中文名