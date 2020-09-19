# pwn_229
[中文](./README_zh_CN.md)  [English](./README.md)
## 简介
利用github action不断的构建可以用于测试的最新libc==2.29 docker镜像，并且发布到dockerhub
频率是北京时间每周一的早上8.30

## 镜像包括以下软件及配置
- sudo
- wget
- cmake
- net-tools
- autojump
- lib32z1
- libc6:i386
- zsh
- gdb
- tmux
- vim
- curl
- git
- socat
- htop
- libgmp-dev
- libmpfr-dev
- libmpc-dev
- build-essential
- gcc
- g++
- python-is-python3
- python3-pip
- pwndbg
- pwntools 
- gmpy2

## 使用方法
首先下载最新版docker镜像
```bash
docker pull xyzzpwn/pwn_229
```

然后使用下面的命令
```bash
docker run -it --rm xyzzpwn/pwn_229 zsh
```