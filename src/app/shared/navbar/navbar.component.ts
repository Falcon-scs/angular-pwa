import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() menu = new EventEmitter<void>();
  @Output() share = new EventEmitter<void>();

  @Input() title = '';

  constructor() { }

  ngOnInit() {
  }

}
