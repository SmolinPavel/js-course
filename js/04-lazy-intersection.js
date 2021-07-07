const autoImgList = document.querySelectorAll('#auto-list > li > img');

function onEntry(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !entry.target.src) {
      entry.target.src = entry.target.dataset.src;
    }
  });
  console.log('entries', entries);
}

const options = {
  root: null,
  rootMargin: '500px',
  threshold: 0.1,
};

autoImgList.forEach((img) => {
  //   img.src = img.dataset.src;

  const observer = new IntersectionObserver(onEntry, options);
  observer.observe(img);
});
