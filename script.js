document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // ป้องกันการเลื่อนโดยตรง

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        // เลื่อนไปยังหัวข้อที่กำหนด
        targetElement.scrollIntoView({
            behavior: 'smooth' // การเลื่อนอย่างเนียน
        });
    });
});

function showImage() {
    var image = document.getElementById("myImage");
    var button = document.getElementById("toggleButton");
    
    if (!image.classList.contains("show")) {
        image.classList.add("show"); // เพิ่มคลาส .show
        button.innerHTML = none; // เปลี่ยนข้อความปุ่ม
    }
}
