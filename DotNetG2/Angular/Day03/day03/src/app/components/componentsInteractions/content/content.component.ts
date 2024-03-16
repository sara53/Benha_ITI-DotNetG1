import { Component, Input, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { CompletionTriggerKind } from 'typescript';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit, OnChanges, OnDestroy {
  constructor() {
    console.log('1-ctor');
  }
  ngOnDestroy(): void {
    console.log('ondestory');
  }
  ngOnInit(): void {
    console.log('2-On-init');
  }

  ngOnChanges(changes: any) {
    console.log(changes);
  }
  @Input() contentData: string = '';
  @Input() loginData: any;
}
