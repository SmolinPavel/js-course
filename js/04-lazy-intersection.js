const autoImgList = document.querySelectorAll('#auto-list > li > img');
// [img, img, img, ...]

const options = {
  rootMargin: '-30px',
  threshold: '0',
};

autoImgList.forEach((img) => {
  const observer = new IntersectionObserver(onEntry, options);
  observer.observe(img);
});

function onEntry(entries) {
  // [{ target: img1, isIntersecting: false  }]
  entries.forEach((entry) => {
    if (entry.isIntersecting && !entry.target.src) {
      entry.target.src = entry.target.dataset.src;
    }
  });
}
