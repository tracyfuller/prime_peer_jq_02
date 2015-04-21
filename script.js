var propertyId;
var squareFeet;
var pricePerFoot;

$(document).ready(function(){

	$("#btn").on("click", function(){
		propertyId = randomNumber(1000, 9999);
		squareFeet = randomNumber(1000, 9999);
		pricePerFoot = randomNumber(1, 25);




		$('#ourTable').append("<div class = 'row'><div class='propertyCell'>Property ID : " + propertyId + "</div><div class='feetCell'>" + squareFeet + " Sq. Ft.</div><div class='priceCell'>$" + pricePerFoot + " / sq.ft.</div><div class='buttonCell'> <button class='removeButton'>Remove</button></div></div>");

		var el = $('#ourTable').children().last();
		el.hide().slideDown(1000);	

	});

	$('#ourTable').on('click', '.removeButton', function(){
		$(this).parents('.row').remove();
	});



	function randomNumber(min, max) {
		return Math.floor(Math.random() * (1+ max - min) + min);
	}

});