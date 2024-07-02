import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import { AlertaComponent } from '../alerta/alerta.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  usuarioRequest: Usuario = {
    id: '',
    nome: '',
    cpf: '',
    telefone: '',
    email: ''
  };

  nome = new FormControl(null, Validators.required);
  cpf = new FormControl(null, Validators.required);
  alerta = new AlertaComponent();


  constructor(
    private usuarioServer: UsuarioService,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.usuarioRequest.id = this.router.snapshot.paramMap.get('id');
    this.usuarioServer.findById(this.usuarioRequest.id).subscribe(response => {

      // TODO criar tratamento
      // if(response.status === 404 ){
      //   this.alerta.icon = 'warning';
      //   this.alerta.text = ;
      //   this.alerta.showAlert();
      this.usuarioRequest = response;
      console.log(this.usuarioRequest);
      // }
    });
  }

  update(): void {
    this.usuarioServer.update(this.usuarioRequest).subscribe(response => {
      // this.alerta.icon = 'success';
      // this.alerta.text = 'Usuário criado com sucesso!';
      // this.alerta.showAlert();
    }, error => {
      // this.alerta.icon = 'error';
      // this.alerta.text = 'Erro ao criar usuário!';
      // this.alerta.showAlert();
      // console.log(error);
    });

    console.log("Persistir o usuário " + this.usuarioRequest.nome);
  }

}
