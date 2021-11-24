// 1
console.log('__exo1__');
let exo1 = document.querySelector('h1')
exo1.addEventListener('dblclick', () => {
    exo1.style.backgroundColor = 'red'
    exo1.style.color = 'white'
})

// 2
console.log('__exo2__');
let exo2 = document.querySelector('h3')
// fonctionne pas attendre correction
// exo2.innerText
// console.log(exo2);
exo2.addEventListener('mouseover', () => {
    // let text = exo2.innerText.substring(1)
    // // text.substring(0, 1)
    // exo2.innerText = text
    exo2.innerText = exo2.textContent.substring(0, exo2.textContent.length-1)
    // exo2.style.color = 'red'
})
// pour diminuer la taille
let myH3 = document.querySelector('h3')
myH3.addEventListener('mouseover', () => {
    let diminue = window.getComputedStyle(myH3).getPropertyValue('font-size');
    // console.log(window.getComputedStyle(myH3));
    let tailleActuel = parseFloat(diminue)
    myH3.style.fontsize = (tailleActuel-1) + 'px';
})
// 3
let exo3 = document.querySelector('p')
// exo3.addEventListener('click', () => {
//     exo3.style.backgroundColor = 'blue'
//     exo3.style.color = 'gold'
// }
// )
// correction
// lancer un compteur

let i = 0
exo3.addEventListener('click', () => {
    console.log('test');
    if (i % 2 == 0){
        exo3.style.backgroundColor = 'blue'
        exo3.style.color = 'gold'
    } else{
        exo3.style = ''
    }
    i++
})
// exo3.addEventListener('click', () => {
//     if (exo3.style.backgroundColor == '' &&)
// })

