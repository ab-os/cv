// Replace all hyphens in .date with &ndash;
$(".date").each( function() {
	var text = $(this).text();
    text = text.replace("-", "&ndash;");
    $(this).html(text);
});

// Attach arrow before each h3
$("section > h3").prepend('<i class="fa fa-angle-right"></i>&nbsp;');

// Don't shrink date divs
$(".date").addClass("flex-no-shrink");

// Add icon to h2, expect for the no-icon
$("section > h2").not(".no-icon").prepend('<i class="fa fa-sticky-note margin-right"></i>&nbsp;');

