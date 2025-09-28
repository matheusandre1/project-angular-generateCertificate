import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterModule, NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  ngOnInit(): void {
    console.log("Inicializou")
  }
}
