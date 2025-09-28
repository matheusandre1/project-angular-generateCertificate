import { Component } from '@angular/core';
import { SecoundaryButtonComponent } from '../../_components/secoundary-button/secoundary-button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-certificado',
  imports: [SecoundaryButtonComponent, RouterLink],
  templateUrl: './certificado.component.html',
  styleUrl: './certificado.component.css'
})
export class CertificadoComponent {

}
