FROM ubuntu:22.04
ENV DEBIAN_FRONTEND=noninteractive
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && \
    echo "Asia/Shanghai" >/etc/timezone && \
    set -xe && \
    dpkg --add-architecture i386 && \
    apt-get update && \
    apt-get install -y sudo wget openssh-server cmake net-tools autojump lib32z1 libc6:i386 zsh gdb tmux vim curl git socat htop libgmp-dev libmpfr-dev libmpc-dev build-essential gcc g++ python-is-python3 python3-pip && \
    git clone https://github.com/pwndbg/pwndbg && cd pwndbg && ./setup.sh && \
    echo c2V0IC1nIG1vdXNlIG9uOw==|base64 -d > ~/.tmux.conf && \
    python3 -m pip install --no-cache-dir pwntools gmpy2  z3-solver numpy && \
    python -m pip install --no-cache-dir pwntools gmpy2 z3-solver numpy && \
    sh -c "$(wget -O- https://raw.githubusercontent.com/chnxyzz/oh-my-zsh/master/tools/install.sh)" && \
    curl https://raw.githubusercontent.com/chnxyzz/linux_install/master/vim/vimrc.txt -o ~/.vimrc && \
    apt-get clean && \
    rm -fr /var/lib/apt/lists/* 
ENV LC_ALL=C.UTF-8
ENV LANG=en_US.UTF-8
ENV LANGUAGE=en_US:en
ENV TERM=screen
ENV PWNLIB_NOTERM=false