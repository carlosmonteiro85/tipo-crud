import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  currentRoute: string;

  constructor(private router: Router) {
    this.currentRoute = this.router.url;
  }
  ngOnInit(): void {
    this.router.navigate(['home']); // navega para a tela principal
  }

  setActive(route: string) {
    this.currentRoute = route;
  }

  isActive(route: string): boolean {
    return this.currentRoute === route;
  }
}
