var numero=1
if(numero==1){
  primeiro=''
}

document.body.innerHTML+=`<aside>
<div class="top">
  <div class="logo">
    <span class="material-icons-sharp"> menu_book</span>
    <h2>BOOK 1<span class="danger"> UNIT 1</span></h2>
  </div>
  <div class="close" id="close-btn">
    <span class="material-icons-sharp"> close </span>
  </div>
</div>

<div class="sidebar">
  <a href="#" class="active">
    <span class="material-icons-sharp"> dashboard </span>
    <h3>VOCABULARIO</h3>
  </a>
  <a href="#">
    <span class="material-icons-sharp"> person_outline </span>
    <h3>VERBOS</h3>
  </a>
  <a href="#">
    <span class="material-icons-sharp"> insights </span>
    <h3>REGRAS</h3>
  </a>
  <a href="#">
    <span class="material-icons-sharp"> mail_outline </span>
    <h3>CONVERSA</h3>
  </a>
  <a href="#">
    <span class="material-icons-sharp"> logout </span>
    <h3>Logout</h3>
  </a>
</div>
</aside>`

