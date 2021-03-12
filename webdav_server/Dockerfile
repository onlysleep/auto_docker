FROM ubuntu:latest
ENV DEBIAN_FRONTEND=noninteractive
ENV LC_ALL=C.UTF-8
ENV LANG=en_US.UTF-8
ENV LANGUAGE=en_US:en
ENV TERM=screen
ENV PWNLIB_NOTERM=false

RUN sed -i 's/security.ubuntu.com/mirrors.aliyun.com/g' /etc/apt/sources.list && sed -i 's/archive.ubuntu.com/mirrors.aliyun.com/g' /etc/apt/sources.list && sed -i 's/deb.debian.org/mirrors.aliyun.com/g' /etc/apt/sources.list && sed -i 's/security.debian.org/mirrors.aliyun.com/g' /etc/apt/sources.list && apt-get update
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && \
    echo "Asia/Shanghai" >/etc/timezone && \
    set -xe && \
    apt-get install -y apache2 && \
    a2enmod dav_fs && \
    a2enmod dav && \
    mkdir /var/www/webdav && \
    chown www-data:www-data /var/www/webdav && \
    chmod 755 /var/www/webdav && \
    mkdir /var/www/webdavpasswd && \
#    htpasswd -b -c /var/www/webdavpasswd/passwd.dav admin admin && \
    touch /var/www/webdavpasswd/passwd.dav && \
    chown www-data:www-data -R /var/www/webdavpasswd && \
    chmod 640 /var/www/webdavpasswd/passwd.dav
    
COPY 000-default.conf /etc/apache2/sites-available/000-default.conf
RUN chmod 644 /etc/apache2/sites-available/000-default.conf
COPY run.sh /run.sh
RUN chmod 744 /run.sh

EXPOSE 80
CMD ["/run.sh"]