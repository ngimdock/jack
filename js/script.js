

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


// cette fonction me permet d'afficher les elements avec animation lors du scroll

const displayElementWhentScrolling = () => {

	let ratio = 0.3;
	let options1 = { //options d'observation
	  root: null,
	  rootMargin: '0px',
	  threshold: ratio
	}

	const animateAnyQuesyionBox = () => {

		let timer1 = setTimeout(() => {
			haveAnyQuestion.id = "revel-right-anim";
			clearTimeout(timer1)
		}, 80);

		let timer2 = setTimeout(() => {
						console.log('dans le timiout')
						haveAnyQuestion.classList.remove("revel-visible-right");
						haveAnyQuestion.id = ""
						clearTimeout(timer2);
					}, 5000);
	};

	const displayOtherElement = (entries, observer1) => {
		entries.forEach(entry => {
			if(entry.intersectionRatio >= ratio){
				if(entry.target.classList.contains("c-right")){
					haveAnyQuestion.classList.add("revel-visible-right");
					animateAnyQuesyionBox();
				}else{
					entry.target.classList.add("revel-visible");
				}
			}else{
				if(entry.target.classList.contains("c-right")){
					haveAnyQuestion.classList.remove("revel-visible-right");
					haveAnyQuestion.id = ""
				}
			}
		})
	};

	let observer1 = new IntersectionObserver(displayOtherElement, options1); // instenciation de l'observateur

	const otherElements = document.querySelectorAll(".revel-bottom, .c-right");
	const haveAnyQuestion = document.querySelector(".revel-right");

	console.log(otherElements);

	console.log(haveAnyQuestion);

	otherElements.forEach(elt => {
		observer1.observe(elt); // observation de tous les elements selectionne
	})
}

displayElementWhentScrolling();

// cette fonction permet d'animer la partie presentation de la page

const animateWebsiteHead = () => {
	const awaardHonor = document.querySelector(".awaard-honor");
	const jobAndContactMe = document.querySelectorAll(".head-elt");

	awaardHonor.classList.add("awaardHonor-anim");
	[...jobAndContactMe].forEach(elt => {
		elt.classList.add("head-anim");
	})

};

window.onload = () => {
	animateWebsiteHead();
};