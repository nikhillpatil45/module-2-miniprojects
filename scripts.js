// Sample JavaScript for lazy loading images
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("img[data-src]");

    const lazyLoad = target => {
        const io = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    observer.disconnect();
                }
            });
        });

        io.observe(target);
    };

    images.forEach(lazyLoad);
});
