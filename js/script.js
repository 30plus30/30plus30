// document.addEventListener("DOMContentLoaded", function() {
//     const toggleLink = document.querySelector(".toggle-read-more");
//     const courseDescription = document.querySelector(".course-description");

//     toggleLink.addEventListener("click", function() {
//         const isExpanded = toggleLink.getAttribute("data-expanded") === "true";

//         if (isExpanded) {
//             courseDescription.classList.remove("expanded");
//             toggleLink.textContent = "Read more";
//         } else {
//             courseDescription.classList.add("expanded");
//             toggleLink.textContent = "Read less";
//         }

//         toggleLink.setAttribute("data-expanded", !isExpanded);
//     });
// });



// function myFunction() {
//   var dots = document.getElementById("dots");
//   var moreText = document.getElementById("more");
//   var btnText = document.getElementById("myBtn");

//   if (dots.style.display === "none") {
//     dots.style.display = "inline";
//     btnText.innerHTML = "Read more"; 
//     moreText.style.display = "none";
//   } 
//   else {
//     dots.style.display = "none";
//     btnText.innerHTML = "Read less"; 
//     moreText.style.display = "inline";
//   }
//}

// script.js 
// function changeReadMore(id) { 
// 	const mycontent = 
// 		document.getElementById('more-' + id); 
// 	const mybutton = 
// 		document.getElementById('more-button-' + id); 
// 	const dots = document.getElementById("dots") 

// 	if (mycontent.style.display === 'none'
// 		|| mycontent.style.display === '') { 
// 		mycontent.style.display = 'inline'; 
// 		dots.style.display = "none"; 
// 		mybutton.textContent = 'Read Less'; 
// 	} else { 
// 		mycontent.style.display = 'none'; 
//         mybutton.textContent = 'Read More'; 
//         dots.style.display = "inline"; 
       
		
// 	} 
// } 


function changeReadMore(id) {
	var dots = document.getElementById("dots-" + id);
	var moreText = document.getElementById("more-" + id);
	var btnText = document.getElementById("more-button-" + id);
  
	if (dots.style.display === "none") {
	  dots.style.display = "inline";
	  btnText.innerHTML = "Read More"; 
	  moreText.style.display = "none";
	} else {
	  dots.style.display = "none";
	  btnText.innerHTML = "Read Less"; 
	  moreText.style.display = "inline";
	}
  }
  


