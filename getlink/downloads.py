import requests
import json
import urllib.request
import re
from urllib.parse import urlparse, parse_qs


#api
api_playlist_youtube = "https://api.youtubemultidownloader.com/video?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D"
api_video_youtube = "https://api.youtubemultidownloader.com/video?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D"

#get id playlist or video youtube from url
def get_id(url):
    u_pars = urlparse(url)
    quer_v = parse_qs(u_pars.query).get('v')
    if quer_v:
        return quer_v[0]
    pth = u_pars.path.split('/')
    if pth:
        return pth[-1]

# download file form url
def download_file(file_url, file_name, name):
	print("downloadng...		" + name)
	urllib.request.urlretrieve(file_url, f"{file_name}.mp3")

str_option = """
1: downloads top 100 zingmp3.vn
2: downloads Album/playlist zingmp3.vn
3: download audio playlist youtube
4: download audio video youtube
"""

print(str_option)

select = input("typing option: ")

if int(select) == 1:
	url_bxh = "https://zingmp3.vn/api/chart-realtime/get-detail?type=song&time=-1&count=100&ctime=1598833392&sig=f55e1ebb5de66d097dc24ec9f6d654ffd12fdf072de4bce69f2fabda2511deece913fd70d827e0cb3c2c41bf4eba0cc619204d1ed86a31981d7e0f321804c4fd&api_key=38e8643fb0dc04e8d65b99994d3dafff"
	res = requests.get(url_bxh).json()
	res = res["data"]["items"]
	i = 1
	length_track = len(res)
	select_option = input("select option download (1: 320kps, 2: 128kps): ")
	if int(select_option) == 1:
		select_option = 320
	elif int(select_option) == 2:
		select_option = 128
	else: 
		print("select false")
	if select_option == 320 or select_option == 128:
		for item in res:
			file_name = item["alias"]
			id_track = item["id"]
			track_name = item["title"]
			print("downloadng...	"+ str(i)+ "/" + str(length_track) + "     " + track_name)
			track_url = "http://api.mp3.zing.vn/api/streaming/audio/" + id_track + "/" + str(select_option)
			urllib.request.urlretrieve(track_url, f"{file_name}.mp3")
			i += 1
		print("download success")
elif int(select) == 2:
	url_playlist = input("paste url album/playlist hare...\n")
	if re.search("(https://zingmp3.vn/album/[^.]+.html)", url_playlist):
		url_playlist_list = url_playlist.split("/")
		id_playlist = url_playlist_list[len(url_playlist_list) - 1].replace(".html", "")
		get_data_playlist_url = "https://zingmp3.vn/api/playlist/get-playlist-detail?id=" + id_playlist + "&ctime=1598835983&sig=219750bc0142ce6950b4d5ada9ca61880592d6500895038d3875654a69d2293873f420a5d3d835d159e2e428055fc329f3531ad94f28a2aaa1d6d8450c7edf21&api_key=38e8643fb0dc04e8d65b99994d3dafff"
		res = requests.get(get_data_playlist_url).json()
		res = res["data"]["song"]["items"]
		i = 1
		length_track = len(res)
		select_option = input("select option download (1: 320kps, 2: 128kps): ")
		if int(select_option) == 1:
			select_option = 320
		elif int(select_option) == 2:
			select_option = 128
		else: 
			print("select false")
		if select_option == 320 or select_option == 128:
			for item in res:
				file_name = item["alias"]
				id_track = item["id"]
				track_name = item["title"]
				print("downloadng...	"+ str(i)+ "/" + str(length_track) + "     " + track_name)
				track_url = "http://api.mp3.zing.vn/api/streaming/audio/" + id_track + "/" + str(select_option)
				urllib.request.urlretrieve(track_url, f"{file_name}.mp3")
				i += 1
			print("download success")
	else:
		print("url false, try align!")
elif int(select) == 3:
	url_youtube = input("paste url playlist:\n")
	id_playlist = get_id(url_youtube)
	res = requests.get(api_playlist_youtube + id_playlist).json()
	arr_item_id = []
	arr_item_title = []
	for item in res["items"]:
		arr_item_id = append(item["id"])
		arr_item_title = append(item["title"])
	for i in range(len(arr_item_id)):
		url = api_video_youtube + arr_item_id[i]
		res = requests.get(url).json()
		file_name = arr_item_title[i].replace("-", "")
		file_name = file_name.replace(" ", "-")
		name = arr_item_title[i]
		for itag in res["format"]:
			if itag["id"] == "141":
				download_file(itag["url"], file_name, name)
				break
			elif itag["id"] == "140":
				download_file(itag["url"], file_name, name)
				break
			elif itag["id"] == "171":
				download_file(itag["url"], file_name, name)
				break
elif int(select) == 4:
	url_video = input("paste url video:\n")
	id_video = get_id(url_video)
	url = api_video_youtube + id_video
	res = requests.get(url).json()
	name = res["title"]
	file_name = name.replace("-", "")
	file_name = file_name.replace(" ", "-")
	for itag in res["format"]:
		if itag["id"] == "141":
			download_file(itag["url"], file_name, name)
			break
		elif itag["id"] == "140":
			download_file(itag["url"], file_name, name)
			break
		elif itag["id"] == "171":
			download_file(itag["url"], file_name, name)
			break
else:
	print("select false, try align!")