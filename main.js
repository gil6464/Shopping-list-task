const shoppingList = document.querySelector("ul");
const input = document.querySelector("input");
const addButton = document.querySelector("button"); 

  addButton.onclick = function() {
      let theItem = input.value;
      input.value = '';
      
     const listItem = document.createElement("li");
     const spanText = document.createElement("span");
     const deleteButton = document.createElement("button");

     spanText.textContent = theItem;
     deleteButton.textContent = "Delete";
     
     listItem.appendChild(spanText);
     listItem.appendChild(deleteButton);

     shoppingList.appendChild(listItem);

     deleteButton.onclick = function() {
          shoppingList.removeChild(listItem);
     }
          input.focus();
  }