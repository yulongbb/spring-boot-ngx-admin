import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-dashboard-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent {
  @Input() summary: { title: string; value: number }[];
}
