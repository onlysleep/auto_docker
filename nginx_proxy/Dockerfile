FROM nginx:latest
ENV DEBIAN_FRONTEND=noninteractive
RUN sed -i 's/deb.debian.org/mirrors.bfsu.edu.cn/g' /etc/apt/sources.list && \
    sed -i 's/security.debian.org/mirrors.bfsu.edu.cn/g' /etc/apt/sources.list 
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && \
    echo "Asia/Shanghai" >/etc/timezone && \
    set -xe && \
    apt-get update && \
    apt-get install -y apache2-utils && \
    apt-get clean && \
    rm -fr /var/lib/apt/lists/* 
ENV LC_ALL=C.UTF-8
ENV LANG=en_US.UTF-8
ENV LANGUAGE=en_US:en
ENV TERM=screen
ENV PWNLIB_NOTERM=false

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./docker-entrypoint.sh /docker-entrypoint.sh