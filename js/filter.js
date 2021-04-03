//Filter Recruiters
$('select#category-filter').change(function () {
	var filter = $(this).val();
	filterList(filter);
});

// Recruiters filter function
function filterList(value) {
	var list = $(".cards .card");
	$(list).hide();
	if (value == "all") {
		$(".cards").find("article").each(function (i) {
			$(this).show();
		});
	} else {
		// *=" means that if a data-custom type contains multiple values, it will find them
		$(".cards").find("article[data-category*=" + value + "]").each(function (i) {
			$(this).show();
		});
	}
}