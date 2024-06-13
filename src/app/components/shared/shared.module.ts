import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconDirective } from '../../directives/icon.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

const IMPORTS = [
  MatButtonModule,
  FormsModule,
  ReactiveFormsModule,
  MatInputModule,
];

const DECLARATIONS = [
  IconDirective,
];

@NgModule({
  imports: [
    ...IMPORTS,
    CommonModule,
    RouterLink,
  ],
  declarations: [...DECLARATIONS],
  exports: [...IMPORTS, ...DECLARATIONS],
})
export class SharedModule {}
