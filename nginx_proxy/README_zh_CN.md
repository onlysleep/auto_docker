# docker_nginx_proxy
[中文](./README_zh_CN.md)  [English](./README.md)
## 简介
利用github action不断的构建可以用于自定义密码反向代理的最新nginx docker镜像，并且发布到dockerhub
频率是北京时间每周一的早上7.30

## 镜像包括以下软件及配置
- apache2-utils

## 使用方法
首先下载最新版docker镜像
```bash
docker pull xyzzpwn/nginx_proxy
```
然后使用下面的命令
```bash
docker run -it --rm -e "user=test" -e "pass=test" -e "url=http://example:8888" -p 1080:80 xyzzpwn/nginx_proxy
```