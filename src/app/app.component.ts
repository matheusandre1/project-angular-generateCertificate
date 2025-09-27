import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./_components/navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { PrimaryButtonComponent } from "./_components/primary-button/primary-button.component";
import { SecoundaryButtonComponent } from "./_components/secoundary-button/secoundary-button.component";
import { ItemCertificateComponent } from "./_components/item-certificate/item-certificate.component";
import { BaseUiComponent } from "./_components/base-ui/base-ui.component";
import { CertificadosComponent } from "./pages/certificados/certificados.component";
import { CertificadoFormComponent } from "./pages/certificado-form/certificado-form.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, CommonModule, PrimaryButtonComponent, SecoundaryButtonComponent, ItemCertificateComponent, BaseUiComponent, CertificadosComponent, CertificadoFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'generate-certification';
  exibe: boolean = true;
}
