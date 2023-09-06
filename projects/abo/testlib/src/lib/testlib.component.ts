import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-testlib',
  template: ` <p>Fixed version of testlib component.</p> `,
  styles: [
    `
      p {
        color: blue;
      }
    `,
  ],
})
export class TestlibComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
