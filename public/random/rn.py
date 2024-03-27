# remove pref from filename.
import os
pref = ".png のコピー"

files = os.listdir('.')


for file in files:
    filename = file.replace(pref, "")
    print(filename)
    # mv
    os.rename(file, filename)

