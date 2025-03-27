let input = document.querySelector('input');
let textarea = document.querySelector('textarea');
let button = document.querySelector('button');
let article = document.querySelector('article');

button.addEventListener('click', ()=>{
    let date = new Date();
    let formatDate = date.toLocaleDateString();
    let titolo = input.value
    let testo = textarea.value
    if (titolo != '' && testo != '') {
        let paragrafo = document.createElement('p')
        paragrafo.innerHTML = `<h3>${titolo}</h3> <p>${testo}</p> <time>Pubblicato il: ${formatDate}</time>`
        article.appendChild(paragrafo)
    } else {
        alert('Titolo o paragrafo mancanti')
    }
});




