const container = document.querySelector(".footer-images-container");

const horizontalScroll = () => {
    container.scrollLeft += 2;
}
let scrollId = null;

const resumeScroll = () => {
    scrollId = setInterval(horizontalScroll, 20);
}
container.addEventListener('mouseleave', function () {
    clearInterval(scrollId);
});

container.addEventListener('mouseenter', resumeScroll);

container.addEventListener('scroll', function() {
    if(container.scrollLeft + container.clientWidth + 3 >= container.scrollWidth) {
        var firstImage = container.querySelector(".footer-image-link");
        container.appendChild(firstImage.cloneNode(true));
        container.scrollLeft -= firstImage.clientWidth;
        container.removeChild(firstImage);
    }
});
console.log(container);