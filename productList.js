const mockDatabase = [
    { _id: '588', name: 'Love Yourself: Tear', published: true },
    { _id: '511', name: 'The Chaos Chapter: Freeze', published: true },
    { _id: '761', name: 'BTS, The Best', published: false },
    { _id: '580', name: 'The Dream Chapter: Eterinty', published: false },
    { _id: '006', name: 'Wings', published: true },
    { _id: '787', name: 'The War', published: false },
    { _id: '179', name: 'Obsession', published: true },
    { _id: '633', name: 'XOXO', published: false },
    { _id: '940', name: 'In Life', published: true },
    { _id: '831', name: 'No Easy', published: false},
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
    .addEventListener('change', (event) => {
        // event.target.value contains current value of form input 
        const value = event.target.value == 'true'; 
        togglePublished(value); 
    });