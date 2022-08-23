document.body.innerHTML+=`<div style="--clr:rgb(0, 204, 100)" class="navigation" >
    <ul>
        <li>
            <a href="unit${this.unidade}.html" style="color: black;">
                <span class="icon">
                    <ion-icon name="book"></ion-icon>
                </span>
                <span class="title">Unit ${this.unidade}</span>
            </a>
        </li>
        <li>
            <a href="unit${this.unidade}/vocabulary.html">
                <span class="icon">
                    <ion-icon name="language-outline"></ion-icon>
                </span>
                <span class="title">Vocabulario</span>
            </a>
        </li>

        <li>
            <a href="unit${this.unidade}/verbs.html">
                <span class="icon">
                    <ion-icon name="chatbox-ellipses-outline"></ion-icon>
                </span>
                <span class="title">Verbos</span>
            </a>
        </li>

        <li>
            <a href="unit${this.unidade}/rules.html">
                <span class="icon">
                    <ion-icon name="extension-puzzle-outline"></ion-icon>
                </span>
                <span class="title">Regras</span>
            </a>
        </li>

        <li>
            <a href="unit${this.unidade}/conversation.html">
                <span class="icon">
                    <ion-icon name="chatbubbles-outline"></ion-icon>
                </span>
                <span class="title">Conversa</span>
            </a>
        </li>

        <li>
            <a href="unit${this.unidade}/shortsConversation.html">
                <span class="icon">
                    <ion-icon name="chatbubble-outline"></ion-icon>
                </span>
                <span class="title">Pequenas conversas</span>
            </a>
        </li>

        <li>
            <a href="unit${this.unidade}/exercises.html">
                <span class="icon">
                    <ion-icon name="create-outline"></ion-icon>
                </span>
                <span class="title">Exercicios</span>
            </a>
        </li>
    </ul>
       
 
</div>`;