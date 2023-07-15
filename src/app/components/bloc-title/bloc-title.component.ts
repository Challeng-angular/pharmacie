import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bloc-title',
  templateUrl: './bloc-title.component.html',
  styleUrls: ['./bloc-title.component.scss'],
})
export class BlocTitleComponent {
  @Input() title: string;
  @Input() isDisplayFirstPict: boolean = false;
}
