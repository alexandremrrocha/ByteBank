import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: `app-nova-transferencia`,
    templateUrl: `./nova-transferencia.component.html`,
    styleUrls: [`./nova-transferencia.component.scss`]
})

export class NovaTransferenciaComponent {

    @Output() aoTransferir = new EventEmitter<any>();

    valor: number;
    destino: string;

    transferir() {
        console.log('Solicitada a tranferencia')
        const valorEmitir = { valor: this.valor, destino: this.destino };
        this.aoTransferir.emit(valorEmitir);
        this.limparCampos();
    }

    limparCampos(){
        this.valor = null;
        this.destino = ' ' 
      }
}