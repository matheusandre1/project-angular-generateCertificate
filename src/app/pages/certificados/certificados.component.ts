import { Component } from '@angular/core';
import { ItemCertificateComponent } from "../../_components/item-certificate/item-certificate.component";
import { SecoundaryButtonComponent } from "../../_components/secoundary-button/secoundary-button.component";
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-certificados',
  imports: [ItemCertificateComponent, SecoundaryButtonComponent, RouterLink],
  templateUrl: './certificados.component.html',
  styleUrl: './certificados.component.css'
})
export class CertificadosComponent {

}
