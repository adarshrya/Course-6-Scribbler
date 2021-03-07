function Trim(params) {
  var descCollection = document.getElementsByClassName("postDesc");
  for (var i = 0; i < document.getElementsByClassName("postDesc").length; i++) {
    var val = document
      .getElementsByClassName("postDesc")
      [i].innerHTML.substring(0, 180);
    descCollection[i].innerHTML = val;
  }
}
var postid = "";

function unmarkPost() {
  postid = "";
  hideModal("deleteModal");
}

function markPost(post_Id) {
  postid = post_Id;
  showModal("deleteModal");
}

function deletePost() {
  var modal = document.getElementById(postid);
  modal.style.display = "none";
  hideModal("deleteModal");
}

function openPost(post_Id) {
  window.location.href = "post.html";
}
