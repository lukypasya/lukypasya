const toggleBtn = document.getElementById('show');
	const daftarDiv = document.getElementById('daftarDiv');
	toggleBtn.addEventListener('click', function() {
    // Toggle class "slide-down" untuk animasi slide down
    // Toggle display none/block untuk munculkan/div
	    if (daftarDiv.style.display === 'block') {
	        daftarDiv.style.display = 'none';
	    } else {
	        daftarDiv.style.display = 'block';
	    }
	});