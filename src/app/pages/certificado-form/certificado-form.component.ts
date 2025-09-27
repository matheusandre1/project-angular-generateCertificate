import { Component } from '@angular/core';
import { SecoundaryButtonComponent } from '../../_components/secoundary-button/secoundary-button.component';
import { PrimaryButtonComponent } from "../../_components/primary-button/primary-button.component";

@Component({
  selector: 'app-certificado-form',
  imports: [SecoundaryButtonComponent, PrimaryButtonComponent],
  templateUrl: './certificado-form.component.html',
  styleUrl: './certificado-form.component.css'
})
export class CertificadoFormComponent {

}
