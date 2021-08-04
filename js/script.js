

// cette fonction permet de faire animer les boutons lors du survol
const hoverBtnEffect = () => {
	const btns = document.querySelectorAll(".btn");
	const bg = document.querySelectorAll(".btn div");
	const text = document.querySelector(".btn span");

	for (let i = 0; i < btns.length; i++) {
		btns[i].onmouseover = (event) => {
			bg[i].classList.add("translate-bg");
			btns[i].style.color = "black";
		};

		btns[i].onmouseout = (event) => {
			bg[i].classList.remove("translate-bg");
			btns[i].style.color = '#08fdd8';
		};
	}
};

hoverBtnEffect();

// cette fonction permet de faire l'animation instantane du scroll de direction
const srollDirectionEffect = () => {
	const scrollDirections = document.querySelectorAll(".scroll-box p span");

	for(let scroll of scrollDirections){
		let timer = setInterval(() => {
			scroll.classList.toggle("scroll-anim");
		}, 500);
	}
};

srollDirectionEffect();


// cette foncion permet de faire les animations lors du survol des image du portfolio


const EffectImagePortFolio = () => {
	const projects = document.querySelectorAll(".project");
	const viewProjects = document.querySelectorAll(".view-project");

	for (let i = 0; i < projects.length; i++) {

		projects[i].onmouseover = function(event){
			this.style.opacity = 1;
			viewProjects[i].classList.add("view-project-anim");
		}

		projects[i].onmouseout = function(event){
			this.style.opacity = .5;
			viewProjects[i].classList.remove("view-project-anim");
		}
	}
};

EffectImagePortFolio();
