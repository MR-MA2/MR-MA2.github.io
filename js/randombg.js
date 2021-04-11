var bannerimg =[
    "url(https://img.imgdb.cn/item/6025eeb03ffa7d37b386ffd8.jpg)",
    "url(https://img.imgdb.cn/item/6025eeb03ffa7d37b386ffdd.jpg)",
    "url(https://img.imgdb.cn/item/6023fa573ffa7d37b3dc04fb.jpg)",
    "url(https://img.imgdb.cn/item/6025eeb03ffa7d37b386ffd4.jpg)",
    "url(https://img.imgdb.cn/item/6025eee33ffa7d37b3870f7a.png)",
    "url(https://img.imgdb.cn/item/6025eede3ffa7d37b3870ddb.png)",
    "url(https://img.imgdb.cn/item/6025ef943ffa7d37b38756bc.png)",
    "url(https://img.imgdb.cn/item/6025ef933ffa7d37b387563e.png)",
    "url(https://img.imgdb.cn/item/6025ef8f3ffa7d37b3875564.png)",
    "url(https://img.imgdb.cn/item/6025f01d3ffa7d37b387816d.jpg)",
    "url(https://img.imgdb.cn/item/6025f01d3ffa7d37b3878169.jpg)",
    "url(https://img.imgdb.cn/item/6025f0443ffa7d37b3878cdd.jpg)",
    "url(https://img.imgdb.cn/item/6025f0443ffa7d37b3878ce4.jpg)",
    "url(https://img.imgdb.cn/item/6025f01d3ffa7d37b387815e.png)",
    "url(https://img.imgdb.cn/item/6025f0443ffa7d37b3878cda.jpg)",
    "url(https://img.imgdb.cn/item/6025f0643ffa7d37b3879726.jpg)",
    "url(https://img.imgdb.cn/item/6025f01d3ffa7d37b3878164.jpg)"];
var bannerindex =Math.ceil(Math.random() * (bannerimg.length-1));
document.getElementById("page-header").style.backgroundImage = bannerimg[bannerindex];
 