import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import { AlertaComponent } from '../alerta/alerta.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  usuarioRequest: Usuario = {
    nome: '',
    cpf: '',
    telefone: '',
    email: ''
  };

  nome = new FormControl(null, Validators.required);
  cpf = new FormControl(null, Validators.required);
  alerta = new AlertaComponent();

  validaCampos(): boolean {
    return this.nome.valid && this.cpf.valid;
  }
  
  create() {
    this.usuarioServer.create(this.usuarioRequest).subscribe(response => {
      this.alerta.icon = 'success';
      this.alerta.text = 'Usuário criado com sucesso!';
      this.alerta.showAlert();
    }, error => {
      this.alerta.icon = 'error';
      this.alerta.text = 'Erro ao criar usuário!';
      this.alerta.showAlert();
      console.log(error);
    });

    console.log("Persistir o usuário " + this.usuarioRequest.nome);
  }
  constructor(private usuarioServer: UsuarioService) { }
  ngOnInit(): void { }
}