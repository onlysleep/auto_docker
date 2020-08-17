# docker_hexo
[中文](./README_zh_CN.md)  [English](./README.md)
## 简介
利用github action不断的构建可以用于hexo的最新nodejs的docker镜像，并且发布到dockerhub
频率是北京时间每周一的早上7.30

## 镜像包括以下软件及配置
- node.js-latest
- npm
- git 
- curl 
- wget
- autojump 
- vim 
- zsh
- hexo-cli
- .vimrc

## 使用方法
首先下载最新版docker镜像
```bash
docker pull xyzzpwn/hexo
```
然后使用下面的命令
```bash
docker run -it --rm -p 4000:4000 -v /dir:/workdir -w /workdir xyzzpwn/hexo bash
```