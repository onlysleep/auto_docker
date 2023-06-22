FROM node:latest
ENV DEBIAN_FRONTEND=noninteractive
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && \
    echo "Asia/Shanghai" >/etc/timezone && \
    set -xe && \
    apt-get update && \
    apt-get install -y git wget curl autojump vim zsh && \
    curl https://raw.githubusercontent.com/chnxyzz/linux_install/master/vim/vimrc.txt -o ~/.vimrc && \
    npm install -g hexo-cli && \
    apt-get clean && \
    rm -fr /var/lib/apt/lists/* && \
    sed -i 's/deb.debian.org/mirrors.aliyun.com/g' /etc/apt/sources.list.d/debian.sources && \
    sed -i 's/security.debian.org/mirrors.aliyun.com/g' /etc/apt/sources.list.d/debian.sources && \
    npm config set registry https://registry.npm.taobao.org 
ENV LC_ALL=C.UTF-8
ENV LANG=en_US.UTF-8
ENV LANGUAGE=en_US:en
ENV TERM=screen