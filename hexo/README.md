# docker_hexo
[中文](./README_zh_CN.md)  [English](./README.md)
## Introduction
Use github action to continuously build the latest nodejs docker image that can be used for hexo, and publish it to dockerhub
The frequency is 7.30 a.m. every Monday in Beijing time

## The image includes the following software and configuration
- nodejs-latest
- npm
- git 
- curl 
- wget
- autojump 
- vim 
- zsh
- hexo-cli
- .vimrc

## Method of Use
Start by downloading the latest docker image
```bash
docker pull xyzzpwn/hexo
```
Then use the following command
```bash
docker run -it --rm -p 4000:4000 -v /dir:/workdir -w /workdir xyzzpwn/hexo bash
```