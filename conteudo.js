function menuClickado(menu){
    document.body.innerHTML=''

var inicio, meio, fim,todo=''

var menuSelect=menu
fetch("db.json")
.then(response => response.json())
.then(data => {



    if(menuSelect==1)
    {
        dadosVoc = data.vocabulary
        var active1='class="active"'
    }else if(menuSelect==2){

        var active2='class="active"'
        dadosVoc = data.verbs

    }else if(menuSelect==3){

        var active3='class="active"'
        dadosVoc = data.rules

    }else if(menuSelect==4){
        var active4='class="active"'
        dadosVoc = data.conversation
    }

var menu=`<aside>
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
  <a href="#menu" ${active1} onclick="menuClickado(1)">
    <span class="material-icons-sharp"> dashboard </span>
    <h3>VOCABULARIO</h3>
  </a>
  <a href="#" ${active2} onclick="menuClickado(2)">
    <span class="material-icons-sharp"> person_outline </span>
    <h3>VERBOS</h3>
  </a>
  <a href="#" ${active3} onclick="menuClickado(3)">
    <span class="material-icons-sharp"> insights </span>
    <h3>REGRAS</h3>
  </a>
  <a href="#" ${active4} onclick="menuClickado(4)">
    <span class="material-icons-sharp"> mail_outline </span>
    <h3>CONVERSA</h3>
  </a>
  <a href="#">
    <span class="material-icons-sharp"> logout </span>
    <h3>Logout</h3>
  </a>
</div>
</aside>`

document.body.innerHTML=menu

dadosVoc.forEach(function (dados){  
    inicio=''
    inicio+=`
    <section ">
        <div class="container">
            <div class="course">
                <div class="preview">
                    <h6> ${data.book}</h6>

                    <h2>${data.unit}</h2>

                    <a href="../unit1.html">
                        home
                    </a>
                    
                </div>

                <!-- melhor a separação -->
                <div class="info">
                    <div class="progress-wrapper">
                        <div class="progress">

                        </div>

                        <span class="progress-text">
                            ${data.progress}</span>
                        
                    </div>
                    <h6>${dados.title}</h6>
                    <h2>${dados.subtitle}</h2>
                <P>`;
    meio=''
    dados.comments.forEach(function(dados){
    
    meio+=`
            <h3>${dados.text}
            <audio controls="controls">
            <source src="Audio1.mp3" type="audio/mp3" />
            seu navegador não suporta HTML5
            </audio>
            </h3>
            <br>
            `;
                    
    })
    fim=`      
                </div>
            </div>
        </div>
    </section> `

    todo=inicio+meio+fim;
    document.body.innerHTML+=todo;

    todo=null
    })
});

}

var inicio, meio, fim,todo=''
        
fetch("db.json")
.then(response => response.json())
.then(data => {

var dadosVoc= data.conversation

dadosVoc.forEach(function (dados){  
   
    var menu=`<aside>
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
  <a href="#menu" onclick="menuClickado(1)">
    <span class="material-icons-sharp"> dashboard </span>
    <h3>VOCABULARIO</h3>
  </a>
  <a href="#" onclick="menuClickado(2)">
    <span class="material-icons-sharp"> person_outline </span>
    <h3>VERBOS</h3>
  </a>
  <a href="#" onclick="menuClickado(3)">
    <span class="material-icons-sharp"> insights </span>
    <h3>REGRAS</h3>
  </a>
  <a href="#" onclick="menuClickado(4)">
    <span class="material-icons-sharp"> mail_outline </span>
    <h3>CONVERSA</h3>
  </a>
  <a href="#">
    <span class="material-icons-sharp"> logout </span>
    <h3>Logout</h3>
  </a>
</div>
</aside>`
document.body.innerHTML=menu
    inicio=''
    inicio+=`
    <section ">
        <div class="container">
            <div class="course">
                <div class="preview">
                    <h6> ${data.book}</h6>

                    <h2>${data.unit}</h2>

                    <a href="../unit1.html">
                        home
                    </a>
                    
                </div>

                <!-- melhor a separação -->
                <div class="info">
                    <div class="progress-wrapper">
                        <div class="progress">

                        </div>

                        <span class="progress-text">
                            ${data.progress}</span>
                        
                    </div>
                    <h6>${dados.title}</h6>
                    <h2>${dados.subtitle}</h2>
                <P>`;
    meio=''
    dados.comments.forEach(function(dados){
    
    meio+=`
            <h3>${dados.text}
            <audio autoplay="autoplay" controls="controls">
            <source src="Audio1.mp3" type="audio/mp3" />
            seu navegador não suporta HTML5
            </audio>
            </h3>
            <br>
            `;
                    
    })
    fim=`      
                </div>
            </div>
        </div>
    </section> `

    todo=inicio+meio+fim;
    document.body.innerHTML+=todo;

    todo=null
    })
});