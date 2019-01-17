import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { NgCastService } from './shared/ng-cast.service';

interface CastingStatus {
  casting: any;
}

@Component({
  selector: 'ng-cast',
  templateUrl: './ng-cast.component.html',
  styleUrls: [
    './ng-cast.component.scss'
  ]
})
export class NgCastComponent implements OnInit {
  castingStatus: CastingStatus;

  @Output() connected = new EventEmitter<null>();

  constructor(
    private ngCastService: NgCastService
  ) {
  }

  ngOnInit() {

    const script = window['document'].createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', 'https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1');
    window['document'].body.appendChild(script);

    const ngCastService = this.ngCastService;
    window['__onGCastApiAvailable'] = function (isAvailable) {
      if (isAvailable) {
        ngCastService.initializeCastApi();
      }
    };

    this.castingStatus = this.ngCastService.getStatus();
  }

  openSession() {
    const discovery: Observable<string> = this.ngCastService.discoverDevices();
    discovery.subscribe(status => {
      console.log('Disc');
      if (status === 'CONNECTED') {
        this.connected.emit(null);
      }
    });
  }

  closeSession() {
    this.ngCastService.stop();
  }

}
