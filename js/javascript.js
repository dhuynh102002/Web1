// JavaScript Document
createProduct();
createAdmin();
/*----------------------------------banner----------------------------------*/
var index = 1;
		function changeImage(){  
			var imgs= ["images/banner4.png","images/1.png","images/2.png"];
			document.getElementById('img').src = imgs[index];
			index++;
			if(index==3){
				index=0;
			}
		}
		setInterval(changeImage,2500);
		
/*-------------------------------menu khi màn hình nhỏ--------------------*/
	
	$(document).ready(function() {
        $('#toggle').click(function(){
			$('nav').slideToggle(); /*nhấn vào thì menu xổ xuống*/
		});
	});
		
function currency(num) {

  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' VND';
}
function showMenu(){
	var menuList = ['Samsung','Oppo','iPhone','Vivo'];
	var ul = document.getElementById('main-menu');
	var li='<li><a href="index.html">TRANG CHỦ</a></li>';
	li+='<li><a href="">DANH MỤC</a>' + '<ul class="sub-menu">';
	for(var i=0;i<menuList.length;i++){
		li += '<li><a href="index.html?'+menuList[i].toLowerCase()+'&0">'+menuList[i]+'</a></li>';
	}
	li+='</ul></li>';
	li+='<li id="gt" onclick="hienthi1(this);"><a href="#gioithieu">GIỚI THIỆU</a></li>';
	li+='<li id="lh" onclick="hienthi1(this);"><a href="#lienhe">LIÊN HỆ</a></li>';
	ul.innerHTML= li;
}
/*----------------------------------------------------------END MENU----------------------------------------*/


	
/*--------------------------------------------------------PRODUCT--------------------------------------------------*/
function createProduct(){
	if(localStorage.getItem('product')===null){
		var productArray = [
			{productId:1000, brand:'samsung',img:'images/product/1000.jpg', name:'Samsung Galaxy A22', price: 5490000, width:'90%', height:'270px', style:'text-align:center; margin-top:20px', thongtin:'<tr><td>Màn hình: Super AMOLED, 6.4", HD+</td></tr><tr><th>Hệ điều hành: Android 11</tr></th><tr><td>Camera sau: Chính 48 MP, Phụ 8 MP</td></tr><tr><th>Camera trước: 13 MP</th></tr><tr><td>Chip: MediaTek MT6769V</td></tr><tr><th>RAM: 8GB/128GB</th></tr><tr><td>SIM: 2 Nano SIM, Hỗ trợ 4G</td></tr><tr><th>Pin, Sạc: 5000 mAh, 15 W</th></tr>'},
			{productId:1001, brand:'samsung',img:'images/product/1001.jpg', name:'Samsung Galaxy A52', price:8590000, width:'94%', height:'260px', style:'text-align:center; margin-top:20px;',thongtin:'<tr><td>Màn hình: Super AMOLED, 6.5", Full HD+</td></tr><tr><th>Hệ điều hành: Android 11</tr></th><tr><td>Camera sau: Chính 64 MP & Phụ 12 MP</td></tr><tr><th>Camera trước: 32 MP</th></tr><tr><td>Chip: Snapdragon 750G 5G</td></tr><tr><th>RAM: 8GB/128GB</th></tr><tr><td>SIM: 2 Nano SIM, Hỗ trợ 5G/td></tr><tr><th>Pin, Sạc: 4500 mAh, 25 W</th></tr>'},
			{productId:1044, brand:'oppo',img:'images/product/1044.jpg', name:'Oppo A5S 32GB Đen', price:3990000, width:'80%', height:'240px', style:'text-align:center; margin-top:50px;',thongtin:'<tr><td>Màn hình: IPS LCD, 6.2", HD+</td></tr><tr><th>Hệ điều hành: Android 11</tr></th><tr><td>Camera sau: Chính 13 MP & Phụ 2 MP</td></tr><tr><th>Camera trước: 8MP</th></tr><tr><td>Chip: MediaTek Helio P35</td></tr><tr><th>RAM: 3GB/32GB</th></tr><tr><td>SIM: 2 Nano SIM, Hỗ trợ 4G</td></tr><tr><th>Pin, Sạc: 4230 mAh</th></tr>'},
			{productId:1042, brand:'oppo',img:'images/product/1042.jpg', name:'Oppo A92 CPH2059 ', price:6990000,width:'94%', height:'246px', style:'text-align:center; margin-top:40px;',thongtin:'<tr><td>Màn hình: TFT LCD, 6.5", Full HD+</td></tr><tr><th>Hệ điều hành: Android 10</tr></th><tr><td>Camera sau: Chính 48 MP & Phụ 8 MP</td></tr><tr><th>Camera trước: 16MP</th></tr><tr><td>Chip: Snapdragon 665</td></tr><tr><th>RAM: 8GB/128GB</th></tr><tr><td>SIM: 2 Nano SIM, Hỗ trợ 4G</td></tr><tr><th>Pin, Sạc: 5000 mAh, 18 W</th></tr>'},
			{productId:1041, brand:'iphone',img:'images/product/1041.jpg', name:'Iphone 12 256GB', price:23290000, width:'90%', height:'300px', style:'text-align:center; margin-top:-10px',thongtin:'<tr><td>Màn hình: OLED, 6.1", Super Retina XDR</td></tr><tr><th>Hệ điều hành: iOS 14</tr></th><tr><td>Camera sau: 2 camera 12 MP</td></tr><tr><th>Camera trước: 12MP</th></tr><tr><td>Chip: Apple A14 Bionic</td></tr><tr><th>RAM: 4GB/256GB</th></tr><tr><td>SIM: 1 Nano SIM & 1 eSIM, Hỗ trợ 5G</td></tr><tr><th>Pin, Sạc: 2815 mAh, 20 W</th></tr>'},
			{productId:1043, brand:'iphone',img:'images/product/1043.jpg', name:'Iphone 13 256GB', price:26990000, width:'90%', height:'300px', style:'text-align:center; margin-top:-10px;',thongtin:'<tr><td>Màn hình: OLED, 6.1", Super Retina XDR</td></tr><tr><th>Hệ điều hành: iOS 15</tr></th><tr><td>Camera sau: 2 camera 12 MP</td></tr><tr><th>Camera trước: 12MP</th></tr><tr><td>Chip: Apple A15 Bionic</td></tr><tr><th>RAM: 4GB/256GB</th></tr><tr><td>SIM: 1 Nano SIM & 1 eSIM, Hỗ trợ 5G</td></tr><tr><th>Pin, Sạc: 3240 mAh, 20 W</th></tr>'},
			{productId:1032, brand:'vivo',img:'images/product/1032.jpg', name:'Vivo V20', price:7790000, width:'90%', height:'230px', style:'text-align:center; margin-top:50px;',thongtin:'<tr><td>Màn hình: AMOLED, 6.44", Full HD+</td></tr><tr><th>Hệ điều hành: Android 11</tr></th><tr><td>Camera sau: Chính 64 MP & Phụ 8 MP</td></tr><tr><th>Camera trước: 44MP</th></tr><tr><td>Chip: Snapdragon 730</td></tr><tr><th>RAM: 8GB/128GB</th></tr><tr><td>SIM: 2 Nano SIM, Hỗ trợ 4G</td></tr><tr><th>Pin, Sạc: 4000 mAh, 33 W</th></tr>'},
			{productId:1028, brand:'vivo',img:'images/product/1028.jpg', name:'Vivo Y30i', price:3890000, width:'90%', height:'270px', style:'text-align:center; margin-top:20px',thongtin:'<tr><td>Màn hình: IPS LCD, 6.47", HD+</td></tr><tr><th>Hệ điều hành: Android 10</tr></th><tr><td>Camera sau: Chính 13 MP & Phụ 8 MP</td></tr><tr><th>Camera trước: 8MP</th></tr><tr><td>Chip: MediaTek Helio P35</td></tr><tr><th>RAM: 4GB/128GB</th></tr><tr><td>SIM: 2 Nano SIM, Hỗ trợ 4G</td></tr><tr><th>Pin, Sạc: 5000 mAh, 10 W</th></tr>'},
			{productId:1002, brand:'samsung',img:'images/product/1002.jpg', name:'Samsung Galaxy Z Flip3', price:23990000, width:'95%', height:'280px', style:'text-align:center; margin-top:10px;',thongtin:'<tr><td>Màn hình: Dynamic AMOLED 2XChính 6.7" & Phụ 1.9"Full HD+</td></tr><tr><th>Hệ điều hành: Android 10</tr></th><tr><td>Camera sau: Chính 13 MP & Phụ 5 MP</td></tr><tr><th>Camera trước: 8MP</th></tr><tr><td>Chip: Snapdragon 450</td></tr><tr><th>RAM: 3GB/32GB</th></tr><tr><td>SIM: 2 Nano SIM, Hỗ trợ 4G</td></tr><tr><th>Pin, Sạc: 4000 mAh, 15 W</th></tr>'},
			{productId:1003, brand:'samsung',img:'images/product/1003.jpg', name:'Samsung Galaxy A11', price:2790000, width:'90%', height:'300px', style:'text-align:center; margin-top:-10px;',thongtin:'<tr><td>Màn hình: PLS TFT LCD, 6.4", HD+</td></tr><tr><th>Hệ điều hành: Android 11</tr></th><tr><td>Camera sau: 2 camera 12 MP</td></tr><tr><th>Camera trước: 10MP</th></tr><tr><td>Chip: Snapdragon 888</td></tr><tr><th>RAM: 8GB/128GB</th></tr><tr><td>SIM: 1 Nano SIM & 1 eSIM, Hỗ trợ 5G</td></tr><tr><th>Pin, Sạc: 3300 mAh, 15 W</th></tr>'},
			{productId:1045, brand:'iphone',img:'images/product/1045.jpg', name:'Iphone 13 Pro Max', price:34990000,width:'100%' ,height:'260px', style:'text-align:center; margin-top:30px;',thongtin:'<tr><td>Màn hình: OLED, 6.7", Super Retina XDR</td></tr><tr><th>Hệ điều hành: iOS 15</tr></th><tr><td>Camera sau: 3 camera 12 MP</td></tr><tr><th>Camera trước: 12 MP</th></tr><tr><td>Chip: Apple A15 Bionic</td></tr><tr><th>RAM: 6GB/256GB</th></tr><tr><td>SIM: 1 Nano SIM & 1 eSIM, Hỗ trợ 5G</td></tr><tr><th>Pin, Sạc: 4352 mAh, 20 W</th></tr>'},
			{productId:1046, brand:'iphone',img:'images/product/1046.jpg', name:'Iphone XS MAX 64GB', price:8990000, width:'90%', height:'250px', style:'text-align:center; margin-top:40px;',thongtin:'<tr><td>Màn hình: OLED, 6.5", Super Retina</td></tr><tr><th>Hệ điều hành: iOS 14</tr></th><tr><td>Camera sau: 2 camera 12 MP</td></tr><tr><th>Camera trước: 7 MP</th></tr><tr><td>Chip: Apple A12 Bionic</td></tr><tr><th>RAM: 4GB/256GB</th></tr><tr><td>SIM: 1 Nano SIM & 1 eSIM, Hỗ trợ 5G</td></tr><tr><th>Pin, Sạc: 3174 mAh</th></tr>'},
			{productId:1047, brand:'oppo',img:'images/product/1047.jpg', name:'Oppo Find X3 Pro', price:21490000,  width:'100%', height:'280px',style:'text-align:center; margin-top:10px;',thongtin:'<tr><td>Màn hình: AMOLED, 6.7", Quad HD+ (2K+)</td></tr><tr><th>Hệ điều hành: Android 11</tr></th><tr><td>Camera sau: Chính 50 MP & Phụ 50 MP</td></tr><tr><th>Camera trước: 12 MP</th></tr><tr><td>Chip: Snapdragon 888</td></tr><tr><th>RAM: 12GB/256GB</th></tr><tr><td>SIM: 2 Nano SIM, Hỗ trợ 5G</td></tr><tr><th>Pin, Sạc: 4500 mAh, 65 W</th></tr>'},
			{productId:1048, brand:'oppo',img:'images/product/1048.jpg', name:'Oppo A93', price:6490000,width:'90%', height:'230px',style:'text-align:center; margin-top:50px;',thongtin:'<tr><td>Màn hình: AMOLED, 6.43", Full HD+</td></tr><tr><th>Hệ điều hành: Android 10</tr></th><tr><td>Camera sau: Chính 48 MP & Phụ 8 MP</td></tr><tr><th>Camera trước: Chính 16 MP & Phụ 2 MP</th></tr><tr><td>Chip: MediaTek Helio P95</td></tr><tr><th>RAM: 8GB/128GB</th></tr><tr><td>SIM: 2 Nano SIM, Hỗ trợ 4G</td></tr><tr><th>Pin, Sạc: 4000 mAh, 18 W</th></tr>'},
			{productId:1029, brand:'vivo',img:'images/product/1029.jpg', name:'Vivo V21 5G', price:9490000,width:'90%', height:'250px',style:'text-align:center; margin-top:40px;',thongtin:'<tr><td>Màn hình: AMOLED, 6.44", Full HD+</td></tr><tr><th>Hệ điều hành: Android 11</tr></th><tr><td>Camera sau: Chính 64 MP & Phụ 8 MP</td></tr><tr><th>Camera trước: 44 MP </th></tr><tr><td>Chip: MediaTek Dimensity 800U 5G</td></tr><tr><th>RAM: 8GB/128GB</th></tr><tr><td>SIM: 2 Nano SIM, Hỗ trợ 5G</td></tr><tr><th>Pin, Sạc: 4000 mAh, 33 W</th></tr>'},
			{productId:1034, brand:'vivo',img:'images/product/1034.jpg', name:'Vivo Y51', price:5990000,width:'90%', height:'260px',style:'text-align:center; margin-top:20px;',thongtin:'<tr><td>Màn hình: IPS LCD, 6.58", Full HD+</td></tr><tr><th>Hệ điều hành: Android 11</tr></th><tr><td>Camera sau: Chính 48 MP & Phụ 8 MP</td></tr><tr><th>Camera trước: 16 MP </th></tr><tr><td>Chip: Snapdragon 662</td></tr><tr><th>RAM: 8GB/128GB</th></tr><tr><td>SIM: 2 Nano SIM, Hỗ trợ 4G</td></tr><tr><th>Pin, Sạc: 5000 mAh, 18 W</th></tr>'},
			{productId:1005, brand:'samsung',img:'images/product/1005.jpg', name:'Samsung Galaxy Note10+', price:10399000,width:'100%',height:'260px',style:'text-align:center; margin-top:20px',thongtin:'<tr><td>Màn hình: Dynamic AMOLED, 6.8", Quad HD+ (2K+)</td></tr><tr><th>Hệ điều hành: Android 9 (Pie)</tr></th><tr><td>Camera sau: Chính 12 MP & Phụ 12 MP</td></tr><tr><th>Camera trước: 10 MP </th></tr><tr><td>Chip: Exynos 9825</td></tr><tr><th>RAM: 12GB/256GB</th></tr><tr><td>SIM: 2 Nano SIM, Hỗ trợ 4G</td></tr><tr><th>Pin, Sạc: 4300 mAh, 45 W</th></tr>'},
			{productId:1006, brand:'samsung',img:'images/product/1006.jpg', name:'Samsung Galaxy S21', price:25990000,width:'100%',height:'280px',style:'text-align:center; margin-top:10px;',thongtin:'<tr><td>Màn hình: Dynamic AMOLED 2X, 6.8", Quad HD+ (2K+)</td></tr><tr><th>Hệ điều hành: Android 11</tr></th><tr><td>Camera sau: Chính 108 MP & Phụ 12 MP</td></tr><tr><th>Camera trước: 40 MP </th></tr><tr><td>Chip: Exynos 2100</td></tr><tr><th>RAM: 12GB/128GB</th></tr><tr><td>SIM: 2 Nano SIM hoặc 1 Nano SIM + 1 eSIM, Hỗ trợ 5G</td></tr><tr><th>Pin, Sạc: 5000 mAh, 25 W</th></tr>'},
			{productId:1050, brand:'oppo',img:'images/product/1050.jpg', name:'Oppo A9', price:3490000,width:'90%', height:'260px',style:'text-align:center; margin-top:30px; margin-left:20px',thongtin:'<tr><td>Màn hình: TFT LCD, 6.5", HD+</td></tr><tr><th>Hệ điều hành: Android 9 (Pie)</tr></th><tr><td>Camera sau: Chính 48 MP & Phụ 8 MP</td></tr><tr><th>Camera trước: 16 MP </th></tr><tr><td>Chip: Snapdragon 665</td></tr><tr><th>RAM: 8GB/128GB</th></tr><tr><td>SIM: 2 Nano SIM, Hỗ trợ 4G</td></tr><tr><th>Pin, Sạc: 5000 mAh</th></tr>'},
			{productId:1049, brand:'oppo',img:'images/product/1049.jpg', name:'Oppo Reno 4 Pro', price:10490000,width:'100%',height:'230px',style:'text-align:center; margin-top:50px;',thongtin:'<tr><td>Màn hình: AMOLED, 6.5", Full HD+</td></tr><tr><th>Hệ điều hành: Android 10</tr></th><tr><td>Camera sau: Chính 48 MP & Phụ 8 MP</td></tr><tr><th>Camera trước: 32 MP </th></tr><tr><td>Chip: Snapdragon 720G</td></tr><tr><th>RAM: 8GB/256GB</th></tr><tr><td>SIM: 2 Nano SIM, Hỗ trợ 4G</td></tr><tr><th>Pin, Sạc: 4000 mAh, 65W</th></tr>'},
			{productId:1051, brand:'iphone',img:'images/product/1051.jpg', name:'Iphone X 265GB', price:33990000,width:'90%',height:'250px',style:'text-align:center; margin-top:40px;',thongtin:'<tr><td>Màn hình: OLED, 5.8", Super Retina</td></tr><tr><th>Hệ điều hành: iOS 12</tr></th><tr><td>Camera sau: 2 camera 12 MP</td></tr><tr><th>Camera trước: 7 MP </th></tr><tr><td>Chip: Apple A11 Bionic</td></tr><tr><th>RAM: 3GB/256GB</th></tr><tr><td>SIM: 1 Nano SIM</td></tr><tr><th>Pin, Sạc: 2716 mAh</th></tr>'},
			{productId:1052, brand:'iphone',img:'images/product/1052.jpg', name:'Iphone 12 Pro Max', price:38990000,width:'90%',height:'270px',style:'text-align:center; margin-top:30px',thongtin:'<tr><td>Màn hình: OLED, 6.7", Super Retina XDR</td></tr><tr><th>Hệ điều hành: iOS 14</tr></th><tr><td>Camera sau: 3 camera 12 MP</td></tr><tr><th>Camera trước: 12 MP </th></tr><tr><td>Chip: Apple A14 Bionic</td></tr><tr><th>RAM: 6GB/256GB</th></tr><tr><td>SIM: 1 Nano SIM & 1 eSIM, Hỗ trợ 5G</td></tr><tr><th>Pin, Sạc: 3687 mAh, 20 W</th></tr>'},
			{productId:1031, brand:'vivo',img:'images/product/1031.jpg', name:'Vivo S1', price:3490000,width:'90%', height:'260px',style:'text-align:center; margin-top:30px;',thongtin:'<tr><td>Màn hình: Super AMOLED, 6.38", Full HD+</td></tr><tr><th>Hệ điều hành: Android 9 (Pie)</tr></th><tr><td>Camera sau: Chính 16 MP & 12 MP</td></tr><tr><th>Camera trước: 32 MP </th></tr><tr><td>Chip: MediaTek MT6768 (Helio P65)</td></tr><tr><th>RAM: 6GB/128GB</th></tr><tr><td>SIM: 2 Nano SIM, Hỗ trợ 4G</td></tr><tr><th>Pin, Sạc: 4500 mAh</th></tr>'},
			
		];
		localStorage.setItem('product',JSON.stringify(productArray));
	}
}

