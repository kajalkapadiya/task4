let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
var filter = document.getElementById('filter');


form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);


// Add item
function addItem(e) {
    e.preventDefault();
    let newItem = document.getElementById('item').value;
    let description = document.getElementById('description').value;

    let li = document.createElement('li');
    li.className = 'list-group-item';
    
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(" " + description));

    let deleteBtn = document.createElement('button');
    let editBtn = document.createElement('button');

    editBtn.className = 'btn btn-primary btn-sm float-right edit';
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    editBtn.appendChild(document.createTextNode('edit'));
    deleteBtn.appendChild(document.createTextNode('X'));

    li.appendChild(deleteBtn);
    li.appendChild(editBtn);

    itemList.appendChild(li);
}

// Remove item
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are You Sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e){
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      var description = item.childNodes[1].textContent;

      if((itemName.toLowerCase().indexOf(text) != -1) || description.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    })
}