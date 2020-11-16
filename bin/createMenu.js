// createMenu.js
const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const execSync = require('child_process').execSync //同步子进程

const resolve = dir => path.join(__dirname, dir)

const format = (data = new Date(), fmt = 'yyyy-MM-dd') => {
    let o = {
        'M+': data.getMonth() + 1, // 月份
        'd+': data.getDate(), // 日
        'h+': data.getHours(), // 小时
        'm+': data.getMinutes(), // 分
        's+': data.getSeconds(), // 秒
        'q+': Math.floor((data.getMonth() + 3) / 3), // 季度
        S: data.getMilliseconds() // 毫秒
    }
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (data.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
        }
    }
    return fmt
}


// 导出的文件目录位置
const SQL_PATH = resolve('../sql/menu.sql')
// 获取全局配置的git的用户名，用来追踪SQL是谁导出的（出问题锅是谁的QAQ）
const myname = execSync('git show -s --format=%cn').toString().trim()
// 导出SQL的函数
function createSQL(data, name = '', pid = '0', arr = []) {
    data.forEach(function(v, d) {
        if (v.children && v.children.length) {
            createSQL(v.children, name + '-' + v.name, v.id, arr)
        }
        arr.push({
            id: v.id,
            created_at: format(new Date(), 'yyyy-MM-dd hh:mm:ss'),
            modified_at: format(new Date(), 'yyyy-MM-dd hh:mm:ss'),
            created_by: myname,
            modified_by: myname,
            version: 1,
            is_delete: 'N',
            code: (name + '-' + v.name).slice(1),
            name: v.name,
            title: v.title,
            icon: v.icon,
            uri: v.uri,
            sort: d + 1,
            parent_id: pid,
            type: v.type,
            component_path: v.componentPath,
            redirect_uri: v.redirectUri,
            full_screen: v.fullScreen === 'Y' ? 'Y' : 'N',
            hidden: v.hidden === 'Y' ? 'Y' : 'N',
            no_cache: v.noCache === 'Y' ? 'Y' : 'N'
        })
    })
    return arr
}



fs.readFile(resolve('../src/mock/menu.json'), 'utf-8', (err, data) => {

    const menuList = createSQL(JSON.parse(data))

    const sql = menuList
        .map(sql => {
            let value = ''
            for (const v of Object.values(sql)) {
                value += ','
                value += v ? `'${v}'` : null
            }
            return 'INSERT INTO `t_sys_resource` VALUES (' + value.slice(1) + ')' + '\n'
        })
        .join(';')


    const mySQL =
        'DROP TABLE IF EXISTS `t_sys_resource`;' +
        '\n' +
        'CREATE TABLE `t_sys_resource` (' +
        '\n' +
        '`id` varchar(64) NOT NULL,' +
        '\n' +
        "`created_at` timestamp NULL DEFAULT NULL COMMENT '创建时间'," +
        '\n' +
        "`modified_at` timestamp NULL DEFAULT NULL COMMENT '更新时间'," +
        '\n' +
        "`created_by` varchar(64) DEFAULT NULL COMMENT '创建人'," +
        '\n' +
        "`modified_by` varchar(64) DEFAULT NULL COMMENT '更新人'," +
        '\n' +
        "`version` int(11) DEFAULT NULL COMMENT '版本（乐观锁）'," +
        '\n' +
        "`is_delete` char(1) DEFAULT NULL COMMENT '逻辑删除'," +
        '\n' +
        "`code` varchar(150) NOT NULL COMMENT '编码'," +
        '\n' +
        "`name` varchar(50) DEFAULT NULL COMMENT '名称'," +
        '\n' +
        "`title` varchar(50) DEFAULT NULL COMMENT '标题'," +
        '\n' +
        "`icon` varchar(50) DEFAULT NULL COMMENT '图标'," +
        '\n' +
        "`uri` varchar(250) DEFAULT NULL COMMENT '路径'," +
        '\n' +
        "`sort` int(11) DEFAULT NULL COMMENT '排序'," +
        '\n' +
        "`parent_id` varchar(64) DEFAULT NULL COMMENT '父id'," +
        '\n' +
        "`type` char(2) DEFAULT NULL COMMENT '类型'," +
        '\n' +
        "`component_path` varchar(250) DEFAULT NULL COMMENT '组件路径'," +
        '\n' +
        "`redirect_uri` varchar(250) DEFAULT NULL COMMENT '重定向路径'," +
        '\n' +
        "`full_screen` char(1) DEFAULT NULL COMMENT '全屏'," +
        '\n' +
        "`hidden` char(1) DEFAULT NULL COMMENT '隐藏'," +
        '\n' +
        "`no_cache` char(1) DEFAULT NULL COMMENT '缓存'," +
        '\n' +
        'PRIMARY KEY (`id`),' +
        '\n' +
        'UNIQUE KEY `code` (`code`) USING BTREE' +
        '\n' +
        ") ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='资源';" +
        '\n' +
        sql


    fs.writeFile(SQL_PATH, mySQL, err => {
        if (err) return console.log(err)
        console.log(chalk.cyanBright(`恭喜你，创建sql语句成功，位置：${SQL_PATH}`))
    })
})
