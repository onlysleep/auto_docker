# webdav_server
[中文](./README_zh_CN.md)  [English](./README.md)
## 简介
利用github action不断的构建可以用于webdav_server docker镜像，并且发布到dockerhub
频率是北京时间每周一的早上8.30

## 镜像包括以下软件及配置
- apache2 

## 使用方法
首先下载最新版docker镜像
```bash
docker pull xyzzpwn/webdav_server
```

然后使用下面的命令
```bash
docker run -itd -p 8000:80 -v `pwd`:/var/www/webdav -e user= -e pass= xyzzpwn/webdav_server
```
