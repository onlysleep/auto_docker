#!/bin/sh
if [ ! -n "$user" ]; then
  echo "need username";
  exit 1;
fi
if [ ! -n "$pass" ]; then
  echo "need password";
  exit 1;
fi
htpasswd -b -c /var/www/webdavpasswd/passwd.dav $user $pass
chown -R www-data:www-data /var/www/webdav
apachectl -D FOREGROUND
