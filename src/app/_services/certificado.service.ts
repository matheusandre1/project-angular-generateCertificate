import { Injectable } from '@angular/core';
import { Certificado } from '../Interfaces/certficado';

@Injectable({
  providedIn: 'root'
})
export class CertificadoService {

  certificados: Certificado[] = []

  constructor() { }

  adicionarCertificados(certificado: Certificado)
  {
    this.certificados.unshift({...certificado})
    console.log(this.certificados)
    localStorage.setItem('certificados', JSON.stringify(this.certificados))

  }
}
