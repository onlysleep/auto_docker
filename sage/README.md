# docker_hexo
[中文](./README_zh_CN.md)  [English](./README.md)
## Introduction
Use github action to continuously build the latest  docker image that can be used for sagemath, and publish it to dockerhub
The frequency is 7.30 a.m. every Monday in Beijing time

## The image includes the following software and configuration
- sagemath
- pycrypto
- pwntools 
- curl 
- wget
- autojump 
- vim 
- zsh

## Method of Use
Start by downloading the latest docker image
```bash
docker pull xyzzpwn/sage
```
Then use the following command
```bash
docker run -it --rm -p 8888:8888 xyzzpwn/sage:latest sage-jupyter
```