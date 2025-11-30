genres_list = []
genres_set = set()
genres_count = {}

for i in range(10):
    genre = input(f"Enter genre {i + 1}: ")
    genres_list.append(genre)
    genres_set.add(genre)

    if genre in genres_count:
        genres_count[genre] += 1
    else:
        genres_count[genre] = 1

print("List:", genres_list)
print("Set:", genres_set)
print("Dictionary:", genres_count)