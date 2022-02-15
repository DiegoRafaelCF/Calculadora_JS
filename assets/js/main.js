(function myScope() {

  function Calc() {
    this.display = document.querySelector('.display');

    this.start = () => {
      this.clickButtons()
    };

    this.clearDisplay = () => {
      this.display.value = '';
    };

    this.clearLastValue = () => {
      this.display.value = this.display.value.slice(0, -1)
    };

    this.equals = () => {
      let count = this.display.value;
      try {
        count = eval(count);

        if(!count) {
          alert('Conta inválida')
          return;
        }

        this.display.value = count;
      } catch(e) {
        alert('Conta Inválida');
        return;
      }
    };

    this.valParaDisplay = (el) => {
      this.display.value += el
    };

    this.clickButtons = () => {
      document.addEventListener('click', function(e) {
        let el = e.target;
          
        if(el.classList.contains('btn-num')) {
          this.valParaDisplay(el.innerText)
        }

        if(el.classList.contains('btn-clear')) {
          this.clearDisplay()
        }

        if(el.classList.contains('btn-del')) {
          this.clearLastValue()
        }

        if(el.classList.contains('btn-eq')) {
          this.equals()
        }

      }.bind(this))
    };
  }

  const calculadora = new Calc();
  calculadora.start()

})()