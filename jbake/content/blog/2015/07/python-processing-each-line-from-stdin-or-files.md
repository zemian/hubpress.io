title=Python processing each line from stdin or files
date=2015-07-11
type=post
tags=python
status=published
~~~~~~
import fileinput,re
for line in fileinput.input():
line=line.rstrip()
line=line.replace('\\', '/')
a,b,*_=re.split('\s+', line)
print(b)