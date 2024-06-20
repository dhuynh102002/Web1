$(document).ready(function(){
	
	$('#price-range-submit').hide();

	$("#min_price,#max_price").on('change', function () {

	  //$('#price-range-submit').show();

	  var min_price_range = parseInt($("#min_price").val());

	  var max_price_range = parseInt($("#max_price").val());

	  if (min_price_range > max_price_range) {
		$('#max_price').val(min_price_range);
	  }

	  $("#slider-range").slider({
		values: [min_price_range, max_price_range]
	  });
	  
	});


	$("#min_price,#max_price").on("paste keyup", function () {                                        

	  //$('#price-range-submit').show();

	  var min_price_range = parseInt($("#min_price").val());

	  var max_price_range = parseInt($("#max_price").val());
	  
	  if(min_price_range == max_price_range){

			max_price_range = min_price_range + 100;
			
			$("#min_price").val(min_price_range);		
			$("#max_price").val(max_price_range);
	  }

	  $("#slider-range").slider({
		values: [min_price_range, max_price_range]
	  });

	});

$('#price-range-submit').show(); /*show button search*/

	$(function () {
	  $("#slider-range").slider({
		range: true,
		orientation: "horizontal",
		min: 2790000,
		max: 38990000,
		values: [5000000, 30000000],
		step: 1,

		slide: function (event, ui) {
		  if (ui.values[0] == ui.values[1]) {
			  return false;
		  }
		  
		  $("#min_price").val(ui.values[0]);
		  $("#max_price").val(ui.values[1]);
		}
	  });

	  $("#min_price").val($("#slider-range").slider("values", 0));
	  $("#max_price").val($("#slider-range").slider("values", 1));

	});

	$("#price-range-submit").click(function () {

	 var min_price = $('#min_price').val();
	  var max_price = $('#max_price').val();
	  var s='';
	  //var sotrang=0,dem=0;
	  var productArray = JSON.parse(localStorage.getItem('product'));
	  	for(var i=0;i<productArray.length;i++){
			if(productArray[i].price>=min_price && productArray[i].price<=max_price){
			s+='<div class="khung1">'+ '<ul class="list-person"><li>'+
						'<img src="'+productArray[i].img+'" + width="'+productArray[i].width+'" + height="'+productArray[i].height+'" + style="'+productArray[i].style+'">'+ '</li></ul>' +
						'<p>' + productArray[i].name + '</p>'+
						'<p style="color:#F00">' + currency(productArray[i].price) +'</p>' +
						'<button class="btn" onClick="showProductInfo('+productArray[i].productId+')">Chi tiết</button></div>';
		}
					
						
		}
		var n='';
				document.getElementById('number').innerHTML=n;
		document.getElementById('product').innerHTML=s
		
	});

});