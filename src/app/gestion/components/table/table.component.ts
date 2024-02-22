import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  /**Variables */
  @Input()
  informacion: any; /**We need the array of persons that are already registered */
  @Output()
  deleteEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  editEvent: EventEmitter<any> = new EventEmitter<any>();
  /**Life cicle functions */
  constructor() {}
  ngOnInit() {}
  /**Functions */

  eliminate(persona: any) {
    this.deleteEvent.emit(persona);
  }

  edit(persona: any) {
    this.editEvent.emit(persona);
  }
}
