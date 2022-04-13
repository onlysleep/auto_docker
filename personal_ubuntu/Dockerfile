FROM nginx:alpine AS prepare
RUN echo $(curl -s cip.cc|grep 中国|wc -l) >>ip.txt

FROM ubuntu:latest
ENV DEBIAN_FRONTEND=noninteractive
COPY --from=prepare /ip.txt /ip.txt
RUN gw=$(cat /ip.txt) && \
    if test $gw -gt 0 ; then sed -i 's;://\([^/]*\)/;://mirrors.ustc.edu.cn/;' /etc/apt/sources.list /etc/apt/sources.list.d/parrot.list /etc/apk/repositories; fi || \
    rm /ip.txt 
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && \
    echo "Asia/Shanghai" >/etc/timezone && \
    set -xe && \
    apt-get update && \
    apt-get install -y sudo wget openssh-server net-tools autojump zsh gdb vim curl git socat htop gcc g++ python-is-python3 python3-pip && \
    sh -c "$(wget -O- https://raw.githubusercontent.com/chnxyzz/oh-my-zsh/master/tools/install.sh)" && \
    curl https://raw.githubusercontent.com/chnxyzz/linux_install/master/vim/vimrc.txt -o ~/.vimrc && \
    echo c2VkIC1pICdzOzovL1woW14vXSpcKS87Oi8vbWlycm9ycy51c3RjLmVkdS5jbi87JyAvZXRjL2FwdC9zb3VyY2VzLmxpc3QgL2V0Yy9hcHQvc291cmNlcy5saXN0LmQvcGFycm90Lmxpc3QgL2V0Yy9hcGsvcmVwb3NpdG9yaWVzOw== | base64 -d > /changemirrors.sh && \
    mkdir /root/.ssh && \
    chsh -s /bin/zsh && \
    curl https://github.com/chnxyzz.keys >> ~/.ssh/authorized_keys && \
    sudo chmod 600 ~/.ssh/authorized_keys && \
    sed -i 's/#PasswordAuthentication yes/PasswordAuthentication no/g' /etc/ssh/sshd_config && \
    sed -i 's/^#PermitRootLogin.*/PermitRootLogin\ yes/' /etc/ssh/sshd_config && \
    apt-get clean && \
    rm -fr /var/lib/apt/lists/* 
ENV LC_ALL=C.UTF-8
ENV LANG=en_US.UTF-8
ENV LANGUAGE=en_US:en
ENV TERM=screen
ENV PWNLIB_NOTERM=false

COPY ./docker-entrypoint.sh /docker-entrypoint.sh

CMD ["/docker-entrypoint.sh"]