// list.component.ts

import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { DialogService } from 'src/app/service/dialog.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  // usuarios: MockData[] = MOCK_DATA; para usar como mock
  // usuarios: Usuario[] = []; 
  usuarios: Usuario[] = MOCK_DATA; 
  constructor(private dialogService: DialogService) {}
  
  ngOnInit(): void {
    // Inicialmente, definimos os usuários com MOCK_DATA
  }
  
  showDialog(usuario: Usuario) {
    console.log('Show dialog for user:', usuario);
    
    // Exemplo de como chamar o diálogo de confirmação usando o serviço
    this.dialogService.showAlert().then(result => {
      if (result) {
        console.log(`Usuário ${usuario.nome} confirmou a exclusão`);
        // Lógica para excluir o usuário aqui
      } else {
        console.log(`Usuário ${usuario.nome} cancelou a exclusão`);
        // Lógica para não excluir o usuário aqui
      }
    }).catch(error => {
      console.error('Erro ao exibir o diálogo:', error);
    });
  }
}

// interface MockData {
//   id: number;
//   nome: string;
//   cpf: string;
//   telefone: string;
//   email: string;
// }

const MOCK_DATA: Usuario[] = [
  {
    id: 1,
    nome: 'João',
    cpf: '123.456.789-10',
    telefone: '1234-5678',
    email: 'joao.com'
  },
  {
    id: 2,
    nome: 'Maria',
    cpf: '123.456.789-10',
    telefone: '1234-5678',
    email: 'maria.com'
  },
  {
    id: 3,
    nome: 'José',
    cpf: '123.456.789-10',
    telefone: '1234-5678',
    email: 'jose.com'
  },
];