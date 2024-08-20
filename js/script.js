document.addEventListener('DOMContentLoaded', function() {
    // Handle dynamic content loading
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Get the page to load
            const page = this.getAttribute('data-page');
            let pageUrl = '';

            if (page === 'صادر') {
                pageUrl = 'صادر/content.html';
            } else if (page === 'الموارد البشرية') {
                pageUrl = 'الموارد البشرية/content.html';
            }

            // Load the content dynamically
            fetch(pageUrl)
                .then(response => response.text())
                .then(data => {
                    document.querySelector('.page-content').innerHTML = data;
                });
        });
    });

    // Handle sidebar toggle
    document.getElementById('toggleSidebar').addEventListener('click', function() {
        const sidebar = document.getElementById('sidebar');
        const dropImgs = document.querySelectorAll('.unvisable');
        sidebar.classList.toggle('collapsed');
    
        dropImgs.forEach(function(img) {
            img.style.display = sidebar.classList.contains('collapsed') ? 'none' : 'flex';
        });
    });

    // Handle .main click to add 'active' class
    const mains = document.querySelectorAll('.links');

    mains.forEach(main => {
        main.addEventListener('click', function() {
            mains.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const transactionItems = document.querySelectorAll('.transaction-item');

    transactionItems.forEach(item => {
        item.addEventListener('click', () => {
 
            transactionItems.forEach(i => i.classList.remove('active'));
 
            item.classList.add('active');
        });
    });
});
