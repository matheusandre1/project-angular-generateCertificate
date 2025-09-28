import { Component, Input } from '@angular/core';
import { SecoundaryButtonComponent } from "../secoundary-button/secoundary-button.component";
import { Router} from '@angular/router';

@Component({
  selector: 'app-item-certificate',
  imports: [SecoundaryButtonComponent],
  templateUrl: './item-certificate.component.html',
  styleUrl: './item-certificate.component.css'
})
export class ItemCertificateComponent {
  @Input() nomeAluno: string = '';
  @Input() dataEmissao: string = '';
  @Input() id:string = '';


  constructor(private router: Router){}

  redirecionaCertificado(){
    this.router.navigate(['/certificados', this.id])
  }

}
