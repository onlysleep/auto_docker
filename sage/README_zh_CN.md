# docker_sage
[中文](./README_zh_CN.md)  [English](./README.md)
## 简介
利用github action不断的构建可以用于sagemath的最新docker镜像，并且发布到dockerhub
频率是北京时间每周一的早上7.30

## 镜像包括以下软件及配置
- sagemath
- pycrypto
- pwntools 
- curl 
- wget
- autojump 
- vim 
- zsh

## 使用方法
首先下载最新版docker镜像
```bash
docker pull xyzzpwn/sage
```
然后使用下面的命令
```bash
docker run -it --rm -p 8888:8888 xyzzpwn/sage:latest sage-jupyter
```