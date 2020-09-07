# docker_nginx_proxy
[中文](./README_zh_CN.md)  [English](./README.md)
## Introduction
nginx to reverse proxy with password

## The image includes the following software and configuration
- apache2-utils

## Method of Use
Start by downloading the latest docker image
```bash
docker pull xyzzpwn/nginx_proxy
```
Then use the following command
```bash
docker run -it --rm -e "user=test" -e "pass=test" -e "url=http://example:8888" -p 1080:80 xyzzpwn/nginx_proxy
```