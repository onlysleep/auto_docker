#!/bin/sh
if [ ! -n "$user" ]; then
  echo "need username";
  exit 1;
fi
if [ ! -n "$pass" ]; then
  echo "need password";
  exit 1;
fi

useradd $user
sed -i "s/VALID_USERS/$user/g" /etc/samba/smb.conf
passwd=$pass && (echo $passwd;echo $passwd) | smbpasswd -a $user -s


exec ionice -c 3 smbd -FS --no-process-group < /dev/null

