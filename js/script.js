document.addEventListener('DOMContentLoaded', function() {
    // Handle dynamic content loading
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Get the page to load
            const page = this.getAttribute('data-page');
            let pageUrl = '';

            if (page === 'sader') {
                pageUrl = 'sader/content.html';
            } else if (page === 'human-resouce') {
                pageUrl = 'human-resouce/content.html';
            } else if (page === 'إنشاء بريد داخلي') {
                pageUrl = 'sader/create-mail.html';
            }
            else if (page === "الارشيف") {
                pageUrl = 'sader/archieve.html';
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

    // Handle transaction-item click to add 'active' class
    const transactionItems = document.querySelectorAll('.transaction-item');
    transactionItems.forEach(item => {
        item.addEventListener('click', () => {
            transactionItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });
});

function toggleCollapse(button) {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    const img = document.getElementById('toggleImage');
    
    if (isExpanded) {
        button.setAttribute('aria-expanded', 'false');
        img.src = './assets/images/chevron-up.png'; // Image when collapsed
    } else {
        button.setAttribute('aria-expanded', 'true');
        img.src = './assets/images/chevron-down.png';  // Image when expanded
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const uploadBox = document.getElementById('uploadBox');
    const fileInput = document.getElementById('fileInput');
    if (uploadBox && fileInput) {
        uploadBox.addEventListener('click', function() {
            fileInput.click();
        });
    }
    else{
        console.log("item not found")
    }
});
