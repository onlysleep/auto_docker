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
    apt-get install -y sudo wget openssh-server net-tools autojump zsh gdb vim curl git cmake socat htop gcc g++ tmux build-essential \
    python-is-python3 python3-pip mysql-server apache2 nginx software-properties-common openjdk-17-jdk golang && \
    add-apt-repository ppa:ondrej/php && \
    apt-get update && \
    apt-get -y install php7.4 libapache2-mod-php7.4 libssl-dev php7.4-curl libgmp-dev && \
    python3 -m pip install pwntools numpy pandas requests jupyter notebook gmpy2 gmpy && \
    sh -c "$(wget -O- https://raw.githubusercontent.com/chnxyzz/oh-my-zsh/master/tools/install.sh)" && \
    curl https://raw.githubusercontent.com/chnxyzz/linux_install/master/vim/vimrc.txt -o ~/.vimrc && \
    mkdir /root/.ssh && \
    chsh -s /bin/zsh && \
    curl https://github.com/chnxyzz.keys >> ~/.ssh/authorized_keys && \
    sudo chmod 600 ~/.ssh/authorized_keys && \
    sed -i 's/#PasswordAuthentication yes/PasswordAuthentication no/g' /etc/ssh/sshd_config && \
    sed -i 's/^#PermitRootLogin.*/PermitRootLogin\ yes/' /etc/ssh/sshd_config && \
    apt-get clean && \
    rm -fr /var/lib/apt/lists/* 
# 安装vscode-server 插件
ENV commit_id=d045a5eda657f4d7b676dedbfa7aab8207f8a075
RUN mkdir -p /root/.vscode-server/bin && \
    cd /root/.vscode-server/bin && \
    wget -O vscode-server-linux-x64.tar.gz https://update.code.visualstudio.com/commit:$commit_id/server-linux-x64/stable && \
    tar -zxvf vscode-server-linux-x64.tar.gz && \
    mv vscode-server-linux-x64 $commit_id && \
    rm vscode-server-linux-x64.tar.gz

# 安装miniconda
COPY ./init_conda.sh /init_conda.sh
RUN wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh && \
    bash ./Miniconda3-latest-Linux-x86_64.sh -b -p /root/miniconda && \
    ~/miniconda/bin/conda init $(echo $SHELL | awk -F '/' '{print $NF}') && \
    echo 'Successfully installed miniconda...' && \
    echo -n 'Conda version: ' && \
    ~/miniconda/bin/conda --version && \
    echo -e '\n' && \
    tail -n 16 ~/.bashrc >> ~/.zshrc && \
    /root/miniconda/bin/conda config --set auto_activate_base false && \
    bash /init_conda.sh


ENV LC_ALL=C.UTF-8
ENV LANG=en_US.UTF-8
ENV LANGUAGE=en_US:en
ENV TERM=screen
ENV PWNLIB_NOTERM=false

COPY ./docker-entrypoint.sh /docker-entrypoint.sh
COPY ./changemirrors.sh /changemirrors.sh
COPY ./extensions /root/.vscode-server/

CMD ["/docker-entrypoint.sh"]