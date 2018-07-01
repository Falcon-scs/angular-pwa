import { Injectable } from '@angular/core';
import { Book } from './interfaces';
import { Subject } from 'rxjs';

@Injectable()
export class NgxFlipbookService {

  prev = new Subject<void>();
  play = new Subject<void>();
  pause = new Subject<void>();
  next = new Subject<void>();

  book: Book;

  constructor() { }

}
