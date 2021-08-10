

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
			formItenAfter[i].classList.add("translate-bg")
			if(formItems[i].placeholder === ""){
				formItems[i].innerText = "";
			}else{
				formItems[i].placeholder = "";
			}
		};

		formItems[i].onblur = function() {
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
						haveAnyQuestion.classList.remove("revel-visible-right");
						haveAnyQuestion.id = ""
						clearTimeout(timer2);
					}, 5000);
	};

	// cette fonction permet d'afficher des elements avec des style au scroll

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


	otherElements.forEach(elt => {
		observer1.observe(elt); // observation de tous les elements selectionne
	})
}

displayElementWhentScrolling();
// cette fonction permet d'animer la partie presentation de la page
const animateWebsiteHead = () => {
	const awaardHonor = document.querySelector(".awaard-honor");
	const jobAndContactMe = document.querySelectorAll(".head-elt");
	const letterJ = document.querySelector(".logo");

	letterJ.classList.add("logo-anim");

	awaardHonor.classList.add("awaardHonor-anim");
	[...jobAndContactMe].forEach(elt => {
		elt.classList.add("head-anim");
	})

};


const animateText = (index, delay, fontSize, caracterTable) => {
	caracterTable[index].style.transitionDelay = delay + "ms";
	caracterTable[index].style.fontSize = fontSize + "px";
	caracterTable[index].classList.add("presentation-anim");
	if(index < caracterTable.length-1){

		index++;
		delay += 130;
		return animateText(index, delay, fontSize, caracterTable);
	}
	return;
};


// cette fonction permet d'animer les titres se section
const displaySubTitleWhenScrolling = () => {

	const ratio = 0.2;
	var options = {
	  root: null,
	  rootMargin: '0px',
	  threshold: ratio
	}

	const handleIntersectSubTitle = (entries, observer) => {

		const innerWidth = window.innerWidth;
		entries.forEach(entry => {
			if(entry.intersectionRatio > ratio){
				if(innerWidth > 800){
					animateText(0, 0, 55, subTitles);
				}else if(innerWidth > 650){
					console.log("dans 650 :" + innerWidth);
					animateText(0, 0, 45, subTitles);
				}else{
					animateText(0, 0, 40, subTitles);
				}
			}
		})

	};


	const observer = new IntersectionObserver(handleIntersectSubTitle, options);

	const subTitles = document.querySelectorAll(".sub-title-item");
	const subTitlesBox = document.querySelectorAll(".sub-title");
	const crossIncon = document.querySelector(".bi-x-lg")
	subTitlesBox.forEach(titleBox => {
		observer.observe(titleBox);
	})
};


displaySubTitleWhenScrolling();

const presentationWords = document.querySelectorAll(".presentation-word");

window.onload = () => {
	animateWebsiteHead();
	animateText(0, 0, 95, presentationWords);

};


// ici je rend la bar de navigation responsive

const check = document.querySelector("#check");
const aside = document.querySelector("aside");
const burgerIcon = document.querySelector(".bi-justify");
const checkLabel = document.querySelector(".check-label");

const navItems = document.querySelectorAll(".nav-item");


const check2 = document.createElement("i");
check2.className = "bi bi-x-lg";


const displayAsideBar = () => {



	if(check.checked){
		aside.classList.add("aside-anim");
		checkLabel.replaceChild(check2, burgerIcon);

		navItems.forEach(item => {
			item.onclick = () => {
				check.checked = false;
				aside.classList.remove("aside-anim");
				checkLabel.replaceChild(burgerIcon, check2);
			};
		})
	}else{
		aside.classList.remove("aside-anim");
		checkLabel.replaceChild(burgerIcon, check2);
	}


};

const elementMenu = () => {


};
elementMenu();

check.onclick = () => displayAsideBar();