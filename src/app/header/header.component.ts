import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  collapsed: boolean = true;

  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: any) {
    this.featureSelected.emit(feature);
  }
}
