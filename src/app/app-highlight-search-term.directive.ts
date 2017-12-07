import { Directive, ElementRef, Input, OnChanges, AfterViewInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlightSearchTerm]'
})
export class AppHighlightSearchTermDirective implements OnChanges, AfterViewInit {

  // tslint:disable-next-line:no-input-rename
  @Input('appHighlightSearchTerm') searchTerm: string;

  private OPEN_MARK = '<mark>';
  private CLOSE_MARK = '</mark>';

  constructor(private el: ElementRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.highlightSearchTerm();
  }

  ngAfterViewInit(): void {
    this.highlightSearchTerm();
  }

  highlightSearchTerm() {

    const htmlNode = this.el.nativeElement as HTMLElement;

    // tslint:disable-next-line:curly
    if (!htmlNode.innerHTML) return;

    this.removePreviouslyMarkedTextInNode(htmlNode);

    if (this.searchTerm) {
      this.markMatchedTextTokens(htmlNode);
    }
  }

  private removePreviouslyMarkedTextInNode(htmlNode: HTMLElement) {
    const markingPattern = new RegExp(`${this.OPEN_MARK}|${this.CLOSE_MARK}`, 'g');
    const cleanText = htmlNode.innerHTML.replace(markingPattern, '');
    htmlNode.innerHTML = cleanText;
  }

  private markMatchedTextTokens(htmlNode: HTMLElement) {
    const escapeRegex = this.searchTerm.replace('/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g', '\\$&');
    const searchRegexUniqueTokens = new RegExp(escapeRegex, 'gi');
    const newHtml = htmlNode.innerHTML.replace(searchRegexUniqueTokens, match => {
      return `${this.OPEN_MARK}${match}${this.CLOSE_MARK}`;
    });
    htmlNode.innerHTML = newHtml;
  }

}

