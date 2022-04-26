import { Injectable, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  @Output() clickedCategory: EventEmitter<string> = new EventEmitter();
  search = new BehaviorSubject<string>('');

  constructor() { }
}
