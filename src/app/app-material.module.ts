import { NgModule } from '@angular/core';
import { MatButtonModule, MatInputModule, MatFormFieldModule, MatSelectModule,
  MatIconModule, MatMenuModule, MatDialogModule, MatSidenavModule, MatTabsModule  } from '@angular/material';

@NgModule({
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatTabsModule
  ],
  exports: [
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatTabsModule
  ],
})
export class AppMaterialModule { }
