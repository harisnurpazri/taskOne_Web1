function toggleMenu() {
    const nav = document.getElementById('main-nav');
    nav.classList.toggle('active');
}

// Fungsi untuk mengubah status active pada menu dan scroll
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.navbar ul li a');
    const sections = document.querySelectorAll('section');
    
    // Highlight link saat scroll
    window.addEventListener('scroll', () => {
        let current = '';
        // Menentukan section mana yang paling dekat dengan bagian atas viewport
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            // Memberikan toleransi agar link aktif sebelum section benar-benar mencapai puncak
            if (pageYOffset >= sectionTop - 150) { 
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            // Membandingkan href link dengan ID section saat ini
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Sembunyikan menu setelah diklik (untuk mobile)
            const nav = document.getElementById('main-nav');
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
            }
        });
    });
});