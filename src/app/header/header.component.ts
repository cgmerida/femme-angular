import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  scroll = 0;
  screenSize = 0;

  constructor() { }

  ngOnInit() {
    if (typeof window !== undefined) {
      window.addEventListener('scroll', () => this._checkScroll());
      this.screenSize = window.innerHeight * .8;
    }

  }

  ngOnDestroy() {
    if (typeof window !== undefined) {
      window.removeEventListener('scroll', () => this._checkScroll());
    }
  }

  private _checkScroll() {
    if (typeof window !== undefined) {
      const doc = document.documentElement;
      this.scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    }

    // console.log(`${this.screenSize} >= ${this.scroll}`);
  }
}
