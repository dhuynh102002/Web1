// JavaScript Document
function currency(num) {

  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' VND';
}
/*ADMIN*/
function hiadmin(){
	var user = JSON.parse(localStorage.getItem('userlogin'));
	document.getElementById('hiadmin').innerHTML= /* user.fullname */ '<button onclick="logout()"><i class="fas fa-power-off"></i>Đăng xuất</button>';
}
<!--------------------------------------------tìm kiếm tên khách hàng trong danh sách đơn hàng-------->
function searchBill(){
	var billArray = JSON.parse(localStorage.getItem('bill'));
	var status =document.getElementById('statussearch').value; //gán value của khung trạng thái cho status
	var name =document.getElementById('name').value.toLowerCase();
	var billArrayTemp = [];
	
	var s='<th>NGÀY</th><th>KHÁCH HÀNG</th><th>GIÁ</th><th>TRẠNG THÁI</th>';
	for (var i = 0; i < billArray.length; i++) {
		if(billArray[i].customer.fullname.toLowerCase().search(name) < 0 ){
			s+='';
		}
		else if (status=='Tất cả'){
			s+='<tr onClick="showinfobill('+billArray[i].id+')">'+
						'<td>'+billArray[i].date+'</td>'+
						'<td>'+billArray[i].customer.fullname+'</td>'+
						'<td>'+currency(billArray[i].totalprice)+'</td>';
						if(billArray[i].status == 'Chưa xử lý')
							s+='<td style="color: red">'+billArray[i].status+'</td>' + '</tr>';
						else
							s+='<td style="color: blue">'+billArray[i].status+'</td>' + '</tr>';
					
		}
	}
		
	//kiểm tra mảng billArray những phần tử nào có trạng thái giống với value của khung trạng thái và tìm kiếm theo name
	for (var i = 0; i < billArray.length; i++) {
		if(status==billArray[i].status && billArray[i].customer.fullname.toLowerCase().search(name) >= 0) {
			billArrayTemp.push(billArray[i]); //đẩy những phần tử của billArray cho billArrayTemp
		}
		
	}
	//var s='<th>NGÀY</th><th>KHÁCH HÀNG</th><th>GIÁ</th><th>TRẠNG THÁI</th>';
	for(var i=0;i<billArrayTemp.length;i++){
		if(billArrayTemp[i].status=='Chưa xử lý'){
			s+='<tr onClick="showinfobill('+billArrayTemp[i].id+')">'+
						'<td>'+billArrayTemp[i].date+'</td>'+
						'<td>'+billArrayTemp[i].customer.fullname+'</td>'+
						'<td>'+currency(billArrayTemp[i].totalprice)+'</td>'+
						'<td style="color: red">'+billArrayTemp[i].status+'</td>'+
					'</tr>';
		}
		else {
			s+='<tr onClick="showinfobill('+billArrayTemp[i].id+')">'+
						'<td>'+billArrayTemp[i].date+'</td>'+
						'<td>'+billArrayTemp[i].customer.fullname+'</td>'+
						'<td>'+currency(billArrayTemp[i].totalprice)+'</td>'+
						'<td style="color: blue">'+billArrayTemp[i].status+'</td>'+
					'</tr>';
		}
	}
	
	document.getElementById('billlist').innerHTML=s;
}
function changeStatus(checkbox,id){
	var billArray = JSON.parse(localStorage.getItem('bill'));
	if (checkbox.checked==true) {
		for (var i = 0; i < billArray.length; i++) {
			if(billArray[i].id==id){
				billArray[i].status = 'Đã xử lý';
			}
		}
		document.getElementById('status').innerHTML="Đã xử lý";
		document.getElementById('status').style.color = 'blue';
	}else {
		for (var i = 0; i < billArray.length; i++) {
			if(billArray[i].id==id){
				billArray[i].status = 'Chưa xử lý';
			}
		}
		document.getElementById('status').innerHTML="Chưa xử lý";
		document.getElementById('status').style.color = 'red';
	}
	localStorage.setItem('bill',JSON.stringify(billArray));
	showbilllist();
	
}
function showUserList(){
	if(localStorage.getItem('user')===null){
		return false;
	}
	var userArray = JSON.parse(localStorage.getItem('user'));
	var tr='<tr><th>STT</th><th>HỌ TÊN KH</th><th>TÊN ĐĂNG NHẬP</th><th>NGÀY ĐĂNG KÝ</th><th>Xóa</th></tr>';
	for(var i=1; i<userArray.length;i++){
		tr+='<tr><td>'+i+'</td><td>'+userArray[i].fullname+'</td><td>'+userArray[i].username+'</td><td>'+userArray[i].datesignup+'</td><td><button class="delete" onClick="deleteuser(\''+userArray[i].username+'\')"><i class="fas fa-trash-alt"></i></button></td></tr>';
	}
	document.getElementById('userlist').innerHTML=tr;
}
function deleteuser(usernamedelete){
	var userArray = JSON.parse(localStorage.getItem('user'));
	for(var i=0;i<userArray.length;i++){
		if(userArray[i].username == usernamedelete){
			if(confirm('Bạn có muốn xóa tài khoản này?')){
				userArray.splice(i, 1);
			}
		}
	}
localStorage.setItem('user',JSON.stringify(userArray));
	showUserList();
}
function searchproduct(){
	var productArray = JSON.parse(localStorage.getItem('product'));
	var name = document.getElementById('searchproductname').value.toLowerCase();
	var brand = document.getElementById('searchproductbrand').value.toLowerCase();
	var s='<tr><th>#ID</th><th>Ảnh</th><th>TÊN SẢN PHẨM</th><th>THƯƠNG HIỆU</th><th>GIÁ</th><th></th></tr>';
		if (brand=='all') {
			if(!name){
				showProductList(0);
			}
			else {
				for(var i = 0; i < productArray.length; i++) {
					if (productArray[i].name.toLowerCase().search(name) >=0) {
						s+='<tr>'+
								'<td>'+productArray[i].productId+'</td>'+
								'<td><img src="../'+productArray[i].img+'"></td>'+
								'<td>'+productArray[i].name+'</td>'+
								'<td>'+productArray[i].brand+'</td>'+
								'<td>'+currency(productArray[i].price)+'</td>'+
								'<td>'+
									'<button class="delete" onClick="deleteproduct(\''+productArray[i].productId+'\')"><i class="fas fa-trash-alt"></i></div>'+
									'<button class="change" onClick="showchangeproductbox(\''+productArray[i].productId+'\')"><i class="far fa-edit"></i></div>'+
									'</td>'+
							'</tr>';
					}
				}
				document.getElementById('productlist').innerHTML=s;	
			}
		}
		else{
			for(var i = 0; i < productArray.length; i++) {
						if (productArray[i].name.toLowerCase().search(name)  >=0  && productArray[i].brand==brand) {
							s+='<tr>'+
									'<td>'+productArray[i].productId+'</td>'+
									'<td><img src="../'+productArray[i].img+'"></td>'+
									'<td>'+productArray[i].name+'</td>'+
									'<td>'+productArray[i].brand+'</td>'+
									'<td>'+currency(productArray[i].price)+'</td>'+
									'<td>'+
										'<button class="delete" onClick="deleteproduct(\''+productArray[i].productId+'\')"><i class="fas fa-trash-alt"></i></div>'+
										'<button class="change" onClick="showchangeproductbox(\''+productArray[i].productId+'\')"><i class="far fa-edit"></i></div>'+
										'</td>'+
								'</tr>';
						}
			}
			document.getElementById('productlist').innerHTML=s;
		}
}
function showProductList(vitri){

	var productArray = JSON.parse(localStorage.getItem('product'));
	var s='<tr><th>#ID</th><th>Ảnh</th><th>TÊN SẢN PHẨM</th><th>THƯƠNG HIỆU</th><th>GIÁ</th><th></th></tr>';
	var dem = 0;
	for(var i=vitri;i<productArray.length;i++){
		s+='<tr>'+
				'<td>'+productArray[i].productId+'</td>'+
				'<td><img src="../'+productArray[i].img+'"></td>'+
				'<td>'+productArray[i].name+'</td>'+
				'<td>'+productArray[i].brand.toUpperCase()+'</td>'+
				'<td>'+currency(productArray[i].price)+'</td>'+
				'<td>'+
					'<button class="delete" onClick="deleteproduct(\''+productArray[i].productId+'\')"><i class="fas fa-trash-alt"></i></div>'+
					'<button class="change" onClick="showchangeproductbox(\''+productArray[i].productId+'\')"><i class="far fa-edit"></i></div>'+
					'</td>'+
			'</tr>';
		dem++;
		if(dem==10){
			break;
		}
	}
	document.getElementById('productlist').innerHTML=s;
	setPagination();
}
function deleteproduct(productiddelete){
var productArray = JSON.parse(localStorage.getItem('product'));
	var vitri;
	for(var i=0;i<productArray.length;i++){
		if(productArray[i].productId == productiddelete){
			if(confirm('Bạn có muốn xóa sản phẩm này?')){
				productArray.splice(i, 1);
			}
		vitri=(Math.floor(i/10)*10);
		}
	}
	localStorage.setItem('product',JSON.stringify(productArray));
	showProductList(vitri);
}
function setPagination(){
	var productArray = JSON.parse(localStorage.getItem('product'));
	var sotrang=Math.ceil(productArray.length/10);
		var button='';
		for(var i = 1;i<=sotrang;i++){
			vitri=(i-1)*10;
			button += '<button class="pageNumber" onClick="showProductList('+vitri+')">'+i+'</button>';
		}
	document.getElementById('pagination').innerHTML = button;
}
function showchangeproductbox(productid){ //sua 
	document.getElementById('modal2').style.display = 'block';
	var productArray = JSON.parse(localStorage.getItem('product'));
	for(var i=0;i<productArray.length;i++){
		if(productArray[i].productId == productid){
			document.getElementById('imgbefore').src="../"+productArray[i].img;
			document.getElementById('imgafter').src="../images/product/anhtam1.jpg";
			document.getElementById('name').value=productArray[i].name;
			document.getElementById('price').value=productArray[i].price;
			document.getElementById('save').setAttribute('onClick', 'changeproduct('+productArray[i].productId+')');
		}
	}
}
function changeproduct(productid){
	document.getElementById('modal2').style.display = 'none';
	var productArray = JSON.parse(localStorage.getItem('product'));
	var vitri;
	for(var i=0;i<productArray.length;i++){
		if(productArray[i].productId == productid){
			productArray[i].img='images/product/' + imgchange; //gán trên ảnh sau khi thay đổi vào
			productArray[i].name=document.getElementById('name').value;
			productArray[i].price=document.getElementById('price').value;
			vitri = (Math.floor(i/10))*10;
		}
	}
	localStorage.setItem('product', JSON.stringify(productArray));
	showProductList(vitri);
}
var imgchange;
function changeimg(input){ //hàm khi click chọn lại file ảnh (chỗ form sửa ảnh) - Bước 2
    var reader = new FileReader();
    reader.onload = function (e) {
        document.getElementById('imgafter').src = e.target.result; //ảnh sau khi thay đổi sẽ gán vào src của imgafter
    };
    reader.readAsDataURL(input.files[0]);
	imgchange=input.files[0].name; //lấy tên ảnh
	console.log(imgchange);
}
function xoaloadimg(){
	document.getElementById('imgadd').src = "../images/product/anhtam1.jpg";
	imgadd="";
}
var imgadd;
function changeimgadd(input){
    var reader = new FileReader();
    reader.onload = function (e) {
        document.getElementById('imgadd').src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
	imgadd=input.files[0].name; //lấy tên ảnh khi thay đổi
}
function closechangebox(){

	document.getElementById('modal1').style.display = 'none';
}
function closechangebox(){

	document.getElementById('modal2').style.display = 'none';
}
var count = 1055;
function addProduct(){
	var productArray = JSON.parse(localStorage.getItem('product'));
	var productid = count++;
	var productname = document.getElementById('productname');
	var brand = document.getElementById('brand');
	var price = document.getElementById('productprice');
	if(!brand.value || !productname.value || !price.value){
		customAlert('Bạn chưa nhập đủ thông tin sản phẩm','warning');
		return false;
	   }
	if(isNaN(Number(price.value))){
customAlert('Giá không hợp lệ','warning');
		return false;
	   }
	if(!imgadd || imgadd==null){  //nếu không có tên ảnh thì lấy ảnh mặc định
	var producttemp = {productId: productid, brand: brand.value, img:'images/product/anhtam1.jpg',width:'90%',height:'270px',style:'text-align:center; margin-top:20px', name: productname.value, price: price.value};
	}
	else{
		var producttemp = {productId: productid, brand: brand.value, img:'images/product/' + imgadd,width:'90%',height:'270px',style:'text-align:center; margin-top:20px', name: productname.value, price: price.value};
	}
	
	productArray.unshift(producttemp);
	localStorage.setItem('product',JSON.stringify(productArray));
	showProductList(0);
	customAlert('Thêm sản phẩm thành công','success');
}
/*END ADMIN*/
/*CUSTOM ALERT BOX*/
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
<!--------------------------------------------------Đơn hàng, Khách hàng------------------------------------------------------------->
/*function hienthithongtin(obj)
{
	a=obj;
	console.log(a.id);
	switch(a.id)
	{
		case 'dh':
		{	
			document.getElementById("main").innerHTML='<div id="top"><p>Chào username</p><div id="hiadmin"></div></div><div id="content"><div id="danhsachsp"><div id="bangsp"><h1>DANH SÁCH ĐƠN HÀNG</h1><table id="billlist"><tr></tr></table></div></div><div id="right"><div class="subsection"><h1>TÌM KIẾM</h1><form><label for="name">Tên khách hàng</label><input type="text" id="name"><label for="date">Ngày</label><input type="date" id="date"><label for="status">Trạng thái</label><select id="statussearch"><option value="Tất cả">Tất cả</option><option value="Chưa xử lý">Chưa xử lý</option><option value="Đã xử lý">Đã xử lý</option></select><button type="button" onclick="searchBill()">Tìm</button></form></div></div></div>';
			break;
			
		}	
		case 'kh': 
		{
			document.getElementById("main").innerHTML='<div id="top"><p>Chào username</p><div id="hiadmin"></div><div id="avatar"></div></div><div id="content"><div id="danhsachsp"><div id="bangsp"><h1>DANH SÁCH KHÁCH HÀNG</h1><table id="userlist"><tr><th>STT</th><th>HỌ TÊN KH</th><th>TÊN ĐĂNG NHẬP</th><th>NGÀY ĐĂNG KÝ</th><th>Xóa</th></tr></table></div></div><div id="right"><div class="subsection"><h1>TÌM KIẾM KHÁCH HÀNG</h1><form><label for="username">Tên đăng nhập</label><input type="text" id="username"><label for="fullname">Tên khách hàng</label><input type="text" id="fullname"><label for="datesign">Ngày đăng ký</label><input type="text" id="datesign"><button type="reset">Xóa</button><button type="button">Tìm</button></form></div></div></div>';
			break;
		}
		
		case 'kh': 
		{
			document.getElementById("main").innerHTML='<div id="top"><p>Chào username</p><div id="hiadmin"></div><div id="avatar"></div></div>';
			break;
		}
		default:
		{
			document.getElementById("main").innerHTML='';
			break;
		}
	}
	
}
*/
<!--------------------------------------------tìm kiếm tên khách hàng-------->
function searchUser(){
		document.getElementById('search').onclick = function() {
			var userArrayTemp = JSON.parse(localStorage.getItem('user'));
			//loại bỏ admin (trong mảng user thì admin lad vị trí 0) vì hàm đang search khách hàng
			var userArray=[]; //mảng chỉ chứa khách hàng
			for (var i = 1; i < userArrayTemp.length; i++) {
				userArray.push(userArrayTemp[i]); //đẩy từng phần tử của userArrayTemp cho userArray
			}
			var username =document.getElementById('username').value.toLowerCase();
			var name =document.getElementById('fullname').value.toLowerCase();
			var date =document.getElementById('datesign').value.toLowerCase();
			var userTemp=[];//mảng kết quả
			var tr='<tr><th>STT</th><th>HỌ TÊN KH</th><th>TÊN ĐĂNG NHẬP</th><th>NGÀY ĐĂNG KÝ</th><th>Xóa</th></tr>';
			if (!name&&!date) { //search theo username: tên đăng nhập
				for (var i = 0; i < userArray.length; i++) {
					if(userArray[i].username.toLowerCase().search(username) >= 0) {
						userTemp.push(userArray[i]); //đẩy những phần tử của billArray cho billArrayTemp
					}
				}
				for(var i=0; i<userTemp.length;i++){
					tr+='<tr><td>'+i+'</td><td>'+userTemp[i].fullname+'</td><td>'+userTemp[i].username+'</td><td>'+userTemp[i].datesignup+'</td><td><button class="delete" onClick="deleteuser(\''+userTemp[i].username+'\')"><i class="fas fa-trash-alt"></i></button></td></tr>';
				}
								document.getElementById('userlist').innerHTML=tr;
			}
			else if(!username && !date){ //search theo fullname: tên khách hàng
				for (var i = 0; i < userArray.length; i++) {
					if(userArray[i].fullname.toLowerCase().search(name) >= 0) {
						userTemp.push(userArray[i]); //đẩy những phần tử của billArray cho billArrayTemp
					}
				}
				for(var i=0; i<userTemp.length;i++){
					tr+='<tr><td>'+i+'</td><td>'+userTemp[i].fullname+'</td><td>'+userTemp[i].username+'</td><td>'+userTemp[i].datesignup+'</td><td><button class="delete" onClick="deleteuser(\''+userTemp[i].username+'\')"><i class="fas fa-trash-alt"></i></button></td></tr>';
				}
				document.getElementById('userlist').innerHTML=tr;
			
			}
			else if(!date){ //search theo username && fullname: tên đăng nhập && tên khách hàng 
				for (var i = 0; i < userArray.length; i++) {
					if(userArray[i].username.toLowerCase().search(username) >= 0 && userArray[i].fullname.toLowerCase().search(name) >= 0) {
						userTemp.push(userArray[i]); //đẩy những phần tử của billArray cho billArrayTemp
					}
				}
				for(var i=0; i<userTemp.length;i++){
					tr+='<tr><td>'+i+'</td><td>'+userTemp[i].fullname+'</td><td>'+userTemp[i].username+'</td><td>'+userTemp[i].datesignup+'</td><td><button class="delete" onClick="deleteuser(\''+userTemp[i].username+'\')"><i class="fas fa-trash-alt"></i></button></td></tr>';
				}
				document.getElementById('userlist').innerHTML=tr;
			}
			else if(!username && !name){ //search theo datesign: ngày tháng năm
				for (var i = 0; i < userArray.length; i++) {
					if(userArray[i].datesign.toLowerCase().search(date) >= 0) {
						userTemp.push(userArray[i]); //đẩy những phần tử của billArray cho billArrayTemp
					}
				}
				for(var i=0; i<userTemp.length;i++){
					tr+='<tr><td>'+i+'</td><td>'+userTemp[i].fullname+'</td><td>'+userTemp[i].username+'</td><td>'+userTemp[i].datesignup+'</td><td><button class="delete" onClick="deleteuser(\''+userTemp[i].username+'\')"><i class="fas fa-trash-alt"></i></button></td></tr>';
				}
				document.getElementById('userlist').innerHTML=tr;
			
			}
	}
	document.getElementById('delete').onclick = function() {
			return (showUserList());
		}

}
function logout(){
	localStorage.removeItem('userlogin');
	localStorage.removeItem('cart');
	location.href='../index.html';
}
function showbilllist(){
	if(localStorage.getItem('bill')===null){
		var s='<tr><th>NGÀY</th><th>KHÁCH HÀNG</th><th>GIÁ</th><th>TRẠNG THÁI</th></tr>'+
			'<tr><td colspan=4>Không có đơn hàng nào</td></tr>';
		document.getElementById('billlist').innerHTML=s;
		return false;
	}
	var s='<tr><th>NGÀY</th><th>KHÁCH HÀNG</th><th>GIÁ</th><th>TRẠNG THÁI</th></tr>';
	var billArray = JSON.parse(localStorage.getItem('bill'));
	for(var i=0;i<billArray.length;i++){
		if(billArray[i].status=='Chưa xử lý'){
			s+='<tr onClick="showinfobill('+billArray[i].id+')">'+
						'<td>'+billArray[i].date+'</td>'+
						'<td>'+billArray[i].customer.fullname+'</td>'+
						'<td>'+currency(billArray[i].totalprice)+'</td>'+
						'<td style="color: red">'+billArray[i].status+'</td>'+
					'</tr>';
		}
		else {
			s+='<tr onClick="showinfobill('+billArray[i].id+')">'+
						'<td>'+billArray[i].date+'</td>'+
						'<td>'+billArray[i].customer.fullname+'</td>'+
						'<td>'+currency(billArray[i].totalprice)+'</td>'+
						'<td style="color: blue">'+billArray[i].status+'</td>'+
					'</tr>';
		}
	}
	document.getElementById('billlist').innerHTML=s;
}
function showinfobill(id){ //show thông tin bill theo trạng thái
	document.getElementById('modal1').style.display = 'block';
	var billArray = JSON.parse(localStorage.getItem('bill'));
	var s='<button class="close" onClick="closeinfobill()">&times;</button>';
	for (var i = 0; i < billArray.length; i++) {
		if(billArray[i].id==id){
			s +='<h4>Thông tin đơn hàng:</h4>'+
			'<p>'+billArray[i].info+'</p>'+
			'<h4>Ngày tạo đơn hàng:</h4>'+
			'<p>'+billArray[i].date+'</p>'+
			'<h4>Tên khách hàng:</h4>'+
			'<p>'+billArray[i].customer.fullname+'</p>'+
			'<h4>Địa chỉ:</h4>'+
			'<p>'+billArray[i].customer.address+'</p>'+
			'<h4>Số điện thoại liên lạc:</h4>'+
			'<p>'+billArray[i].customer.phone+'</p>'+
			'<h4>Tổng giá tiền:</h4>'+
			'<p>'+currency(billArray[i].totalprice)+'</p>';
			if (billArray[i].status=="Chưa xử lý") {
				s+='<h4>Tình trạng:</h4>'+
					'<div><span id="status" style="color:red">'+billArray[i].status+'</span><label><input type="checkbox" onchange="changeStatus(this,'+billArray[i].id+')" ><span class="slider"></span></label></div>';
			}
			else {
				s+='<h4>Tình trạng:</h4>'+
					'<div><span id="status" style="color:blue">'+billArray[i].status+'</span><label><input type="checkbox" checked onchange="changeStatus(this,'+billArray[i].id+')" ><span class="slider"></span></label></div>';
			}
			s+='<button class="printbtn" onClick="window.print()">In đơn hàng</button>';
		}
	}
document.getElementById('info').innerHTML = s;
}
function closeinfobill(){
	
	document.getElementById('modal1').style.display = 'none';
}