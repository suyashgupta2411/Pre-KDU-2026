inp = input("Enter 10 genres separated by commas: ")

items = inp.split(",")

genres_list = [genre.strip() for genre in items]

genres_set = set(genres_list)

genres_count = {}
for genre in genres_list:
    if genre in genres_count:
        genres_count[genre] += 1
    else:
        genres_count[genre] = 1

print("List:", genres_list)
print("Set:", genres_set)
print("Dictionary:", genres_count)
