let count = 0;

const btns = document.querySelectorAll('.btn');
const value = document.querySelector('#value');

Array.from(btns).map((btn) => {
    btn.addEventListener('click', (e) => {
        const style = e.currentTarget.classList;
        if (style.contains('decrease')) {
            count--;
        }else if (style.contains('increase')){
            count++;
            
        }else{
            count = 0;
        }
        
        if (count < 0) {
            value.classList.add('red');
        }else if(count > 0){
            value.classList.add('green');
        }else{
            value.classList.remove('green');
            value.classList.remove('red');
        }

        value.innerHTML = count;
    });
});