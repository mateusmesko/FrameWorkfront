

var inicio, meio, fim,todo=''
        
fetch("db.json")
.then(response => response.json())
.then(data => {

var dadosVoc= data.conversation

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