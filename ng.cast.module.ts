import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';
import { NgCastComponent } from './ng-cast.component';
import { NgCastService } from './shared/ng-cast.service';

@NgModule({
  imports: [
    CommonModule,
      MatIconModule,
  ],
  exports: [NgCastComponent],
  providers: [NgCastService],
  declarations: [NgCastComponent]
})
export class NgCastModule { }
