import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./_components/navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { BaseUiComponent } from "./_components/base-ui/base-ui.component";
import { CertificadoService } from './_services/certificado.service';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, CommonModule, BaseUiComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'generate-certification';
  exibe: boolean = true;

  constructor(private certificadoService: CertificadoService){}
  ngOnInit(): void {
    const certificados = localStorage.getItem('certificados');
    this.certificadoService.certificados = certificados ? JSON.parse(certificados) : [];

    console.log(this.certificadoService.certificados)
  }
}
