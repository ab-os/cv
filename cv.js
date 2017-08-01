// Replace all hyphens in h3 with ndash
$("h3").each( function() {
	var text = $(this).text();
    text = text.replace("-", "&ndash;");
    $(this).html(text);
});

// Add icon to h3
$("h3").prepend('<i class="fa fa-angle-right"></i>&nbsp;');
