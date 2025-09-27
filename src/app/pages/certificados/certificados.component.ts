import { Component } from '@angular/core';
import { SecoundaryButtonComponent } from "../../_components/secoundary-button/secoundary-button.component";
import { ItemCertificateComponent } from "../../_components/item-certificate/item-certificate.component";

@Component({
  selector: 'app-certificados',
  imports: [SecoundaryButtonComponent, ItemCertificateComponent],
  templateUrl: './certificados.component.html',
  styleUrl: './certificados.component.css'
})
export class CertificadosComponent {

}
