FROM xyzzpwn/python_flask


copy ./web /web

RUN apk add curl unzip && curl -L $(curl -L https://api.github.com/repos/sentsin/layui/tags |grep zipball_url |head -n 1 | awk -F '": "' '{print $2}'|cut -d '"' -f 1) -o layui.zip && \
unzip layui.zip && \
cp -r layui-layui-*/src/* /web/static/

