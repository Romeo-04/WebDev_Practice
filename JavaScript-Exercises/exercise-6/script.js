function filterItems(items, query) {
    const filteredItems = items.filter(item => item.classList.contains(query));
}