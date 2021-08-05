

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


const animFormItems = () => {
	const formItems = document.querySelectorAll(".form-item");
	const formItenAfter = document.querySelectorAll(".form-item ~ div");
	console.log(formItems);
	console.log(formItenAfter);

	for (let j = 0; j < formItems.length; j++) {
		let i = j;
		formItems[i].onfocus = () => {
			console.log(formItenAfter[i])
			formItenAfter[i].classList.add("translate-bg")
			if(formItems[i].placeholder === ""){
				formItems[i].innerText = "";
			}else{
				formItems[i].placeholder = "";
			}
		};

		formItems[i].onblur = function() {
			console.log('dans le blur');
			formItenAfter[i].classList.remove("translate-bg");
			switch(i){
				case 0:
					this.placeholder = "Name"
					break;
				case 1:
					this.placeholder = "Email";
					break;
				case 2:
					this.placeholder = "Subject";
					break;
				case 3:
					this.innerText = "Message";
					break;
				default :
					// nothing here
			}
		};
	}
};

animFormItems();