var likes=0;

function saveData(){
    var blogBody = document.getElementById("blogBody");
    var blogTitle = document.getElementById("blogTitle");
    var modal = document.getElementById('btnEdit');
    modal.style.display = 'block';
    modal = document.getElementById('btnSave');
    modal.style.display = 'none';
    blogBody.setAttribute("contenteditable", "false");
    blogBody.style.border= "none";
    blogTitle.setAttribute("contenteditable", "false");
    blogTitle.style.border="none";
}

function enableEdit(){
    var blogBody = document.getElementById("blogBody");
    var blogTitle = document.getElementById("blogTitle");
    blogBody.setAttribute("contenteditable", "true");
    blogBody.style.border="1px solid pink";
    blogBody.focus();
    blogTitle.setAttribute("contenteditable", "true");
    blogTitle.style.border="1px solid pink";
    var modal = document.getElementById('btnEdit');
    modal.style.display = 'none';
    modal = document.getElementById('btnSave');
    modal.style.display = 'block';
    console.log(blogTitle);
    console.log(blogBody);
}


function likePost(){
    var likeBtn = document.getElementById("btnLike");
    var likeCpt = document.getElementById("likeCpt");
    likeBtn.innerHTML = "<i class='fa fa-thumbs-up' aria-hidden='true'> Liked!";
    likes++;
    if(likes>1)
    {
        likeCpt.innerText = likes+" people like this!";
    }
    else{
        likeCpt.innerText = likes+" person likes this!";
    }    
}

function commentAction() {
    var comment = document.getElementById("commentbox");
    var commenttext = document.getElementById("commenttext").value;
    if(commenttext == ""){
        alert("Enter Comment to add them");
    }else {
        var node = document.createElement('div');
        node.append(commenttext);
        node.setAttribute("class", "usercomment");
        comment.append(node);
    }
}