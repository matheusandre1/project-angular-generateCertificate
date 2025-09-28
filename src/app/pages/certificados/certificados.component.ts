import { Component, OnInit } from '@angular/core';
import { ItemCertificateComponent } from "../../_components/item-certificate/item-certificate.component";
import { SecoundaryButtonComponent } from "../../_components/secoundary-button/secoundary-button.component";
import { RouterLink } from '@angular/router';
import { CertificadoService } from '../../_services/certificado.service';
import { Certificado } from '../../Interfaces/certficado';


@Component({
  selector: 'app-certificados',
  imports: [ItemCertificateComponent, SecoundaryButtonComponent, RouterLink],
  templateUrl: './certificados.component.html',
  styleUrl: './certificados.component.css'
})
export class CertificadosComponent implements OnInit{

  certificados: Certificado[] = [];
  constructor(private certificadoService: CertificadoService){}

  ngOnInit(): void {
    this.certificados = this.certificadoService.certificados;

  }

}
