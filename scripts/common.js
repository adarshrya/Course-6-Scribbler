function showModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = 'block';
}

function hideModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

window.addEventListener('load', function () {
    var header = document.getElementById('header');
    
    header.innerHTML = 
    '<div id="title">'+
    '   <p id="logo">ScriBBler</p>'+
    '   <p id="caption">Explore, Imagine, Create</p>'+
    '</div>'+
    '<div id="logins">'+
    '   <button class="customBtn" onclick="showModal(\'signUpModal\')">Sign Up</button>'+
    '   <button class="customBtn" onclick="showModal(\'signInModal\')">Sign In</button>'+
    '</div>';

     
    header.parentElement.innerHTML+=
    '<!-- The signUpModal -->'+
    '<div id="signUpModal" class="modal">'+
    '        <!-- Modal content -->'+
    '        <div class="modal-content">'+
    '            <span class="close" onclick="hideModal(\'signUpModal\')"><i class="fa fa-times"'+
    '                    aria-hidden="true"></i></span>'+
    '            <p class="modalTitle">Get Started</p>'+
    '            <hr>'+
    '            <form action="#" method="post">'+
    '                <label>Name</label>'+
    '                <input type="text" placeholder="Enter your name" id="txtnameSU" required>'+
    '                <label>Username</label>'+
    '                <input type="text" placeholder="Enter your username" id="txtunameSU" required>'+
    '                <label>Password</label>'+
    '                <input type="password" placeholder="Enter your password" id="txtpassSU" required>'+
    '                <label>Confirm Password</label>'+
    '                <input type="password" placeholder="Re-enter your password" id="txtconpassSU" required>'+
    '                <button id="btnSignUp">Sign Up</button>'+
    '            </form>'+
    '        </div>'+
    '    </div>'+
    ''+
    '    <!-- The signInModal -->'+
    '    <div id="signInModal" class="modal">'+
    '        <!-- Modal content -->'+
    '        <div class="modal-content">'+
    '            <span class="close" onclick="hideModal(\'signInModal\')"><i class="fa fa-times"'+
    '                    aria-hidden="true"></i></span>'+
    '            <p class="modalTitle">Welcome Back!</p>'+
    '            <hr>'+
    '            <form action="#" method="post">'+
    '                <label>Username</label>'+
    '                <input type="text" placeholder="Enter your username" id="txtnameLI" required>'+
    '                <label>Password</label>'+
    '                <input type="password" placeholder="Enter your password" id="txtpassLI" required>'+
    '                <button id="btnSignIn">Sign In</button>'+
    '                <br>'+
    '                <div id="footer">Not a member? <a onclick="hideModal(\'signInModal\'); showModal(\'signUpModal\')">Sign Up</a></div>'+
    '            </form>'+
    '        </div>'+
    '    </div>';
  });