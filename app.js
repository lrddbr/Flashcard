function createCard(category, question, answer) {
    let cont = document.getElementById('container')
    let c = document.createElement('article')
    c.className = 'card' //Importante!!!
    c.innerHTML = `
    <div class="card__content">
        <h3>${category}</h3>
        <div class="card__content__question">
            <p>${question}</p>
        </div>
        <div class="card__content__answer">
            <p>${answer}</p>
        </div>
    </div>
    `
    let IsAnswerVisible = false
    function rotateCard() {
        IsAnswerVisible = !IsAnswerVisible
        c.classList.toggle('active', IsAnswerVisible)
    }
    c.addEventListener('click', rotateCard) //O segundo parâmetro, neste caso, sempre é uma função. Por isso não é necessário o uso dos "()"
    cont.appendChild(c)
}