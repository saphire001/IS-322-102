const mockDatabase = [
    { _id: '123', name: 'Article 1', published: true },
    { _id: '583', name: 'Article 2', published: true },
    { _id: '954', name: 'Article 3', published: false },
    { _id: '384', name: 'Article 4', published: false },
    { _id: '183', name: 'Article 5', published: true },
    { _id: '007', name: 'Article 6', published: false },
    { _id: '304', name: 'Article 7', published: true },
    { _id: '729', name: 'Article 8', published: false },
    { _id: '734', name: 'Article 9', published: true },
];

//Renders current selection of the products into DOM
function renderList (results){
    const productDiv = document.querySelector('#products');

    // Clear out inner HTML to get rid of any older results 
    productDiv.innerHTML = ''; 
    // Map weach database record to a string containing the HTML for it's record
    const products = results.map((result, number) => {
        return '<div>' + result.name + '</div>';
    });
    // Set the contents of the list to the new set of render HTML products
    products.forEach((item) => {
      productDiv.innerHTML += item;  
    });  
}

// Call Renderlist with initial database for initial list of products
renderList(mockDatabase); 

function togglePublished (showPublished) {
    const filteredResults = mockDatabase.filter((result) => {
        return showPublished || result.published;
    });
    renderList(filteredResults); 
}

document.querySelector('#published')
    .addEventListener('cahnge', (event) => {
        // event.target.value contains current value of form input 
        const value = event.target.value == 'true'; 
        togglePublished(value); 
    });