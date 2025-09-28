import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-secoundary-button',
  imports: [CommonModule],
  templateUrl: './secoundary-button.component.html',
  styleUrl: './secoundary-button.component.css'
})
export class SecoundaryButtonComponent {
  @Input() textoSecundario: string = '';
  @Input() phclass: string = '';
  @Input() disabled: boolean = false;

}
