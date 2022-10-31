#/bin/bash
for name in py27 py36 py37 py38 py39 py310
do
    /root/miniconda/bin/conda create -y -n $name python=2.7 && \
    /root/miniconda/bin/conda install -y -n $name requests numpy pandas requests gmpy2
done

for name in py36 py37 py38
do 
    /root/miniconda/bin/conda run -n $name python -m pip install pwntools jupyter notebook libnum
done