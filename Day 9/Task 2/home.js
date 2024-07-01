// //  // Ensures that the script runs after the DOM is fully loaded. 
// document.addEventListener("DOMContentLoaded", () => {

//   // Targets all the classes amd Id 
//   let editbuttons = document.querySelectorAll(".editbutton");
//   let delbuttons = document.querySelectorAll(".delbutton");

//   let editcard = document.getElementById("editcard");
//   let delcard = document.getElementById("deletecard");

//   let closebuttons = document.querySelectorAll(".close-button");
//   let confirmbutton = document.querySelector("confirm-delete");

//   // main Code 
//   editbuttons.forEach((button) => {
//     button.addEventListener("click", () => {
//       editcard.style.display = "block";
//     });
//   });

//   delbuttons.forEach((button) => {
//     button.addEventListener("click", () => {
//       deleteCard.style.display = "block";
//     });
//   });

//   closeButtons.forEach((button) => {
//     button.addEventListener("click", () => {
//       button.parentElement.style.display = "none";
//     });
//   });


//   confirmDeleteButton.addEventListener("click", () => {
//     alert("Item deleted!");
//     deleteCard.style.display = "none";
//     // Add logic to delete the item here
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  // Targets all the classes and IDs
  let editbuttons = document.querySelectorAll(".editbutton");
  let delbuttons = document.querySelectorAll(".delbutton");

  let editcard = document.getElementById("editcard");
  let delcard = document.getElementById("deletecard");

  let closebuttons = document.querySelectorAll(".close-button");
  let confirmbutton = document.querySelector(".confirm-delete");

  // Main code
  editbuttons.forEach((button) => {
    button.addEventListener("click", () => {
      editcard.style.display = "block";
    });
  });

  delbuttons.forEach((button) => {
    button.addEventListener("click", () => {
      delcard.style.display = "block";
    });
  });

  closebuttons.forEach((button) => {
    button.addEventListener("click", () => {
      button.parentElement.style.display = "none";
    });
  });

  confirmbutton.addEventListener("click", () => {
    alert("Item deleted!");
    delcard.style.display = "none";
    // Add logic to delete the item here
  });
});
