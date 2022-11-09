// FUNZIONI ****************************************************************

/**
 * Funzione uguale a document.querySelector() ma riassunta in meno caratteri
 * @param {string} querySelector Indica un selettore css valido
 * @returns 
 */
 function el(querySelector){
    let domElement;
    if(querySelector === ':root' || querySelector === 'root'){
        domElement = document.documentElement;
    }else{
        domElement = document.querySelector(querySelector);
    };
    return domElement;
};

/**
 * funzione che in automatico aggiunge la classe active all'elemento indicato 
 * tramite selettore css
 * @param {string} querySelector inserisci un selettore css valido
 */
function addActive(querySelector){
    const domElement = document.querySelector(querySelector);
    domElement.classList.remove('active');
    domElement.classList.add('active');
};

// COSTANTI ****************************************************************

const myBtnEl = el('button');
const cellContainerEl = el('.cell-container');
const rootEl = el(':root');

// EVENTI ******************************************************************

myBtnEl.addEventListener('click', function(){
    let difficulty = parseInt(el('select').value);
    rootEl.style.setProperty('--js-cell-number', difficulty);

    addActive('header');
    addActive('main .container');

    cellContainerEl.innerHTML = '';

});
