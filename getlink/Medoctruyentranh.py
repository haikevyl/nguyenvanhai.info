import json
import bs4
import requests

#results
results = '<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/css/bootstrap.min.css" /> <div class="container" style="max-width: 960px; background-color: black;"><div class="row">'
#url = "https://www.medoctruyentranh.net/truyen-tranh/trong-sinh-tieu-y-tien-56018660"

def getAnh(url):
	string = ""
	img1 = "<div class='card row'><img class='card-img-top' src='"
	img2 = "' /></div>"
	res = requests.get(url).text
	soup = bs4.BeautifulSoup(res, 'html.parser')
	eles = soup.select('script#__NEXT_DATA__')
	eles = str(eles)
	eles = eles.replace('<script id="__NEXT_DATA__" type="application/json">', '')
	eles = eles.replace('</script>', '')
	b = json.loads(eles)
	b = b[0]
	c = b["props"]["pageProps"]["initialState"]["read"]["detail_item"]["elements"]
	for i in c:
		string += img1 + i["content"] + img2
	return string	

print("get medoctruyentranh.net")
url = input()
print("đang getlink truyện vui lòng chờ...")
#getlink chuong truyen
res = requests.get(url).text
soup = bs4.BeautifulSoup(res, 'html.parser')

chuongLink = []

eles = soup.select('div.chapter_pages a')
for ele in eles:
	chuongLink.append(ele.get('href'))
print(len(chuongLink))
#getlink truyen
for link in chuongLink:
	#print(link)
	string = getAnh(link)
	results += string

#ghi tất cả ra file
ghi = open("gettruyen.html", mode="w")
results += '</dib></div>'
data = ghi.write(results)
ghi.close()
