import os

def rename_jpg_files(directory):
    for filename in os.listdir(directory):
        if filename.lower().endswith('.mp3'):
            new_name = filename.lower().replace(' ', '-')
            old_path = os.path.join(directory, filename)
            new_path = os.path.join(directory, new_name)
            os.rename(old_path, new_path)
            print(f"Renamed: {filename} -> {new_name}")

directory_path = '/Users/hungwei/Desktop/Proj/self-blog/web/public/cover/audio'
rename_jpg_files(directory_path)