/*-----------------------------------------------show sản phẩm------------------------------*/
function showProduct(){  
	var url = document.location.href;
	var temp = url.split("?");
	var s='';
	var productArray = JSON.parse(localStorage.getItem('product'));
	if(temp[1]=='' || temp[1]==undefined || temp[1].search('all')==0){
		if(temp[1]=='' || temp[1]==undefined){
			temp = 'all&0';
		}
		else{
			temp = temp[1];
		}
		var temp2 = temp.split("&");
		var vitri = temp2[1];
		var sotrang=0,dem=0;
		
		for(var i=vitri;i<productArray.length;i++){
			s+='<div class="khung1">'+ '<ul class="list-person"><li>'+
						'<img src="'+productArray[i].img+'" + width="'+productArray[i].width+'" + height="'+productArray[i].height+'" + style="'+productArray[i].style+'">'+ '</li></ul>' +
						'<p>' + productArray[i].name + '</p>'+
						'<p style="color:#F00">' + currency(productArray[i].price) +'</p>' +
						'<button class="btn" onClick="showProductInfo('+productArray[i].productId+')">Chi tiết</button></div>';
			dem++;
			if(dem==8)
				break;
		}
		sotrang=Math.ceil(productArray.length/8);
		var lienket='';
		for(var i = 1;i<=sotrang;i++){
			vitri=(i-1)*8;
			var a ='<ul><li>'+'<a href="index.html?all&'+vitri+'">'+i+'</a></li></ul>';
			lienket+='<div class="pagenumber">'+a+'</div>';
		}
		document.getElementById('number').innerHTML=lienket;
	}
	else{
		temp = temp[1];
		var temp2 = temp.split("&");
		var brand = temp2[0];
		var vitri = temp2[1];
		var sotrang=0,dem=0;
		var arrtempt=[];
		for(var i=0; i<productArray.length;i++){
			if(brand==productArray[i].brand)
				arrtempt.push(productArray[i]);
		}
		
		for(var i=vitri;i<arrtempt.length;i++){
			s+='<div class="khung1">'+ '<ul class="list-person"><li>' +
						'<img src="'+arrtempt[i].img+'" + width="'+productArray[i].width+'" + height="'+productArray[i].height+'" + style="'+productArray[i].style+'">'+ '</li></ul>' +
						'<p>' + arrtempt[i].name + '</p>'+
						'<p style="color:#F00">' + currency(arrtempt[i].price) +'</p>' +
						'<button class="btn" onClick="showProductInfo('+arrtempt[i].productId+')">Chi tiết</button></div>';
			dem++;
			if(dem==8)
				break;
		}
		
		sotrang=Math.ceil(arrtempt.length/8);
		var lienket='';
		for(var i = 1;i<=sotrang;i++){
			vitri=(i-1)*8;
			var a ='<ul><li>'+'<a href="index.html?'+brand+'&'+vitri+'">'+i+'</a></li></ul>';
			lienket+='<div class="pagenumber">'+a+'</div>';
		}
		document.getElementById('number').innerHTML=lienket;
		if(sotrang==1){
			var n='';
				document.getElementById('number').innerHTML=n;
		}
	}
	document.getElementById('product').innerHTML=s;
}

