var counter = 0;
console.log('".message-'+counter+'"');


function myPosition(counter) {
	console.log(counter);
    //ar DivPosition = document.getElementById("messagePosition");
    //var x = $('.message-'+counter+'').offset().top;
    //var y= $('.chatCont').offset().top;
    //console.log(x+" "+y);
      //if(x>y){
	  //$('.message-'+counter+'').animate({  scrollTop: 308}, 100);
	  $('.message-'+counter+ '>' + '.suggestion').animate({ scrollTop: "#chatCont" }, "fast");
		counter2++;
	 	console.log(counter2+"my counter2");
	//}
 //else{
	 //	console.log("count");
	// }
}
});/



				$(messageVar).appendTo('#result_div');
				myPosition(counter);
				counter++;


					 $(this).parent().parent().next().addClass('-'+counter+ '');
		console.log($(this).parent().parent().next().next().next().next().animate({ scrollTop: $('.chatCont').offset().top}, "fast"));
		$(this).parent().parent().next().next().next().next().animate({ scrollTop: $('.chatCont').offset().top}, "fast");


		var elem = $(this).parent().parent();
	$(elem).addClass('-'+counter);
	console.log(elem);
    scrollToBottomOfResults(elem);
    counter++;

    //var terminalEle = document.getElementsByClassName('.userEnteredText -'+counter+''); 
		//terminalResultsDiv.scrollTop = terminalEles.ScrollHeight;
		var terminalEles = elem;
		console.log(terminalEles.offset().top);
		terminalResultsDiv.scrollTop = terminalEles.offset().top;
		//myPosition();