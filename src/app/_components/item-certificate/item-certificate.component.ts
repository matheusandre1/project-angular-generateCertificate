import { Component } from '@angular/core';
import { SecoundaryButtonComponent } from "../secoundary-button/secoundary-button.component";
import { Router} from '@angular/router';

@Component({
  selector: 'app-item-certificate',
  imports: [SecoundaryButtonComponent],
  templateUrl: './item-certificate.component.html',
  styleUrl: './item-certificate.component.css'
})
export class ItemCertificateComponent {
  id:string = "certificados/1"

  constructor(private router: Router){}

  redirecionaCertificado(){
    this.router.navigate(['/certificados', 2])
  }

}
