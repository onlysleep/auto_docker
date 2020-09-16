FROM alpine:latest
RUN set -xe && \
    apk update && \
    apk add privoxy
ENV LC_ALL=C.UTF-8
ENV LANG=en_US.UTF-8
ENV LANGUAGE=en_US:en
ENV TERM=screen
ENV PWNLIB_NOTERM=false

COPY ./docker-entrypoint.sh /docker-entrypoint.sh

CMD ["/docker-entrypoint.sh"]
