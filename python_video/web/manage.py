from flask import Flask,render_template,request,url_for,redirect
from common import *
import os
os.chdir('/web/')

video_keys={}
app = Flask(import_name=__name__,
            static_url_path='/static', 
            static_folder='static')
# app.debug=True
app.debug=False

@app.route('/')
def index():
    # video_list=list_all_files('/web/static/video/')
    video_list=list_all_files(video_basedir)
    # return '\n'.join(video_list)
    global video_keys
    video_keys={}
    for i in range(len(video_list)):
        video_keys[i+1]=video_list[i].replace(video_basedir,'')
    return render_template('index.html',video_keys=video_keys)

@app.route('/play')
def play():
    try:
        if request.method == "GET":
            id=request.args.get('id',default=None)
            # print(video_keys)
            src=os.path.join(video_basedir,video_keys[int(id)])
        return render_template('play.html',src=src)
    except:
        return redirect(url_for('index'))


if __name__ == '__main__':
    app.run(host='0.0.0.0',port=8000)
