var Ran = 'Ran'; 
(function () { 
	var Ran = 'Ran';
	console.log(Ran); 
	console.log(window.Ran); 

	const mockDatabase = [
		{ _id: '2500', name: 'Love Yourself: Tear', published: true},
		{ _id: '2000', name: 'The Chaos Chapter: Freeze', published: true},
		{ _id: '2500', name: 'BTS, The Best', published: false},
		{ _id: '2000', name: 'The Dream Chapter: Eterinty', published: false},
		{ _id: '2500', name: 'Wings', published: true},
		{ _id: '1500', name: 'The War', published: false},
		{ _id: '1500', name: 'Obsession', published: true},
		{ _id: '1500', name: 'XOXO', published: false},
		{ _id: '1000', name: 'In Life', published: true},
		{ _id: '1000', name: 'No Easy', published: false},
	];

	function renderList (results) {
		var tableBody = document.querySelector('#results-table tbody');

		tableBody.innerHTML = '';
		var tableRows = results.map(function (result, index) {
			return '<tr><td>' + result.name +'</td></tr>';
		});
		tableRows.forEach(function (row) {
			tableBody.innerHTML += row; 
		});
		var Ran = 'renderList';
		console.log(Ran); 
	}

	renderList(mockDatabase);

	function orderBy(sV) {
		
		var sR = (sV === 'name') ? 
			mockDatabase.sort(function (x, y) { 
				var nx = x.name.toUpperCase(); 
				var ny = y.name.toUpperCase(); 	
				if (nx < ny) {
				    return -1;
				}
				if (nx > ny) {
				    return 1;
				}
			}) : 
			mockDatabase.sort(function (l, m) {  
				return l[sV] - m[sV];
			});
		renderList(sR);
	}
	document.querySelector('#orderBy').addEventListener('change', function(event){
		orderBy(event.target.value);
	});

	function togglePublished(sP) {
		var fR = mockDatabase.filter(function (result) {
			return sP || result.published;
		});
		renderList(fR);
	}
	
	document.querySelector('#published').addEventListener('change', function(event){
		var value = event.target.value === 'true';
		togglePublished(value);
	});



})(); 