const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


let index = 0;

const slideImage = document.querySelector('.banner-img');
const slideText = document.querySelector('#tagLine');
const showSlide = n => {
  slideImage.src = slides[n].image;
  slideText.innerHTML = slides[n].tagLine;
}
showSlide(index);
const next = document.querySelector('.arrow_right');
next.addEventListener('click', () => {
  index = (index + 1) % slides.length; 
  showSlide(index);
});

const prev = document.querySelector('.arrow_left');
prev.addEventListener('click', () => {
  index = (index +  slides.length - 1) % slides.length; 
  showSlide(index);
});