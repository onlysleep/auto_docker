# python_spider
[中文](./README_zh_CN.md)  [English](./README.md)
## 简介
利用github action不断的构建可以用于测试的最新python3 docker镜像，并且发布到dockerhub
频率是北京时间每周一的早上8.30

## 镜像包括以下软件及配置
- beautifulsoup4 
- pyparser
- lxml
- requests
- dateutil
- html5lib

## 使用方法
首先下载最新版docker镜像
```bash
docker pull xyzzpwn/python_spider
```

然后使用下面的命令
```bash
docker run -it --rm xyzzpwn/python_spider bash
```
