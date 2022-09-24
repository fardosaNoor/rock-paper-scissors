const contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];
const input= document.querySelector('input');
const para = document.querySelector('p');
const btn = document.querySelector('button');

let searchName;
let splitcontact;

btn.addEventListener('click', function(){
    searchName = input.value.toLowerCase();
    input.value = '';
    input.focus();
    for(i = 0; i < contacts.length; i++){
    let splitcontact = contacts[i].split(':');
    if(splitcontact[0].toLowerCase()===searchName){
        para.textContent = splitcontact[0] + '\'s number is ' + splitcontact[1] + '.';
        break;
    }else if(i === contacts.length - 1){
        para.textContent = 'contact was not found.'
    }
  }
})



/*const countdown = document.getElementById('countdown')
let countdownDisplay;
let parag

let i = 10;
while(i) alert(i--);*/








