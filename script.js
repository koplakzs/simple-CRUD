const add = document.querySelector("button");
const none = document.querySelectorAll(".task li")[1];
const list = document.querySelector(".task ol");
let countList = 0;
let listTodo = [];
// Function Search
function search(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return false;
}
// Function delete task
function deteleTask(el) {
  let task = el.parentElement.parentElement.querySelector(".task p");
  listTodo.splice(search(listTodo, task.innerHTML), 1);
}
// Function Penambahan List
function added() {
  let text = document.querySelector(".input");
  if (text.value !== "") {
    if (listTodo.length == 0) {
      //   Pembuatan element baru
      let newTodo = `<li><div class ="add"><p>${text.value}</p><div><button class="edit" onclick="edit(this)">Edit</button><button class="done" onclick="done(this)">Done</button></div></div></li>`;
      // Done(this). parameter this disini mengacu pada posis tombol di setiap elemnt
      //   Ada 4 metode insertAdjacentHTML yaitu : afterbegin, afterend, beforebegin, beforeend
      list.insertAdjacentHTML("beforeend", newTodo);
      none.style.display = "none";
      listTodo.push(text.value);
      countList++;
      text.value = "";
    } else {
      if (search(listTodo, text.value) === false) {
        let newTodo = `<li><div class ="add"><p>${text.value}</p><div><button class="edit" onclick="edit(this)">Edit</button><button class="done" onclick="done(this)">Done</button></div></div></li>`;
        list.insertAdjacentHTML("beforeend", newTodo);

        none.style.display = "none";
        listTodo.push(text.value);

        countList++;
        text.value = "";
      }
    }
  }
}

function done(el) {
  if (countList > 1) {
    deteleTask(el);
    el.parentElement.parentElement.remove();
    countList--;
  } else {
    deteleTask(el);
    el.parentElement.parentElement.remove();
    none.style.display = "inherit";
    countList = 0;
    listTodo = [];
  }
}
function edit(el) {
  let taskEdit = el.parentElement.parentElement.querySelector(".task p");
  document.querySelector(".input").value = taskEdit.innerHTML;
  done(el);
  console.log(listTodo);
}
// Event
add.addEventListener("click", () => {
  added();
});
// window on load
window.onload = () => {
  document.querySelector(".input").value = "";
};
