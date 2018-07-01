import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private iconReg: MatIconRegistry, private sanitizer: DomSanitizer) {
    iconReg.addSvgIcon('options', sanitizer.bypassSecurityTrustResourceUrl('./assets/svg/ic_options.svg'));
    iconReg.addSvgIcon('home', sanitizer.bypassSecurityTrustResourceUrl('./assets/svg/ic_home.svg'));
    iconReg.addSvgIcon('chat', sanitizer.bypassSecurityTrustResourceUrl('./assets/svg/ic_chat.svg'));
    iconReg.addSvgIcon('approve', sanitizer.bypassSecurityTrustResourceUrl('./assets/svg/ic_approve.svg'));
    iconReg.addSvgIcon('back', sanitizer.bypassSecurityTrustResourceUrl('./assets/svg/ic_back_arrow.svg'));
    iconReg.addSvgIcon('check', sanitizer.bypassSecurityTrustResourceUrl('./assets/svg/ic_check.svg'));
    iconReg.addSvgIcon('close', sanitizer.bypassSecurityTrustResourceUrl('./assets/svg/ic_close.svg'));
    iconReg.addSvgIcon('complete', sanitizer.bypassSecurityTrustResourceUrl('./assets/svg/ic_complete.svg'));
    iconReg.addSvgIcon('contract', sanitizer.bypassSecurityTrustResourceUrl('./assets/svg/ic_contract.svg'));
    iconReg.addSvgIcon('expand', sanitizer.bypassSecurityTrustResourceUrl('./assets/svg/ic_expand.svg'));
    iconReg.addSvgIcon('grid', sanitizer.bypassSecurityTrustResourceUrl('./assets/svg/ic_grid.svg'));
    iconReg.addSvgIcon('left-arrow', sanitizer.bypassSecurityTrustResourceUrl('./assets/svg/ic_left_arrow.svg'));
    iconReg.addSvgIcon('message', sanitizer.bypassSecurityTrustResourceUrl('./assets/svg/ic_message.svg'));
    iconReg.addSvgIcon('pause', sanitizer.bypassSecurityTrustResourceUrl('./assets/svg/ic_pause.svg'));
    iconReg.addSvgIcon('play', sanitizer.bypassSecurityTrustResourceUrl('./assets/svg/ic_play.svg'));
    iconReg.addSvgIcon('refresh', sanitizer.bypassSecurityTrustResourceUrl('./assets/svg/ic_refresh.svg'));
    iconReg.addSvgIcon('right-arrow', sanitizer.bypassSecurityTrustResourceUrl('./assets/svg/ic_right_arrow.svg'));
    iconReg.addSvgIcon('send', sanitizer.bypassSecurityTrustResourceUrl('./assets/svg/ic_send.svg'));
    iconReg.addSvgIcon('share', sanitizer.bypassSecurityTrustResourceUrl('./assets/svg/ic_share.svg'));
    iconReg.addSvgIcon('warning', sanitizer.bypassSecurityTrustResourceUrl('./assets/svg/ic_warning.svg'));
    iconReg.addSvgIcon('satisfied', sanitizer.bypassSecurityTrustResourceUrl('./assets/svg/ic_satisfied.svg'));
    iconReg.addSvgIcon('request-changes', sanitizer.bypassSecurityTrustResourceUrl('./assets/svg/ic_req_changes.svg'));
    iconReg.addSvgIcon('heart', sanitizer.bypassSecurityTrustResourceUrl('./assets/svg/ic_heart.svg'));
  }

  getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
