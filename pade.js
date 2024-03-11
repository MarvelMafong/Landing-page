document.getElementById('searchInput').addEventListener('input', function() {
    var searchValue = this.value.toLowerCase();
    var searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';

    // Perform search based on searchValue
    var itemsToSearch = ['Item 1', 'Item 2', 'Item 3']; // Example data
    itemsToSearch.forEach(function(item) {
        if (item.toLowerCase().indexOf(searchValue) !== -1) {
            var li = document.createElement('li');
            li.textContent = item;
            searchResults.appendChild(li);
        }
    });
});
