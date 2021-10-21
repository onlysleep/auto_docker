FROM python:latest
ENV DEBIAN_FRONTEND=noninteractive
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && \
    echo "Asia/Shanghai" >/etc/timezone && \
    set -xe && \
    python -m pip install --no-cache-dir beautifulsoup4 pyparser lxml requests python-dateutil html5lib selenium
RUN apt-get update && apt-get install -y ttf-wqy*
RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && apt-get install -y /google-chrome-stable_current_amd64.deb
RUN wget https://chromedriver.storage.googleapis.com/95.0.4638.17/chromedriver_linux64.zip && unzip chromedriver_linux64.zip
ENV LC_ALL=C.UTF-8
ENV LANG=en_US.UTF-8
ENV LANGUAGE=en_US:en
ENV TERM=screen
ENV PWNLIB_NOTERM=false
user work
RUN mkdir work