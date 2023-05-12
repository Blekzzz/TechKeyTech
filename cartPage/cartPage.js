const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];

function deleteCart () {
  const element = document.getElementById("cart1")
  element.remove()
}


btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
  window.location.href = "../home.html"
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}