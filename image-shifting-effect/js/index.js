const elements = {
  box_1: document.getElementById('box-1'),
  box_2: document.getElementById('box-2'),
  box_3: document.getElementById('box-3'),
  box_4: document.getElementById('box-4'),
  pic_1: document.getElementById('pic-1'),
  pic_2: document.getElementById('pic-2'),
  pic_3: document.getElementById('pic-3'),
  pic_4: document.getElementById('pic-4'),
  all_pics: document.querySelectorAll('.bg__pic'),
  background: document.querySelector('.bg-img')
};

elements.box_1.addEventListener('mouseover', e => {
  elements.all_pics.forEach(pic => pic.classList.remove('bg__pic-visible'));
  elements.pic_1.classList.add('bg__pic-visible');
});
elements.box_2.addEventListener('mouseover', e => {
  elements.all_pics.forEach(pic => pic.classList.remove('bg__pic-visible'));
  elements.pic_2.classList.add('bg__pic-visible');
});
elements.box_3.addEventListener('mouseover', e => {
  elements.all_pics.forEach(pic => pic.classList.remove('bg__pic-visible'));
  elements.pic_3.classList.add('bg__pic-visible');
});
elements.box_4.addEventListener('mouseover', e => {
  elements.all_pics.forEach(pic => pic.classList.remove('bg__pic-visible'));
  elements.pic_4.classList.add('bg__pic-visible');
});
