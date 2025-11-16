const input = document.getElementById('bookmarkInput');
const button = document.getElementById('addBookmarkBtn');
const list = document.getElementById('bookmarkList');


const bookmarks = [];


button.addEventListener('click', ()=> {
    const value = input.value.trim();
    if (value) {
        bookmarks.push(value);
        input.value = "";
        renderList(bookmarks);
    }
})

// console.log(bookmarks);

function renderList(array) {
    list.innerHTML = array.map((item, index)=> {
        return `<li class="bookmark" data-idx = "${index}">
        <a class="url" href="https://${item}" target="_blank">${item}</a>
        <button class="delete" type="button">Видалити</button>
    </li>`;
    }).join("")
}

renderList(bookmarks)

list.addEventListener('click', (event)=> {
    const li = event.target.closest("li")
    const index = Number(li.dataset.idx);
    if(event.target.classList.contains("delete")) {
        bookmarks.splice(index, 1)
        renderList(bookmarks) 
    }
    
})