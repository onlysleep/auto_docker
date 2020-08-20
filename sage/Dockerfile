FROM sagemath/sagemath:latest
ENV DEBIAN_FRONTEND=noninteractive
USER root
RUN sudo ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && \
    sudo echo "Asia/Shanghai" >/etc/timezone && \
    sudo sed -i 's/archive.ubuntu.com/mirrors.aliyun.com/g' /etc/apt/sources.list && \
    sudo sed -i 's/security.ubuntu.com/mirrors.aliyun.com/g' /etc/apt/sources.list && \
    set -xe && \
    sudo apt-get update && \
    sudo apt-get install -y git wget curl autojump vim zsh && \
    sage -python -m pip install pwntools pycrypto && \
    sudo apt-get clean && \
    sudo rm -fr /var/lib/apt/lists/*
USER sage
ENV LC_ALL=C.UTF-8
ENV LANG=en_US.UTF-8
ENV LANGUAGE=en_US:en
ENV TERM=screen
ENV PWNLIB_NOTERM=false