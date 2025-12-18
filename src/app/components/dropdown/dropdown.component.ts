import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

export type Page = { mostPopular: string[]; otherSpecialties: string[] };

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent {
  @Input() pages: Page[] = [];
  @Input() leftTitle = 'Most popular';
  @Input() rightTitle = 'Other Specialties';

  @Output() itemSelected = new EventEmitter<string>();

  currentPageIndex = 0;

  selectItem(e: Event, value: string) {
    e.preventDefault();
    e.stopPropagation();
    this.itemSelected.emit(value);
  }

  prev() {
    this.currentPageIndex = Math.max(0, this.currentPageIndex - 1);
  }

  next() {
    this.currentPageIndex = Math.min(this.pages.length - 1, this.currentPageIndex + 1);
  }

  goTo(i: number) {
    this.currentPageIndex = i;
  }

  get allItems(): string[] {
    return this.pages.flatMap((p) => [
      ...(p?.mostPopular ?? []),
      ...(p?.otherSpecialties ?? []),
    ]);
  }
}