/*-------------------------------------------show chi tiết sản phẩm-------------------------*/
function showProductInfo(productid){ 
	document.getElementById('productInfo').style.display = 'block';
	var productArray = JSON.parse(localStorage.getItem('product'));
	for(var i=0;i<productArray.length;i++){
		if(productArray[i].productId==productid){
			document.getElementById('productname').innerHTML = productArray[i].name;
			document.getElementById('productprice').innerHTML = 'Giá: '+ currency(productArray[i].price);
			document.getElementById('imgbig').src=productArray[i].img;
			document.getElementById('chitiet').innerHTML = productArray[i].thongtin;
			document.getElementById('quantity').value = 1;
			document.querySelector('#info .right button.addtocart').setAttribute('onClick', 'addToCart('+productid+')');
		}
	}
}
function closeProductInfo(){

	document.getElementById('productInfo').style.display = 'none';
}
/*--------------------------------------------------------END PRODUCT------------------------------------------------*/

/*------------------------------------------------------------CART--------------------------------------------------------*/
function addToCart(productid1){
	var quantity = document.getElementById('quantity').value;
	var productArray = JSON.parse(localStorage.getItem('product'));
	var producttemp;
	for(var i=0; i<productArray.length;i++){
		if(productArray[i].productId==productid1){
			producttemp = productArray[i];
		}
	}
	if(localStorage.getItem('userlogin')===null){//đăng ký mới được mua sản phẩm
		customAlert('Bạn cần đăng ký để mua sản phẩm','warning');
		return false;
	}
	else if(localStorage.getItem('cart')===null){
		var cartArray = [];
		producttemp.quantity = quantity;
		
		producttemp.totalprice = quantity*producttemp.price;
		cartArray.unshift(producttemp);
		localStorage.setItem('cart',JSON.stringify(cartArray));
	}
	else{
		var cartArray = JSON.parse(localStorage.getItem('cart'));
		producttemp.quantity = quantity;
		
		producttemp.totalprice = quantity*producttemp.price;
		cartArray.unshift(producttemp);
		localStorage.setItem('cart',JSON.stringify(cartArray));		
	}
	closeProductInfo();
}
function showCartTable(){ //show giỏ hàng
	if (localStorage.getItem('cart')===null || localStorage.getItem('cart')=='[]'){
		var s='<tr><th>Không có sản phẩm nào trong giỏ hàng của bạn</th></tr>';
		document.getElementById('carttable').innerHTML=s;
		document.getElementById('totalprice').innerHTML=0;
	}else {
		var cartArray = JSON.parse(localStorage.getItem('cart'));
		var s='<tr><th>Ảnh sản phẩm</th><th>Tên sản phẩm</th><th>Đơn giá</th><th>Số lượng</th><th>Tổng</th><th>Xóa</th></tr>';
		var totalprice=0;
		for (var i = 0; i < cartArray.length; i++){
			s+=  '<tr>'+
					'<td><img src="'+cartArray[i].img+'"></td>'+
					'<td>'+
						'<div>'+cartArray[i].name+'</div>'+
						
					'</td>'+
					'<td>'+currency(cartArray[i].price)+'</td>'+
					'<td>'+
						'<button onClick="quantitydown2('+cartArray[i].productId+')">-</button>'+
						'<input id="quantity" type="text" disabled value="'+cartArray[i].quantity+'" onchange="updateCart(this.value,'+cartArray[i].productId+')">'+
						'<button onClick="quantityup2('+cartArray[i].productId+')">+</button>'+
					'</td>'+
					'<td>'+currency(cartArray[i].price*cartArray[i].quantity)+'</td>'+
					'<td class="garbage"><button onClick="deletecartitem('+cartArray[i].productId+')"><i class="fas fa-trash-alt"></i></buttom></td>'+
				'</tr>';
			totalprice+=cartArray[i].price*cartArray[i].quantity;
		}
		document.getElementById('carttable').innerHTML=s;
		document.getElementById('totalprice').innerHTML=currency(totalprice);
	}	
}
function deletecartitem(id){ //xóa sản phẩm trong giỏ hàng
	var cartArray = JSON.parse(localStorage.getItem('cart'));
	for (var i = 0; i < cartArray.length; i++) {
		if(cartArray[i].productId==id){
			cartArray.splice(i, 1);
		}
	}
	localStorage.setItem('cart',JSON.stringify(cartArray));
	showCartTable();
}
function deletecart(){ //xóa tất cả product trong cart
	localStorage.removeItem('cart');
	showCartTable();
}
function updateCart(quantity,id){ //sửa sản phẩm trong giỏ hàng
	var cartArray = JSON.parse(localStorage.getItem('cart'));
	for (var i = 0; i < cartArray.length; i++) {
		if(cartArray[i].productId==id){
			cartArray[i].quantity=quantity;
		}
	}
	localStorage.setItem('cart',JSON.stringify(cartArray));
	showCartTable();
}
function quantitydown(){  //button trừ của chi tiết sp
	if(document.getElementById('quantity').value > 1){
		document.getElementById('quantity').value--;
	}
}
function quantityup(){ //button cộng của chi tiết sp

	document.getElementById('quantity').value++;
}
function quantitydown2(id){ //button trừ của cart
	var cartArray = JSON.parse(localStorage.getItem('cart'));
	for (var i = 0; i < cartArray.length; i++) {
		if(cartArray[i].productId==id){
			if(cartArray[i].quantity>1)
				cartArray[i].quantity--;
		}
	}
	localStorage.setItem('cart',JSON.stringify(cartArray));
	showCartTable();
}
function quantityup2(id){ //button cộng của cart
	var cartArray = JSON.parse(localStorage.getItem('cart'));
	for (var i = 0; i < cartArray.length; i++) {
		if(cartArray[i].productId==id){
				cartArray[i].quantity++;
		}
	}
	localStorage.setItem('cart',JSON.stringify(cartArray));
	showCartTable();
}
function buy(){
	if(localStorage.getItem('cart')===null || localStorage.getItem('cart')=='[]'){
		customAlert('Bạn chưa mua sản phẩm','warning');
		return false;
	}
	var info = '';
	var totalprice = 0;
	if(localStorage.getItem('cart')===null || localStorage.getItem('cart')=='[]'){
		return false;
	}
	var cartArray = JSON.parse(localStorage.getItem('cart'));
	for (var i = 0; i < cartArray.length; i++) {
			info+=cartArray[i].quantity+' x '+cartArray[i].name+'<br> '; //thông tin sp
			totalprice+=cartArray[i].quantity*cartArray[i].price;
	}
	var customer = JSON.parse(localStorage.getItem('userlogin'));
	var date = new Date();
	var d = date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear();
	if(localStorage.getItem('bill')===null){
		var billArray = [];
		var bill = {id: billArray.length, info: info, totalprice: totalprice, customer: customer, date: d, status: 'Chưa xử lý'};
		billArray.unshift(bill);
		localStorage.setItem('bill', JSON.stringify(billArray));
	}
	else{
		var billArray = JSON.parse(localStorage.getItem('bill'));
		var bill = {id: billArray.length, info: info, totalprice: totalprice, customer: customer, date: d, status: 'Chưa xử lý'};
		billArray.unshift(bill);
		localStorage.setItem('bill', JSON.stringify(billArray));
	}	
	localStorage.removeItem('cart');
	showCartTable();
	showbill();
	
	
}
function showbill(){
	if (localStorage.getItem('bill')===null){
		document.getElementById('bill').style.display = 'none';
	}
	else{
		var user = JSON.parse(localStorage.getItem('userlogin'))
		var billArray = JSON.parse(localStorage.getItem('bill'));
		var s='<h2>Đơn hàng đã đặt</h2><tr><th>Tên sản phẩm</th><th>Giá</th><th>Ngày</th><th>Trạng thái</th></tr>';
		for (var i = 0; i < billArray.length; i++) {
			if(user.username==billArray[i].customer.username){
				document.getElementById('bill').style.display = 'block';
				s+='<tr>'+
					'<td>'+billArray[i].info+'</td>'+
					'<td>'+currency(billArray[i].totalprice)+'</td>'+
					'<td>'+billArray[i].date+'</td>'+
					'<td>'+billArray[i].status+'</td>'+
				'</tr>';
			}
		}
		document.getElementById('bill').innerHTML = s;
	}
}
/*-----------------------------------------------------END CART----------------------------------------------*/

