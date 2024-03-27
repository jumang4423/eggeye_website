# in the folder, list up all filenames
import os

print("[", end="", flush=False)

for file in os.listdir('.'):
    print(f'"/random/{file}", ', end="", flush=False)

print("]", end="", flush=False)