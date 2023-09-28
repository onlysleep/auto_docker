#/bin/bash
for version in 3.6 3.7 3.8 3.9 3.10 3.11
do
    name='py'${version/./}
    echo $name
    /root/miniconda/bin/conda create -y -n $name python=$version && \
    /root/miniconda/bin/conda run -n $name python -m requests numpy pandas requests gmpy2 libnum pwntools jupyter notebook
    #/root/miniconda/bin/conda install -y -n $name requests numpy pandas requests gmpy2 libnum pwntools jupyter notebook
done

/root/miniconda/bin/conda create -y -n py27 python=2.7 && \
/root/miniconda/bin/conda run -n py27 python -m pip install requests numpy pandas requests gmpy2 libnum pyelftools==0.29 pathlib2 pwntools