/*------------------------------------------USER--------------------------------------------*/
function createAdmin(){
	if(localStorage.getItem('user')===null){
		var userArray = [];
		var user = {username: 'admin', password: 'admin', fullname: 'Nhóm 11', address: 'abc', phone: '0318728712' , datesignup: '20-11-2021'};
		userArray.push(user);
		localStorage.setItem('user',JSON.stringify(userArray));
	}
}
function showform(){
	var userform = document.getElementById('user');
	userform.style.display = 'block';
}
function closeform(){
	var userform = document.getElementById('user');
	userform.style.display = 'none';
}
function showSignUp(){
	document.getElementById('login').style.display = 'none';
	document.getElementById('signup').style.display = 'block';
}
function showLogin(){
	document.getElementById('signup').style.display = 'none';
	document.getElementById('login').style.display = 'block';
}
document.getElementById('signupform').addEventListener('submit', createUser);
document.getElementById('loginform').addEventListener('submit', login);

/*--------------------------------------------Đăng ký--------------------------------------*/
function createUser(e){
	e.preventDefault();
	var fullname = document.getElementById('fullname');
	var address = document.getElementById('address');
	var phone = document.getElementById('phone');
	var username = document.getElementById('usernameSignUp');
	var password = document.getElementById('passwordSignUp');
	var password2 = document.getElementById('passwordSignUp2');
	var flag = true;
	if(!fullname.value){
		document.getElementById('fullnameerror').style.display = 'block';
		flag = false;
	}else{
		document.getElementById('fullnameerror').style.display = 'none';
	}
	if(!address.value){
		document.getElementById('addresserror').style.display = 'block';
		flag = false;
	}else{
		document.getElementById('addresserror').style.display = 'none';
	}
	if(!phone.value){
		document.getElementById('phoneerror').style.display = 'block';
		flag = false;
	}else{
		if(isNaN(Number(phone.value))){
			document.getElementById('phoneerror').style.display = 'block';
			document.getElementById('phoneerror').innerHTML = 'Số điện thoại không hợp lệ';
			flag = false;
		}else{
			if(Number(phone.value)<100000000 || Number(phone.value)>999999999){
				document.getElementById('phoneerror').style.display = 'block';
				document.getElementById('phoneerror').innerHTML = 'Số điện thoại không đúng';
				flag = false;
			}else{
				document.getElementById('phoneerror').style.display = 'none';
			}
		}
	}
	if(!username.value){
		document.getElementById('usererror').style.display = 'block';
		flag = false;
	}else{
		document.getElementById('usererror').style.display = 'none';
	}
	if(!password.value){
		document.getElementById('passworderror').style.display = 'block';
		flag = false;
	}else{
		if(password.value.length<8){
			document.getElementById('passworderror').style.display = 'block';
			document.getElementById('passworderror').innerHTML = 'Mật khẩu phải trên 8 ký tự';
			flag = false;
		}else {
			document.getElementById('passworderror').style.display = 'none';
		}
	}
	if(password2.value != password.value){
		document.getElementById('password2error').style.display = 'block';
		flag = false;
	}else{
		document.getElementById('password2error').style.display = 'none';
	}
	if(flag==false){
		return false;
	}
	var d = new Date();
	var datesignup = d.getDate()+'-'+(d.getMonth()+1)+'-'+d.getFullYear();
	var user = {username: username.value, password: password.value, fullname: fullname.value, address: address.value, phone: phone.value , datesignup: datesignup};
	var userArray = JSON.parse(localStorage.getItem('user'));
	for(var i=0;i<userArray.length;i++){
		if(user.username==userArray[i].username){
			document.getElementById('usererror').style.display = 'block';
			document.getElementById('usererror').innerHTML = 'Tên đăng nhập đã có người sử dụng';
			username.focus();
			return false;
		}
	}
	userArray.push(user);
	localStorage.setItem('user',JSON.stringify(userArray));
	customAlert('Bạn đã đăng ký thành công!','success');
	showLogin();
}
/*---------------------------------------------------Đăng nhập--------------------------------*/
function login(e){
	e.preventDefault();
	var username = document.getElementById('usernameLogin').value;
	var password = document.getElementById('passwordLogin').value;
	var flag=true;
	if(!username){ //sai tên đăng nhập thì xuất ra lỗi
		document.getElementById('usernameerror').style.display = 'block';
		flag = false;
	}else {
		document.getElementById('usernameerror').style.display = 'none';
	}
	if(!password){ //sai passwword thì xuất ra lỗi
		document.getElementById('passwordloginerror').style.display = 'block';
		flag = false;
	}else {
		document.getElementById('passwordloginerror').style.display = 'none';
	}
	if(flag==false){
		return false;
	}
	var userArray = JSON.parse(localStorage.getItem('user'));
	for(var i=0;i<userArray.length;i++){
		if(username==userArray[i].username){
			if(password==userArray[i].password){
				closeform();
				localStorage.setItem('userlogin',JSON.stringify(userArray[i]));
				window.location.reload(true);
				return true;
			}
		}
	}
	document.getElementById('passwordloginerror').style.display = 'block';
	document.getElementById('passwordloginerror').innerHTML = 'Sai thông tin đăng nhập';
	return false;
}
function logout(url){ 
	localStorage.removeItem('userlogin');
	localStorage.removeItem('cart');
	location.href=url;
}

