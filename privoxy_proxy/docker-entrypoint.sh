#!/bin/sh
# vim:sw=4:ts=4:et

if [ ! -n "$address" ]; then
  echo "need PROXY_ADDRESS_YOURSELF";
  exit 1;
else
    sed -i "s/listen-address  127.0.0.1:8118/listen-address  0.0.0.0:8118/g" /etc/privoxy/config;
    echo "forward-socks5t / $address ." >> /etc/privoxy/config;
fi
if [ ! -n "$allowip" ]; then
  echo "allow all ip"
else
  echo "permit-access $address " >> /etc/privoxy/config;
fi   
set -e
privoxy --no-daemon /etc/privoxy/config ;