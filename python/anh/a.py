import wget
import requests
import shutil

file_obj = open("Link.txt")

listLink = file_obj.readlines()
def downloadImg(url, nameFile, result_dir):
	try:
		response = requests.get(url, stream = True,timeout=10)
		with open(r'%s\%s.jpg' % (result_dir,nameFile), 'wb') as out_file:
			shutil.copyfileobj(response.raw, out_file)
		del response
	except:
		print("error downloadImg")

for i in listLink:
	namefile = i.split("/")
	namefile = namefile[len(namefile) - 1]
	downloadImg(i, namefile, "images")