/*-------------------Check đăng nhập-------------------------------*/
function checklogin(){
	if(localStorage.getItem('userlogin')){
		var user = JSON.parse(localStorage.getItem('userlogin'));
		var s='';
		if(user.username=='admin'){
			s = '<li><button onClick="window.location.href=\'admin/admin.html\'"><i class="fas fa-cog"></i></button></li>'+
				'<li><button>'+user.fullname+'</button><button id="btnlogout" onClick="logout(\'index.html\')">LOGOUT</button></li>'+
				'<li><button onClick="location.href=\'cart.html\'"><i class="fas fa-shopping-cart" style="color: #FFF"></i></button></li>'
				;
		}else{
			s = '<li><button>'+user.fullname+'</button><button id="btnlogout" onClick="logout(\'index.html\')">LOGOUT</button></li>'+
				'<li><button onClick="location.href=\'cart.html\'"><i class="fas fa-shopping-cart" style="color: #FFF"></i></button></li>'
				;
				
		}
		document.querySelector('#wrapper .icons-admin').innerHTML = s;
	}
}
/*------------------------------------------------------------END USER------------------------------------------*/

/*----------------------------------------------------------CUSTOM ALERT BOX-------------------------------------*/
function customAlert(message,type) {
	if (type=='success') {
		document.getElementById("customalert").style.backgroundColor = '#4CAF50';
	}
	if (type=='warning') {
		document.getElementById("customalert").style.backgroundColor = '#f44336';
	}
	document.getElementById("customalert").innerHTML = message;
    var x = document.getElementById("customalert");
    x.className = "show";
    setTimeout(function(){ x.className = x.classList.remove("show"); }, 3500);
}
/*---------------------------------------GIỚI THIỆU VÀ LIÊN HỆ----------------------------------------*/
function hienthi1(obj)
{
	a=obj;
	console.log(a.id);
	switch(a.id)
	{
		
		case 'gt': 
		{
			document.getElementById("menu").innerHTML='<div id="tieude">Điện thoại di động chính hãng tốt nhất ở TP.HCM</div><div id="than">Xu hướng sử dụng điện thoại di động trở nên phổ biến: Số lượng người dùng smartphone ngày càng gia tăng, giá thành hợp túi tiền khiến cho smartphone xuất hiện và thay thế máy tính, laptop. Thêm vào đó, việc sử dụng điện thoại di động để lướt web tiện lợi hơn nhiều cho việc di chuyển thường xuyên.Cửa hàng Sellphone chuyên bán điện thoại di động giúp người dùng có thể tham khảo sản phẩm, giá cả dễ dàng và quyết định mua hàng nhanh chóng.Sellphone đã sớm có một vị trí vững chắc trên thị trường bán lẻ di động xách tay, trở thành địa chỉ mua sắm điện thoại smartphone đầy tin cậy, uy tín, tiện lợi cho khách hàng tại TP.HCM và các tỉnh thành khác trên toàn quốc.Cửa hàng Sellphone là một show room điện thoại, phục vụ nhu cầu mua sắm trực tiếp cũng như trực tuyến bao gồm: chọn và mua điện thoại trực tuyến nhanh chóng, thanh toán an toàn, giao hàng tận nơi, chăm sóc và tư vấn thân thiện. Với mong muốn đem đến cho khách hàng những dòng sản phẩm điện thoại chất lượng, thời trang với giá cả hợp lý nhất, mang ứng dụng cao, hiện đại, phù hợp với gu thẩm mỹ của người Việt Nam.Sản phẩm tại Sellphone là những sản phẩm có xuất xứ nguồn gốc rõ ràng hàng cam kết chuẩn công nghệ không thay thế và làm mới ; mang tính hữu dụng về thiết kế thời trang để mọi người có thể tự do kết hợp và sáng tạo chúng trong phong cách độc đáo riêng của từng người mà không phân biệt tuổi tác và ngành nghề. Mỗi sản phẩm được trưng bày bán và đăng trên website.Đưa websitetrở thành nơi mua sắm trực tuyến các thiết bị di động thông minh và phụ kiện ưa thích và thường xuyên của khách hàng cả nước nói chung và thị trường TPHCM nói riêng.<div id="than1">Sản phẩm chủ đạo của chúng tôi</div><div><br>Các sản phẩm điện thoại di động xách tay cao cấp và chính hãng bao gồm: Apple, SamSung, Vivo, Oppo. Với nhiều dòng mẫu mã đa dạng, tích hợp công nghệ cao hoàn hảo đảm bảo phù hợp với thị hiếu yêu công nghệ và túi tiền của quý khách. Ngoài ra Sellphone luôn cố gắng khai thác thêm nhiều mẫu mã, đảm bảo được sự đa dạng và độc đáo của mỗi sản phẩm. Chúng tôi sẽ luôn đáp ứng nhằm phục vụ các Quý khách một cách tốt nhất.Đặt mục tiêu trở thành một trung tâm mua sắm điện thoại thiết bị di động xách tay hàng đầu tại Việt Nam về các sản phẩm dẫn đầu về uy tín, chất lượng và dịch vụ, Sellphone cam kết: <div class="thuc"> -Cung cấp các sản phẩm - dịch vụ chất lượng tốt, giá cả phù hợp với túi tiền người tiêu dùng.</div><div  class="thuc"> -Các sản phẩm được kiểm tra, sàng lọc kỹ càng, đảm bảo an toàn cho người sử dụng.</div><div  class="thuc"> -Bảo hành nghiêm túc theo quy định của nhà sản xuất.</div><div  class="thuc"> -Được đổi, trả hàng trong vòng 15 ngày đối với máy 99% | 15 ngày đối với máy 100% hoàn toàn miễn phí nếu xảy ra lỗi từ nhà sản xuất.</div><div  class="thuc"> -Tư vấn, hướng dẫn sử dụng với từng sản phẩm, đặc biệt với các sản phẩm chuyên dụng.</div><div id="than2">Với các tiêu chí về chất lượng và một đội ngũ năng động, nhiệt tình, giàu kinh nghiệm, Sellphone nhất định sẽ là điểm mua sắm thiết bị điện thoại di động xách tay lý tưởng cho các đối tượng khách hàng trên cả nước, nhanh gọn, an toàn và tiết kiệm thời gian hiệu quả.<div>Sau gần 10 năm hoạt động, với đội ngũ nhân viên coi khách hàng là trung tâm, tận tâm phục vụ. Cửa hàng Sellphone trở thành một trong những cử hàng chuyên bán lẻ các thiết bị di động có tên tuổi tại thị trường Việt Nam, với các chi nhánh tại TP.HCM. Với khát khao mang tới sự hài lòng tuyệt đối cho khách hàng, phát triển thương hiệu bằng giá trị cốt lõi là niềm tin của khách hàng, công ty luôn cố gắng nỗ lực để cập nhật, phát triển không ngừng nghỉ.</div><div id="ket"  class="thuc"> Chân thành cảm ơn Quý khách hàng đã ủng hộ Sellphone trong thời gian vừa qua và rất mong tiếp tục nhận được sự ủng hộ trong thời gian tới. Trân trọng.</div></div></div></div></div>';
			break;
		}
		case 'lh': 
		{
			document.getElementById("menu").innerHTML='<div id="lienhe">Hãy Kết Nối Với Tụi Mình Nhé</div><div id="icons1"><a href="https://www.facebook.com/"><i class="fab fa-facebook"  style="color:#06F"></i></a><a href="https://www.instagram.com/"><i class="fab fa-instagram"  style=" color:#8A3AB9"></i></a><a href="https://twitter.com/?lang=vi"><i class="fab fa-twitter"  style="color: #1DA1F2" ></i></a><a href="#"><i class="fas fa-phone-square" style="color:#0C0"></i></a><a href="https://www.youtube.com/"><i class="fab fa-youtube" style="color:red"></i></a></div><div class="img"><img src="images/lienhe.jpg" width="32%" height="300px"  style="margin-left:0px;box-shadow: 0px 0px 30px 0px #aaa69d;"><img src="images/lienhe1.jpg" width="32%" height="300px" style="margin-left:10px;box-shadow: 0px 0px 30px 0px #aaa69d;"><img src="images/lienhe2.jpg" style="margin-left:10px; box-shadow: 0px 0px 30px 0px #aaa69d;"" width="32%" height="300px; "></div><div class="diachi" style="margin-left:100px;">Phan Văn Trị Quận Gò Vấp TP.HCM <i style="margin-left:180px; font-style:normal">An Dương Vương Phường 6 Quận 5 TP.HCM</i><i style="margin-left:90px; font-style:normal">Nguyễn Thị Thập Tân Quy Quận 7 TP.HCM</i></div><div style="margin-left:160px; margin-top:50px; font-weight:bold; font-size:25px;text-shadow: 2px 4px 3px rgba(0,0,0,0.1)"> SDT: 0628951780<i  style="margin-left:350px; font-weight:bold; font-size:25px; font-style:normal;text-shadow: 2px 4px 3px rgba(0,0,0,0.1) "> SDT: 037598168</i><i  style="margin-left:300px;font-weight:bold; font-size:25px; font-style:normal;text-shadow: 2px 4px 3px rgba(0,0,0,0.1) "> SDT: 0364346700</i></div><div style="margin-left:100px; margin-top:50px; font-weight:bold; font-size:25px;text-shadow: 2px 4px 3px rgba(0,0,0,0.1)"> Email: admin@gmail.com<i  style="margin-left:230px;font-weight:bold; font-size:25px; font-style:normal;text-shadow: 2px 4px 3px rgba(0,0,0,0.1) "> Email: sellphone@gmail.com </i><i  style="margin-left:200px;font-weight:bold; font-size:25px; font-style:normal;text-shadow: 2px 4px 3px rgba(0,0,0,0.1) "> Email: admin@gmail.com </i></div></div>';
			break;
		}
		default:
		{
			document.getElementById("content").innerHTML='';
			break;
		}
	}
	
}

