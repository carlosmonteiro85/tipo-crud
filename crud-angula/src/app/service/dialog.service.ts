import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  showAlert(icon: SweetAlertIcon = 'info', text: string = 'Tem certeza que deseja fazer isso?'): Promise<boolean> {
    return Swal.fire({
      icon: icon,
      text: text,
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