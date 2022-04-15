import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ac-color-picker',
  templateUrl: './color-picker.component.html',
})
export class ColorPickerComponent implements OnInit {

  @Input() colors: string[] | undefined = [];
  @Input() selectedColor: string | null = null;
  @Output() selectColor = new EventEmitter<string|null>();

  ngOnInit(): void { }

  chooseColor(color: string) {
    const c = this.selectedColor === color ? null : color;
    this.selectColor.emit(c);

  }

}
