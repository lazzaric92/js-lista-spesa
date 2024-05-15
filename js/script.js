const shoppingList = ['pollo', 'zucchine', 'melanzane', 'fagiolini', 'pomodori', 'pasta', 'detersivo per i piatti', 'saponette'];
const ulEl = document.querySelector('main ul');

let index = 0;

while (index < shoppingList.length){
    const liEl = document.createElement('li');
    liEl.append(shoppingList[index]);
    ulEl.appendChild(liEl);
    index++;
}