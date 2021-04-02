// Initiate Muuri Grid
const grid = new Muuri('.grid');

// Hold our selected filters
let filteredCategories = [];
let filteredTypes = [];

// Get All Filterable values
const categoryFilter = document.getElementById('category-filter');
const typeFilter = document.getElementById('type-filter');
const allCategories = Array.from(categoryFilter.querySelectorAll('option'));
const allTypes = Array.from(typeFilter.querySelectorAll('option'));

// Set Defaults
let selectedCategory = categoryFilter.value;
let selectedType = typeFilter.value;


// Events ------------------------------------------------------
// filter categories on select
const selects = document.querySelectorAll('select');
selects.forEach( item => {
	item.addEventListener('change', () => {
		filterGrid();
	}); 
});



// Filter grid ------------------------------------------------
function filterGrid() {
	
	// Get latest select values
	selectedCategory = categoryFilter.value;
	selectedType = typeFilter.value;
	
	// Reset filtered categories & types
	filteredCategories.splice(0,filteredCategories.length);
	filteredTypes.splice(0,filteredTypes.length);
	
	// Categories
	if( selectedCategory == 'all' ) {
		 allCategories.forEach( (item) => {
			 // exlude the actual 'all' value
			( item.value !="all" ? filteredCategories.push(item.value) : '' );
		});
	} else {
		filteredCategories.push(categoryFilter.value);
	}
	console.table(filteredCategories);
	
	// Types
	if( selectedType == 'all' ) {
		 allTypes.forEach(function(item) {
			 // exlude the actual 'all' value
			( item.value !="all" ? filteredTypes.push(item.value) : '' );
		});
	} else {
		filteredTypes.push(typeFilter.value);
	}
	console.table(filteredTypes);
	
	// Filter the grid
	// For each item in the grid array (which corresponds to a gallery item), check if the data-categories and data-types value match any of the values in the select field. If they do, return true
	grid.filter( (item) => {
		if (
				filteredCategories.some( (cat) => {
					return (item.getElement().dataset.category).indexOf(cat) >= 0;
				})
			&& // set this to 'or' if you want either option to be true. This way both must be true for the item to display
			filteredTypes.some( (typ) => {
					return (item.getElement().dataset.type).indexOf(typ) >= 0;
				})
			
		) {
			// return items that match both IFs
			return true;
		}
		
	});
} // end filter grid function



// Slim Select ---------------
new SlimSelect({
	select: '#category-filter',
	showSearch: false,
});

new SlimSelect({
	select: '#type-filter',
	showSearch: false,
});


// Refresh gallery item dimensions and do muuri refresh after last image has loaded (otherwise delayed loading of image will throw off muuri child element sizing, and items will overlap).
const galleryImages = document.querySelectorAll('.image-gallery__item img');
let galleryImagesCount = 0;
galleryImages.forEach( (item) => {
	item.addEventListener('load', function () {
  galleryImagesCount++;
		(galleryImagesCount == galleryImages.length ?grid.refreshItems().layout() : '' );
	});
});