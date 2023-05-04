//Кнопка для перелистования для следущей картинки
let nextEl = document.querySelector('.btn.next');
let imageEl = document.querySelectorAll('img');

const prevEl = document.querySelector('.btn.prev');



let imageContainerEl = document.querySelector('.image-container');

let timeout;

//Будет относиться к изображению
let currentImg = 1;

//Событие для перелистования изображения вперед
nextEl.addEventListener('click', (event) => {
    currentImg++;
    clearTimeout(timeout);
    updateImg();
});
updateImg() 

//Событие для перелистования изображения назад
prevEl.addEventListener('click', (event) => {
    currentImg--;
    updateImg();
    clearTimeout(timeout)
})


//Функция для перелистования изображения вперед
function updateImg() {
//Ограничитель при перелистовании на последнее изображение делает так что при перелистовании через последнее 
// изображение была не пустая рамка а просто следующая картинка
   if(currentImg > 4) {
    currentImg = 1
   } else if(currentImg<1) {       //для пересылания к последнему изображению
    currentImg = imageEl.length
   }

    imageContainerEl.style.transform = `translateX(-${(currentImg - 1)*400}px)`;

    timeout = setTimeout(() => {
        currentImg++;
        updateImg()
    }, 3000)
};


