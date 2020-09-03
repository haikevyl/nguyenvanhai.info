import webbrowser
import requests

print("Getlink Tool By Hai Nguyen")
options = """
==============================================
1: NhacCuaTui.com
2: zingmp3.vn
==============================================
"""
print(options)
select = input("typing option: ")
if select == "1":
	while True:
		url = input("paste url NhacCuaTui.com:\n")
		if "nhaccuatui.com/bai-hat/" in url:
			data = {"url": url}
			res = requests.post("https://www.vietrick.com/apps/library/nct.php", data = data)
			res = res.text.split(",")
			print("select quality download\n(1: lossless, 2: 320kps, 3: 128kps):\n")
			quality = input()
			if quality == "1" or quality == "2" or quality == "3":
				if quality == "1":
					end = 3
				else:
					end = 1
				link = res[len(res) - int(quality)].split(":")
				link = link[len(link) - 1].replace("\\", "")
				link = "https:" + link[0 : len(link) - end]
				webbrowser.open(link)
			else:
				print("try align!.")
		elif "exit" in url:
			break
		else:
			print("try align!.")
elif select == "2":
	while True:
		url = input("paste url zing mp3:\n")
		if "zing" in url and "mp3" in url:
			id = url.split("/")
			id = id[len(id) - 1].replace(".html", "")
			print(id)
			print("select quality download\n(1: 320kps, 2: 128kps):\n")
			quality = input()
			if quality == "1":
				link = "http://api.mp3.zing.vn/api/streaming/audio/" + id + "/320"
				webbrowser.open(link)
			elif quality == "2":
				link = "http://api.mp3.zing.vn/api/streaming/audio/" + id + "/128"
				webbrowser.open(link)
			else:
				print("try align!.")
		elif "exit" in url:
			break
		else:
			print("try align!.")
else:
	print("select option false. Try align!.")