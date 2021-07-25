import { Component, OnInit, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;
  @Input() count: number;
  @Input() listItems: Array<any>;
  @Output() onSelect: EventEmitter<any> = new EventEmitter<any>();
  public isOpened = false;
  constructor() { }

  ngOnInit() {}

  public toggleAccordion(): void {
    this.isOpened = !this.isOpened;
  }

  public onSelectItem(item){
    const selectedItemDetails = {
      location: {
        name: this.title,
        address: this.description
      },
      bike: item
    };
    this.onSelect.emit(selectedItemDetails);
  }

}
