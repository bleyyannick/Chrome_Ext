let myLeads = []; 
const inputBtn = document.getElementById('input-btn'); 
const inputEl = document.getElementById('input-el'); 
const ulEl = document.getElementById("ul-el"); 


inputBtn.addEventListener("click", () => {
   const inputLead = inputEl.value; 
   myLeads.push(inputLead); 
   for(let lead of myLeads) {
      ulEl.innerHTML += "<li>" + lead + "</li>"
    }
}); 