import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmileyComponent } from './smiley/smiley.component';
import { RectComponent } from './rect/rect.component';
import { LineComponent } from './line/line.component';
import { GdiComponent } from './gdi/gdi.component';  
import { EllipseComponent } from './ellipse/ellipse.component';

@NgModule({
  declarations: [
        LineComponent,RectComponent,EllipseComponent,
        SmileyComponent,GdiComponent
    ],
    exports: [
        LineComponent,RectComponent,EllipseComponent,
        SmileyComponent,GdiComponent
    ],
    imports:[ ],
    providers:[ ],
})
export class GraphicsModule { }
