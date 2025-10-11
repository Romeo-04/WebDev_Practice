class buttonState {
	constructor(button){
		this.button = button;
	}
	toggle(){
		this.button.classList.toggle('active');
	}
	isActive(){
		
	}
}
function filterItems(category) {
	// Get the list container and its list items
	var list = document.getElementById('item-list');
	if (!list) return; // nothing to do
	var items = list.getElementsByTagName('li');

	// Loop through all items and toggle visibility based on class
	for (var i = 0; i < items.length; i++) {
		var li = items[i];
		// If category is 'all' or item has the matching class, show it; otherwise hide it
		if (category === 'all' || li.classList.contains(category)) {
			li.style.display = '';
		} else {
			li.style.display = 'none';
		}
	}
}
