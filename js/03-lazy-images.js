const autoImgList = document.querySelectorAll('#auto-list > li > img');

autoImgList.forEach((img) => {
  img.addEventListener('load', onLoad);
});

function onLoad(e) {
  console.log(e.target.alt);
}
