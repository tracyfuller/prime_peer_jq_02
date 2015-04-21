function generateProperty(){
	var propertyId = randomNumber(1000, 9999);
	var squareFeet = randomNumber(1000, 9999);
	var pricePerFoot = randomNumber(5, 25);

	var el = "<div class = 'row'><div class='propertyCell'>Property ID : " + propertyId + "</div><div class='feetCell'>" + squareFeet + " Sq. Ft.</div><div class='priceCell'>$" + pricePerFoot + " / sq.ft.</div><div class='buttonCell'> <button class='removeButton'>Remove</button></div></div>";

	$("#ourTable").append(el);

}

function randomNumber(min, max) {
		return Math.floor(Math.random() * (1+ max - min) + min);
	}

$(document).ready(function(){

	$("#btn").on("click", function(){
		//using divs instead of tables made the code work. tables are old school, but they're still used so be aware whether or not jquery will break a table
		generateProperty
		var element = $('#ourTable').children().last();
		element.hide().slideDown(1000);	
		//.hide has to happen first, otherwise slideDown wouldn't work. 
	});

	$('#ourTable').on('click', '.removeButton', function(){
		//note that I couldn't use .hide() here, because it broke the toggle. It tried to show something hidden which is jumpy and unpleasant
		$(this).parents('.row').slideToggle(1000, function(){
			$(this).remove();
		});
	});
	//advanced selector: .newPropert button <  notice that there's a space
});

//TODO:
//find something cool in jquery documentation and come ready to talk about it. pick something that you understand, because you will be asked questions
//also, wrap up this project
