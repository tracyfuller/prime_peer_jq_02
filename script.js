var propertyId;
var squareFeet;
var pricePerFoot;

$(document).ready(function(){

	$("#btn").on("click", function(){
		propertyId = randomNumber(1000, 9999);
		squareFeet = randomNumber(1000, 9999);
		pricePerFoot = randomNumber(1, 25);




		$('#ourTable').append("<div><tr><td>Property ID : " + propertyId + "</td><td>" + squareFeet + " Sq. Ft.</td><td>$" + pricePerFoot + " / sq.ft.</td><td> <button class='removeButton'>Remove</button></td></tr></div>");

		var el = $('#ourTable').children().last();
		el.hide().slideDown(1000);	

	});

	$('#ourTable').on('click', '.removeButton', function(){
		$(this).parents('div').remove();
	});



	function randomNumber(min, max) {
		return Math.floor(Math.random() * (1+ max - min) + min);
	}

});