import { Component } from '@angular/core';

@Component({
  selector: 'app-teclado',
  templateUrl: './teclado.component.html',
  styleUrl: './teclado.component.css'
})
export class TecladoComponent {
resultado = "";

clicar(valor: string) {
  if (valor === 'CE') {
    this.limpar();
  } else if (valor === '=') {
    this.finalizar();
  } else {
    this.resultado += valor;
  }
}

limpar() {
  this.resultado = "";
}

finalizar() {
  try {
    this.resultado = eval(this.resultado);
  } catch (e) {
    this.resultado = "Erro";
  }
}

}
