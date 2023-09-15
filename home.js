const modalContainer = document.querySelector(".modal-container");
const modalTriggers = document.querySelectorAll(".modal-trigger");

modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal))
setTimeout(toggleModal, 1000); 

function toggleModal(){
  modalContainer.classList.toggle("active")
}
