let smiles = {};
smiles.container = document.getElementsByClassName('smiles-gallery')[0];
smiles.stack = smiles.container.lastElementChild;
smiles.images = smiles.stack.getElementsByClassName('gallery__image');
smiles.path = smiles.images[0].src.replace(/\d\.jpg/, '');
smiles.btnLeft = smiles.container.children[1];
smiles.btnRight = smiles.container.children[2];
smiles.current = smiles.next = smiles.prev = undefined;

smiles.setIndexes = function (num) {
  this.current = (num > 8) ? 1 : (num < 1) ? 8 : +num;
  this.next = (this.current >= 8) ? 1 : this.current + 1;
  this.prev = (this.current <= 1) ? 8 : this.current - 1;
}



let interior = {};
interior.container = document.getElementsByClassName('interior-gallery')[0];
interior.stack = interior.container.lastElementChild;
interior.images = interior.stack.getElementsByClassName('gallery__image');
interior.path = interior.images[0].src.replace(/\d\.jpg/, '');
interior.btnLeft = interior.container.children[1];
interior.btnRight = interior.container.children[2];
interior.current = interior.next = interior.prev = undefined;

interior.setIndexes = function (num) {
  this.current = (num > 5) ? 1 : (num < 1) ? 5 : +num;
  this.next = (this.current >= 5) ? 1 : this.current + 1;
  this.prev = (this.current <= 1) ? 5 : this.current - 1;
}



function openGallery (event, obj) {
  obj.setIndexes(event.target.alt);
  obj.images[0].src = obj.path + obj.prev + '.jpg';
  obj.images[1].src = obj.path + obj.current + '.jpg';
  obj.images[2].src = obj.path + obj.next + '.jpg';
  obj.container.hidden = false;
  document.body.style.overflowY = 'hidden';
}

function closeGallery(obj) {
  document.body.style.overflowY = '';
  obj.container.hidden = true;
}

for (let elem of document.getElementsByClassName('smiles-photo')) {
  elem.addEventListener('click', () => openGallery(event, smiles))
}

for (let elem of document.getElementsByClassName('interior-photo')) {
  elem.addEventListener('click', () => openGallery(event, interior))
}



function moveRight (obj) {
  obj.btnRight.disabled = true;
  obj.setIndexes(obj.current + 1);
  obj.stack.firstElementChild.style.width = '0';

  obj.stack.insertAdjacentHTML("beforeend",
    `<li class="gallery__item">
        <img class="gallery__image" src="${obj.path + obj.next + '.jpg'}" alt="">
      </li>`
  );
  setTimeout(() => {
    obj.stack.firstElementChild.remove();
    obj.btnRight.disabled = false;
  }, 600);
}



function moveLeft (obj) {
  obj.btnLeft.disabled = true;
  obj.setIndexes(obj.current - 1);
  obj.stack.lastElementChild.remove();

  obj.stack.insertAdjacentHTML("afterbegin",
    `<li class="gallery__item" style="width: 0;">
      <img class="gallery__image" src="${obj.path + obj.prev + '.jpg'}" alt="">
    </li>`
  );
  setTimeout(() => obj.stack.firstElementChild.style.width = '');
  setTimeout(() => obj.btnLeft.disabled = false, 600);
}
