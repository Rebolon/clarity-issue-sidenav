import {Component, ViewChild} from '@angular/core';
import {Wizard} from "clarity-angular";

@Component({
  selector: 'app-item-sub1',
  templateUrl: './sub1.component.html',
  styleUrls: ['./sub1.component.css']
})
export class Sub1Component {

  @ViewChild("wizard") wizard: Wizard;
  open: boolean = true;

  constructor() {
  }
}
