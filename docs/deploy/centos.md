---

title: 在Centos 7 部署 asp.net core 项目
editLink: true


---
# 在Centos 7 部署
在一个项目中需要自己部署，所以记录一下部署过程

::: tip 运行环境配置清单,顺序不分前后

- [Mysql](#mysql)
- [Nginx](#nginx)
- [Redis](#redis)
- [.net 7](#net)
- [网站项目](#网站项目)

:::

## MySQL
> 参考网站(https://zhuanlan.zhihu.com/p/623778183)

### 安装
首先，尝试一下直接使用 yum 安装 MySQL
```bash
yum install mysql-community-server
```
如果成功，表示不需要配置MySQL rpm 源信息，直接就安装完成了

但是，如果出现以下错误：

``` bash
Loading mirror speeds from cached hostfile
没有可用软件包 mysql-community-server。
错误：无须任何处理
```
表示我们没有添加安装包的源信息，需要安装 MySQL rpm 源信息

### 添加源信息

打开(https://dev.mysql.com/downloads/repo/yum/)

<img src="/mysql-1.png" alt="mysql-1" />
找到 Centos 7 对应的版本，复制链接地址

拼接下载地址头：http://dev.mysql.com/get/，得到以下地址

``` bash
wget http://dev.mysql.com/get/mysql80-community-release-el7-10.noarch.rpm
```

rpm 安装源信息
``` bash
rpm -ivh mysql80-community-release-el7-10.noarch.rpm
```
### 安装
再尝试使用 yum 安装MySQL

``` bash
yum install mysql-community-server
```
安装过程中，会提示让我们确认，一律输入 **`y`** 按回车即可

安装完成后，yum会自动覆盖自带的mariaDB，所以不需要我们手动卸载它

### 检查安装是否成功
检查一下刚才的安装是否成功
``` bash
rpm -qa | grep mysql
```
如果出现以下信息，表示安装成功
``` bash
mysql-community-libs-compat-8.0.33-1.el7.x86_64
mysql-community-icu-data-files-8.0.33-1.el7.x86_64
mysql80-community-release-el7-7.noarch
mysql-community-common-8.0.33-1.el7.x86_64
mysql-community-libs-8.0.33-1.el7.x86_64
mysql-community-server-8.0.33-1.el7.x86_64
mysql-community-client-8.0.33-1.el7.x86_64
mysql-community-client-plugins-8.0.33-1.el7.x86_64
```
输出类似以上内容，表示安装完成

检查mariaDB是否被覆盖
``` bash
rpm -qa | grep mariadb
```
输出空，表示 mariaDB 已经被成功覆盖。

### 常用命令
```bash
# 启动
systemctl start mysqld

# 第一次启动后，可以查看mysql初始化密码
grep 'temporary password' /var/log/mysqld.log
# 重启
systemctl restart mysqld

# 停止
systemctl stop mysqld

#查看状态
systemctl status mysqld

#开机启动
systemctl enable mysqld
systemctl daemon-reload

# 查看进程、版本信息
ps -ef | grep mysql
或
netstat -atp

# 登录
mysql -u root -p'密码内容'

# 查看所有表
show databases;

# 进入数据库
use 表名

# 查看所有表
show tables

# 查看某张表信息
desc 表名

# 查
select * from 表名
# 删
delete from 表名 where field=xx
# 改
update 表名 set field='xxx' where field='xxx';
```

### 登录和修改密码
我们安装的时候，并没有设置初始密码

所以 mysql 在第一次启动的时候，会自动初始化一个密码

通过以下这行代码，我们可以查看 mysql 自动初始化的密码：
``` bash
# 第一次启动后，可以查看mysql初始化密码
grep 'temporary password' /var/log/mysqld.log

输出（root@localhost: 后面的是密码）：
2023-04-21T06:03:27.071550Z 6 [Note] [MY-010454] [Server] A temporary password
is generated for root@localhost: r2to%yZ%a)%s
```

### 登录
``` bash
# 登录mysql，一定要注意：-p和'密码'之间是没有空格的
mysql -u root -p'r2to%yZ%a)%s'
```

### 修改 root 密码
注意了，默认的密码策略，需要：大写英文 + 特殊字符 + 数字
```bash
  ALTER USER 'root'@'localhost' IDENTIFIED BY 'Root_123';
  ```

### 开放 root 账户远程登录
```bash
# 登录
mysql -u root -p'密码'

# 如果你的数据库是 mysql 8 及以上
# 1、进入数据库
use mysql
# 2、修改user表
update user set host='%' where user='root';

# mysql 5.7 及之前，执行这行代码即可
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '你的密码' WITH GRANT OPTION;

# 重载授权表
FLUSH PRIVILEGES;

# 退出
exit

# 重启
systemctl restart mysqld
```

### 端口开放
经过实测，使用阿里云或者腾讯云，在服务器上，无需配置 iptables 端口信息

但必须在阿里云或者腾讯云控制台 - 服务器 - 安全组，开放 3306端口。

## Nginx

1. yum install nginx  
2. systemctl start nginx 启动
3. systemctl enable nginx 开机启动
4.  vi /etc/nginx/nginx.conf 修改配置
5. 保存后：重启： systemctl reload nginx.service
6. systemctl status nginx.service  查看状态

### 修改配置文件
```nginx
server {
    listen        80;
    server_name   _;//这个是域名，可以写多个域名，用空格隔开
    location / {
        proxy_pass         http://127.0.0.1:5000;//asp.net core 项目地址
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection keep-alive;
        proxy_set_header   Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
}
```

### SSL证书配置
证书参考[阿里云](https://help.aliyun.com/zh/ssl-certificate/user-guide/install-ssl-certificates-on-nginx-servers-or-tengine-servers)
```nginx

server {
    listen        80;
    server_name   test.wzjs100.com;
    rewrite ^(.*)$ https://test.wzjs100.com$1;
    location / {
        proxy_pass         http://127.0.0.1:5000;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection keep-alive;
        proxy_set_header   Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
}
server {
        listen       443 ssl http2;
        listen       [::]:443 ssl http2;
        server_name  test.wzjs100.com;
#        root         /usr/share/nginx/html;
#
        ssl_certificate "/etc/nginx/conf.d/test.wzjs100.com.pem";
        ssl_certificate_key "/etc/nginx/conf.d/test.wzjs100.com.key";
        ssl_session_cache shared:SSL:1m;
        ssl_session_timeout  5m;
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
        ssl_prefer_server_ciphers on;
location / {
        proxy_pass         http://127.0.0.1:5000;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection keep-alive;
        proxy_set_header   Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }

#
#        # Load configuration files for the default server block.
#        include /etc/nginx/default.d/*.conf;
#
#        error_page 404 /404.html;
#            location = /40x.html {
#        }
#
#        error_page 500 502 503 504 /50x.html;
#            location = /50x.html {
#        }
    }

}

```

## Redis
[参考](https://www.cnblogs.com/jiangcong/p/15449452.html)

## NET 7
[参考官网教程](https://learn.microsoft.com/zh-cn/troubleshoot/developer/webapps/aspnetcore/practice-troubleshoot-linux/2-2-install-nginx-configure-it-reverse-proxy)

### 安装
```bash
sudo rpm -Uvh https://packages.microsoft.com/config/centos/7/packages-microsoft-prod.rpm
sudo yum install dotnet-sdk-7.0
sudo yum install aspnetcore-runtime-7.0
```

## 网站项目

运行命令
```bash
dotnet /home/web/Zigong.Web.Entry.dll --urls "http://localhost:5000"
```
创建服务文件
```bash
sudo vi /etc/systemd/system/webapp.service

#内容如下：根据实现情况再修改
[Unit]
Description=Example .NET Web API App running on Linux

[Service]
WorkingDirectory=/home/web
ExecStart=/usr/bin/dotnet /home/web/Zigong.Web.Entry.dll --urls=http://localhost:5000
Restart=always
# Restart service after 10 seconds if the dotnet service crashes:
RestartSec=10
KillSignal=SIGINT
SyslogIdentifier=dotnet-example
User=root
Environment=ASPNETCORE_ENVIRONMENT=Production
Environment=DOTNET_PRINT_TELEMETRY_MESSAGE=false

[Install]
WantedBy=multi-user.target
```

### 启动服务
```bash
systemctl daemon-reload
##开机启动 start
sudo systemctl enable webapp.service
sudo systemctl reload webapp.service
sudo systemctl start webapp.service
sudo systemctl status webapp.service
```