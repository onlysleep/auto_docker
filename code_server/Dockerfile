FROM lscr.io/linuxserver/code-server:latest

USER root
ENV DEBIAN_FRONTEND=noninteractive
ENV LC_ALL=C.UTF-8
ENV LANG=en_US.UTF-8
ENV LANGUAGE=en_US:en
ENV TERM=screen
ENV PWNLIB_NOTERM=false
ENV PUID=1000
ENV PGID=1000
ENV TZ=Asia/Shanghai

RUN sed -i 's;://\([^/]*\)/;://mirrors.ustc.edu.cn/;' /etc/apt/sources.list /etc/apt/sources.list.d/parrot.list /etc/apk/repositories; apt-get update
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && \
    echo "Asia/Shanghai" >/etc/timezone && \
    set -xe && \
    apt-get install -y gcc g++ python3 wget curl zsh autojump git htop python3-pip
COPY settings.json /config/data/User/settings.json
COPY argv.json /config/data/User/argv.json
COPY languagepacks.json /config/data/languagepacks.json
COPY clp /config/data/clp

RUN git clone https://github.com/chnxyzz/oh-my-zsh.git /config/.oh-my-zsh
RUN mkdir -p /config/.config && chown -R abc:abc /config/.config && \
    mkdir -p /config/extensions && chown -R abc:abc /config/extensions && \
    mkdir -p /config/.local && chown -R abc:abc /config/.local && \
    chown -R abc:abc /config/.oh-my-zsh  && \ 
    mkdir -p /config/data/User && chown -R abc:abc /config/data && \
    cp /config/.oh-my-zsh/templates/zshrc.zsh-template /config/.zshrc 
# RUN chown -R abc:abc /config 
# RUN mkdir -p /config/data/User \
    # chown -R root:root .bash_history && \
    # chown -R root:root custom-cont-init.d && \
    # chown -R root:root custom-services.d 
USER abc

RUN wget -O /tmp/zh-hans.vsix https://github.com/microsoft/vscode-loc/releases/download/release/1.66.3/vscode-language-pack-zh-hans-v1.66.3.vsix && \
    # wget -O /tmp/zh-hans.vsix $(curl https://api.github.com/repos/microsoft/vscode-loc/releases|grep browser_download_url |grep zh-hans|head -n 1|cut -d '"' -f 4) && \
    /app/code-server/bin/code-server --extensions-dir /config/extensions --install-extension /tmp/zh-hans.vsix&& \
    /app/code-server/bin/code-server --extensions-dir /config/extensions --install-extension ms-python.python&& \
    /app/code-server/bin/code-server --extensions-dir /config/extensions --install-extension golang.Go&& \
    /app/code-server/bin/code-server --extensions-dir /config/extensions --install-extension redhat.java&& \
    /app/code-server/bin/code-server --extensions-dir /config/extensions --install-extension rust-lang.rust 


USER root