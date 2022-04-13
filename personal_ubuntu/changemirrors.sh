sed -i 's;://\([^/]*\)/;://mirrors.ustc.edu.cn/;' /etc/apt/sources.list /etc/apt/sources.list.d/parrot.list /etc/apk/repositories;
mkdir ~/.pip;
cat > ~/.pip/pip.conf <<-EOF
[global]
index-url = https://mirrors.ustc.edu.cn/pypi/web/simple
EOF