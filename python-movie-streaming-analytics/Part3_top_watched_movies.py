movie_count = {}

try:
    with open("watchlist.csv", "r") as file:
        data = file.read()
        movies = data.split(",")

        for title in movies:
            movie = title.strip()
            if movie in movie_count:
                movie_count[movie] += 1
            else:
                movie_count[movie] = 1
except:
    print("File error.")


top1 = ("", -1)
top2 = ("", -1)
top3 = ("", -1)

for movie, count in movie_count.items():
    if count > top1[1]:
        top3 = top2
        top2 = top1
        top1 = (movie, count)
    elif count > top2[1]:
        top3 = top2
        top2 = (movie, count)
    elif count > top3[1]:
        top3 = (movie, count)

print("Top 3 Movies:")
print("1.", top1[0], "=", top1[1])
print("2.", top2[0], "=", top2[1])
print("3.", top3[0], "=", top3[1])
