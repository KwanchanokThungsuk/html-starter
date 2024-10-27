document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        targetElement.scrollIntoView({
            behavior: 'smooth' 
        });
    });
});

function showImage() {
    var image = document.getElementById("myImage");
    var button = document.getElementById("toggleButton");
    
    if (!image.classList.contains("show")) {
        image.classList.add("show"); 
        button.innerHTML = none; 
    }
}
