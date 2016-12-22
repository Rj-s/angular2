import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class DataService {

  private formData: string[] = [];
  public eventEmt = new EventEmitter<string>();

  constructor() { }

  setFormData(item: string) {
    this.formData.push(item);
  }

  getFormData() {
    return this.formData;
  }

  pushFormData(value: string) {
    this.eventEmt.emit(value);
  }
}
