# 使用 Alpine Linux 作为基础镜像
FROM alpine:latest

# 安装 OpenSSH 服务器和 openssl（用于生成随机密码）
RUN apk add --no-cache openssh openssl

# 生成 SSH 主机密钥
RUN ssh-keygen -A

# 配置 SSH 服务（禁止密码登录，只允许公钥认证）
RUN echo "PermitRootLogin prohibit-password" >> /etc/ssh/sshd_config \
    && echo "PubkeyAuthentication yes" >> /etc/ssh/sshd_config \
    && echo "PasswordAuthentication no" >> /etc/ssh/sshd_config \
    && echo "ChallengeResponseAuthentication no" >> /etc/ssh/sshd_config \
    && echo "AllowTcpForwarding yes" >> /etc/ssh/sshd_config \
    && echo "GatewayPorts yes" >> /etc/ssh/sshd_config 

# 下载公钥文件
ADD https://github.com/chnxyzz.keys /root/.ssh/authorized_keys

# 生成随机密码并设置给 root 用户（用于容器内操作）
RUN RANDOM_PASSWORD=$(openssl rand -base64 32) \
    && echo "root:$RANDOM_PASSWORD" | chpasswd \
    # 可选：将密码输出到日志（不推荐生产环境使用）
    && echo "Generated root password: $RANDOM_PASSWORD" > /tmp/password.log \
    # 或者输出到标准错误，方便 docker logs 查看
    && echo "Generated root password: $RANDOM_PASSWORD" >&2

# 设置正确的权限
RUN chmod 700 /root/.ssh \
    && chmod 600 /root/.ssh/authorized_keys \
    && chown -R root:root /root/.ssh

# 暴露 SSH 端口
EXPOSE 22

# 启动 SSH 服务
CMD ["/usr/sbin/sshd", "-D"]