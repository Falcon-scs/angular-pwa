import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
      // should work on mobile devices..
      (window.screen as any).orientation
        .lock('landscape')
        .catch(function(error) {
          console.log('error', error);
        });
  }

  ngOnDestroy() {
    (window.screen as any).orientation
        .lock('portrait')
        .catch(function(error) {
          console.log('error', error);
        });
  }

}
