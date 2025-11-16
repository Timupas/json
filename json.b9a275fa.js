let t=document.getElementById("bookmarkInput"),e=document.getElementById("addBookmarkBtn"),a=document.getElementById("bookmarkList"),l=[];function n(t){a.innerHTML=t.map((t,e)=>`<li class="bookmark" data-idx = "${e}">
        <a class="url" href="https://${t}" target="_blank">${t}</a>
        <button class="delete" type="button">\u{412}\u{438}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{438}</button>
    </li>`).join("")}e.addEventListener("click",()=>{let e=t.value.trim();e&&(l.push(e),t.value="",n(l))}),n(l),a.addEventListener("click",t=>{let e=Number(t.target.closest("li").dataset.idx);t.target.classList.contains("delete")&&(l.splice(e,1),n(l))});
//# sourceMappingURL=json.b9a275fa.js.map
