// Replace all hyphens in h3 with ndash
$(".cv-section > h3 > .date").each( function() {
	var text = $(this).text();
    text = text.replace("-", "&ndash;");
    $(this).html(text);
});

// Format h3
$(".cv-section > h3").prepend('<i class="fa fa-angle-right"></i>&nbsp;');
$(".cv-section > h3 > .date").addClass("flex-no-shrink right-align italic");

// Add icon to h2, expect for the no-icon
$(".cv-section > h2").not(".no-icon").prepend('<i class="fa fa-sticky-note margin-right"></i>&nbsp;');

// Get the language from the HTML div
var lang = document.documentElement.lang;
// Hide all div with other language
$("*").not(":lang(" + lang + ")").hide();

// If English replace the date months
if(lang == "en") {
	$(".cv-section > h3 > .date").each( function() {
		var text = $(this).text();
		text = text.replace("mei", "may");
		text = text.replace("juni", "june");
		text = text.replace("juli", "july");
		text = text.replace("okt", "oct");
		$(this).html(text);
	});
}