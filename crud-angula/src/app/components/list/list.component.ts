// list.component.ts

import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { DialogService } from 'src/app/service/dialog.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { AlertaComponent } from '../alerta/alerta.component';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  usuarios: Usuario[] = [];
  alerta = new AlertaComponent();

  constructor(
    private dialogService: DialogService,
    private usuariosService: UsuarioService
  ) {}
  
  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.usuariosService.findAll().subscribe(response => {
      this.usuarios = response;
    }, error => {
      console.log(error);
    });
  }

  delete(id: string){
    this.usuariosService.delete(id).subscribe(response => {
      this.findAll();

      this.alerta.icon = 'success';
      this.alerta.text = 'Usuário deletado com sucesso!';
      this.alerta.showAlert();

    }, error => {
      this.alerta.icon = 'error';
      this.alerta.text = 'Erro ao deletar usuário!';
      this.alerta.showAlert();
      console.log(error);
    });
  }
  
  showDialog(usuario: Usuario) {
    console.log('Show dialog for user:', usuario);
    
    this.dialogService.showAlert().then(result => {
      if (result) {
        this.delete(`${usuario.id}`)
      }
    }).catch(error => {
      console.error('Erro ao exibir o diálogo:', error);
    });
  }
}