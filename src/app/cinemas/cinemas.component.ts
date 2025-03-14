import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { CinemasModel } from '../../models/cinemas.model';
import { CinemasService } from '../../services/cinemas.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-cinemas',
  imports: [MatTableModule, NgIf],
  templateUrl: './cinemas.component.html',
  styleUrl: './cinemas.component.css'
})
export class CinemasComponent {
  displayedColumns: string[] = ['id', 'name', 'country', 'city'];
  dataSource : CinemasModel[] = CinemasService.getCinemas()
}
