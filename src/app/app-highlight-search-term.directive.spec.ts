import { AppHighlightSearchTermDirective } from './app-highlight-search-term.directive';
import { ElementRef } from '@angular/core';

describe('AppHighlightSearchTermDirective', () => {
  it('should create an instance', () => {
    const el = new ElementRef(new Object());
    const directive = new AppHighlightSearchTermDirective(el);
    expect(directive).toBeTruthy();
  });
});
