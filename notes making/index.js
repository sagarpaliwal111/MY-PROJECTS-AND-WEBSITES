console.log("welcome ");
showNote();
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let AddTitle=document.getElementById("AddTitle");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  let myObj= {
    title:AddTitle.value,
    text:addTxt.value
  }
  notesObj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  AddTitle.value="";
  console.log(notesObj);
  showNote();
});

function showNote() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
        <div class=" noteCard my-2 mx-2 card" style="width: 18rem;">
           
        <div class="card-body">
          <h5 class="card-title"> ${element.title}</h5>
          <p class="card-text">${element.text}</p>
          <button id="${index}"  onclick ="deleteNote(this.id)"class="btn btn-primary">Delete note</button>
        </div>
      </div>  
        `;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `nothing to show here!! Use "add a note" section above to add notes. `;
  }
}

function deleteNote(index) {
  console.log("i am deleting a note", index);
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNote();
}

let search = document.getElementById('searchTxt');
search.addEventListener("input",function(){
    
    let inputVal=search.value.toLowerCase();  
    console.log('input event fired',inputVal);
let noteCards= document.getElementsByClassName('noteCard');
Array.from(noteCards).forEach(function(element)
{
    let cardTxt=element.getElementsByTagName("p")[0].innerText;
    if(cardTxt.includes(inputVal))
    {
        element.style.display='block';

    }
    else
    {
        element.style.display='none';
    }
})
})