
function addbtn(){
    var goals = document.getElementById("goals")
    var title = document.getElementById("title").value
    var detail = document.getElementById("addTxt").value
    

if (title === "" && detail === "" ){
    alert("Nothing to show! Write any Note ")
}else {
    goals.innerHTML += `<div class="card maincard addNote" id="myUL" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title" id="title"> <h4>Title :</h4>  ${title}</h5>
      <p class="card-text"> <h4>Notes :</h4> ${detail}</p>
      <button class="btn btn-dark one" onclick="edit(this)">edit</button>
      <button class="btn btn-dark one" onclick="del(this)">del</button>
    </div>
  </div>`;

}
document.getElementById("title").value = ""
document.getElementById("addTxt").value = ""

}
function delAll(){
    goals.innerHTML = ""
}
function del(e){
    e.parentNode.remove();
    
}

