FROM xyzzpwn/python_flask_alpine

ENV DEBIAN_FRONTEND=noninteractive
copy ./web /web
RUN apk add curl unzip aria2c ffmpeg ca-certificates && curl -L $(curl -L https://api.github.com/repos/sentsin/layui/tags |grep zipball_url |head -n 1 | awk -F '": "' '{print $2}'|cut -d '"' -f 1) -o layui.zip && \
unzip layui.zip && \
cp -r layui-layui-*/src/* /web/static/ && \
cp /web/static/css/layui.css /web/static/layui.css && \
rm -rf layui.zip layui-layui-* && \
python -m pip install yt-dlp pycryptodomex certifi