/*--------------------------------------SẮP XẾP SẢN PHẨM-----------------------------------------------*/			
			function sortproduct()
			{
				
				var productArray = JSON.parse(localStorage.getItem('product'));
				
		
				var sx = document.getElementById('sort').value;
				for(var i=0;i<productArray.length;i++){
						productArray = productArray.sort(function(a,b){
					
						if(sx==='thap_cao'){
							return a.price - b.price;
						}
						else if(sx==='cao_thap'){
							return b.price - a.price;
						}
						else 
						if(sx==='A_Z'){
							return a.brand.localeCompare(b.brand);
						}
						
						else 
						
						if(sx==='Z_A'){
							return b.brand.localeCompare(a.brand);
						}
						
						
				})
				}
				
					
				var s='';
				var sotrang=0,dem=0;
				for(var i=0;i<productArray.length;i++){
					s+='<div class="khung1">'+ '<ul class="list-person"><li>'+
								'<img src="'+productArray[i].img+'" + width="'+productArray[i].width+'" + height="'+productArray[i].height+'" + style="'+productArray[i].style+'">'+ '</li></ul>' +
								'<p>' + productArray[i].name + '</p>'+
								'<p style="color:#F00">' + currency(productArray[i].price) +'</p>' +
								'<button class="btn" onClick="showProductInfo('+productArray[i].productId+')">Chi tiết</button></div>';
					
				}
				
				var n='';
				document.getElementById('number').innerHTML=n;
				if(sx==='tuychon'){
					return showProduct();
				}
				document.getElementById('product').innerHTML=s;
				
			}
			
			
/*-------------------------------------------SEARCH SẢN PHẨM-------------------------------------------------------*/	
		function searchproduct(){
			//document.getElementById('submit').onclick=function(){
			var productArray = JSON.parse(localStorage.getItem('product'));
			var name = document.getElementById('searchproductname').value.toLowerCase();
			var s='';
				for(var i = 0; i < productArray.length; i++) {
					if(!name){
						return showProduct();					
					}
							if (productArray[i].name.toLowerCase().search(name) >=0) {
								s+='<div class="khung1">'+ '<ul class="list-person"><li>'+
									'<img src="'+productArray[i].img+'" + width="'+productArray[i].width+'" + height="'+productArray[i].height+'" + style="'+productArray[i].style+'">'+ '</li></ul>' +
									'<p>' + productArray[i].name + '</p>'+
									'<p style="color:#F00">' + currency(productArray[i].price) +'</p>' +
									'<button class="btn" onClick="showProductInfo('+productArray[i].productId+')">Chi tiết</button></div>';
							}
				}
				var n='';
				document.getElementById('number').innerHTML=n;
				document.getElementById('product').innerHTML=s;
			}
		//}
		
	
