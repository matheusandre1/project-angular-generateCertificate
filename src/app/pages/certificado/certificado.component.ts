import { Component, OnInit } from '@angular/core';
import { SecoundaryButtonComponent } from '../../_components/secoundary-button/secoundary-button.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CertificadoService } from '../../_services/certificado.service';
import { Certificado } from '../../Interfaces/certficado';

@Component({
  selector: 'app-certificado',
  imports: [SecoundaryButtonComponent, RouterLink],
  templateUrl: './certificado.component.html',
  styleUrl: './certificado.component.css'
})
export class CertificadoComponent implements OnInit{
 id: string | null = null;
 certificado: Certificado | undefined;
  constructor(private certificadoService: CertificadoService, private route: ActivatedRoute){}

 ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    this.id =params.get('id');
    this.certificado = this.certificadoService.certificados.find(item => item.id === this.id)
  })
 }
}
