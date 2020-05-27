import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './content/list/list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    ListComponent,
  ],
  imports: [CommonModule, LayoutRoutingModule, ReactiveFormsModule],
  exports: [ContentComponent, HeaderComponent, FooterComponent],
})
export class LayoutModule {}
