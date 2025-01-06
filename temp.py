import numpy as np
import pandas as pd
sub = {
    "Math":[],
    "Eng":[],
    "AI":[],
    "Sci":[]
}

def addScore(key):
    arrScore = []
    for i in range(0,51):
        randomValue = np.random.randint(1,50)
        arrScore.append(randomValue)
    sub[key] = arrScore
    arrScore = []


for  key in sub.keys():
    addScore(key)

df = pd.DataFrame(sub)
print(df)