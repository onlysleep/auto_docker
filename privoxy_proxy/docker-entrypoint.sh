#!/bin/sh
# vim:sw=4:ts=4:et

if [ ! -n "$address" ]; then
  echo "need PROXY_ADDRESS_YOURSELF";
  exit 1;
else
    echo "listen-address  0.0.0.0:8118" >> /etc/privoxy/config;
    echo "forward-socks5t / $address ." >> /etc/privoxy/config;
fi

set -e
privoxy --no-daemon /etc/privoxy/config ;