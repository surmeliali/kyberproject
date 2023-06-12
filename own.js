
// Date: January 2019

// author: Ali Surmeli
// file_name: own.css
// author URL: http://github.com/surmeliali

function openPage(pageName, elmnt, color) {
	// Hide all elements with class="tabcontent" by default */
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
  
	// Remove the background color of all tablinks/buttons
	tablinks = document.getElementsByClassName("tablink");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].style.backgroundColor = "";
	}
  
	// Show the specific tab content
	document.getElementById(pageName).style.display = "block";
  
	// Add the specific color to the button used to open the tab content
	elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
  
  
  
  $(document).ready(function() {
  
  
  
	  var numItems = $('li.tablink').length;
  
  
				if (numItems == 12){
					  $("li.tablink").width('8.3%');
				  }
				if (numItems == 11){
					  $("li.tablink").width('9%');
				  }
				if (numItems == 10){
					  $("li.tablink").width('10%');
				  }
				if (numItems == 9){
					  $("li.tablink").width('11.1%');
				  }
				if (numItems == 8){
					  $("li.tablink").width('12.5%');
				  }
				if (numItems == 7){
					  $("li.tablink").width('14.2%');
				  }
				if (numItems == 6){
					  $("li.tablink").width('16.666666666666667%');
				  }
				if (numItems == 5){
					  $("li.tablink").width('20%');
				  }
				if (numItems == 4){
					  $("li.tablink").width('25%');
				  }
				if (numItems == 3){
					  $("tablink").width('33.3%');
				  }
				if (numItems == 2){
					  $("li.tablink").width('50%');
				  }
  
  
  
  
		  });
  
  $(window).load(function() {
  
	$('.tablinks').each(function() {
  
	  var highestBox = 0;
	  $('.tablink a', this).each(function() {
  
		if ($(this).height() > highestBox)
		  highestBox = $(this).height();
	  });
  
	  $('.tablink a', this).height(highestBox);
  
	});
  });
  