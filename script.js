// scrolling

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

//accordion

const pageItems = document.querySelectorAll(".footer-pages-item");
pageItems.forEach(item => {
    let button = item.querySelector('.footer-pages-button');
    button.addEventListener("click", () => {
        let nav = item.querySelector('.footer-pages-nav');
        if(nav.clientHeight === 0) {
            nav.style.maxHeight = "108.3px";
            nav.style.padding = "4.4px 0px 11.3px 12.5px";
            nav.style.borderTop = "1px solid #bdbdbd";
        }
        else {
            nav.style.maxHeight = "0px"
            nav.style.padding = "0px 0px 0px 12.5px";
            nav.style.borderTop = "1px solid transparent";
        }
    })
})
