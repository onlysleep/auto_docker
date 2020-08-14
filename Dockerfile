FROM ubuntu:latest
ENV DEBIAN_FRONTEND=noninteractive
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && \
    echo 'Asia/Shanghai' >/etc/timezone && \
    set -xe && \
    apt-get update  --fix-missing&& \
    apt-get install -y git nodejs npm    && \
    apt-get clean     && \
    rm -fr /var/lib/apt/lists/* && \
    npm install -g hexo-cli && \
    sed -i 's/archive.ubuntu.com/mirrors.aliyun.com/g' /etc/apt/sources.list && \
    sed -i 's/security.ubuntu.com/mirrors.aliyun.com/g' /etc/apt/sources.list && \
    npm config set registry https://registry.npm.taobao.org 
ENV LC_ALL=C.UTF-8
ENV LANG=en_US.UTF-8
ENV LANGUAGE=en_US:en
ENV TERM=screen
