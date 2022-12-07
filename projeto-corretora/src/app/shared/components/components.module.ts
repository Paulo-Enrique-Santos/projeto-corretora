import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '@components/header';
import { FooterComponent } from '@components/footer';

const components = [
  HeaderComponent,
  FooterComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule
  ],
  exports: [...components]
})
export class ComponentsModule { }
