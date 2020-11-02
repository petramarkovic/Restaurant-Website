const form = document.getElementById('myForm');
const inputs = document.querySelectorAll('#inputForm');
const warn = document.getElementById('warning');

myForm.addEventListener('submit', addReservation);

function addReservation(e){
    e.preventDefault();
    
    inputs.forEach(input => {
        if(input.value === ''){
            warn.classList = 'warning';
            warn.innerHTML = 'You must fill in all fields!';
            setTimeout(() => warn.remove(), 3000);
        } else {
            warn.classList = 'complete';
            warn.innerHTML = `You have reserved a table!`;
            setTimeout(() => warn.remove(), 5000);
        }

    });

}

