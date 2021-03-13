# smb_server
[中文](./README_zh_CN.md)  [English](./README.md)
## 简介
利用github action不断的构建可以用于samba server的 docker镜像，并且发布到dockerhub
频率是北京时间每周一的早上8.30

## 镜像包括以下软件及配置
- samba 

## 使用方法
首先下载最新版docker镜像
```bash
docker pull xyzzpwn/smb_server
```

然后使用下面的命令
```bash
docker run -itd --name=smb  -p 445:445 -e user=admin -e pass=123 -v `pwd`:/smb_dir xyzzpwn/smb_server
```
