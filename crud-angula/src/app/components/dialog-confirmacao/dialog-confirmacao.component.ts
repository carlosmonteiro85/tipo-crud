// dialog-confirmacao.component.ts

import { Component, Input } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Component({
  selector: 'app-dialog-confirmacao',
  templateUrl: './dialog-confirmacao.component.html',
  styleUrls: ['./dialog-confirmacao.component.css']
})
export class DialogConfirmacaoComponent {

  @Input() icon: SweetAlertIcon = 'info';
  @Input() text: string = 'Tem certeza que deseja fazer isso?';

  showAlert(): Promise<boolean> {
    return Swal.fire({
      icon: this.icon,
      text: this.text,
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
      customClass: {
        container: 'my-swal-container',
        popup: 'my-swal-popup',
        title: 'my-swal-title',
        confirmButton: 'my-swal-confirm-button',
        cancelButton: 'my-swal-cancel-button'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        return true; // Resolvendo a promessa com true se confirmado
      } else {
        return false; // Resolvendo a promessa com false se cancelado ou fechado
      }
    }).catch(error => {
      console.error('Erro ao exibir o diálogo:', error);
      return false; // Retornar false em caso de erro
    });
  }
}
