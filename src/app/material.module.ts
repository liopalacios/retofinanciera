import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule,MatTabsModule } from '@angular/material';
const matSlider = [MatSliderModule]
const matTabs = [MatTabsModule]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    matSlider,matTabs
  ],
  exports: [
    matSlider,matTabs
  ]
})
export class MaterialModule { }
