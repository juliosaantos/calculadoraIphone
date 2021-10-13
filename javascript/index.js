function Calculadora() {
    this.display = document.querySelector('#display');

    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    };

    this.capturaCliques = () => {
    document.addEventListener('click', event => {
        const el = event.target;
        if(el.classList.contains('btn-num')) this.addNumDisplay(el);
        if(el.classList.contains('btn-clear')) this.clear();
        if(el.classList.contains('btn-equal')) this.realizaConta();
    });
    };

    this.capturaEnter = () => {
        this.display.addEventListener('keypress', event => {
            if(event.keyCode === 13) {
                this.realizaConta();
            }
        });
    };

    this.realizaConta = () => {
        try{
            const conta = eval(this.display.value);

            if(!conta) {
                alert('Conta invalida!');
                return;
            }
          this.display.value = conta;  
        } catch(error) {
            alert('Conta invalida');
            return;
        }
    };

    this.clear = el => {
        this.display.value = '';
    };

    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    };

    
}

const calculadora = new Calculadora();
calculadora.inicia();