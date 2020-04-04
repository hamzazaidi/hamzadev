import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';


function initTypeText(phrases, textEle, cursorEle) {
  const _CONTENT = phrases;

  // Current sentence being processed
  let _PART = 0;

  // Character number of the current sentence being processed
  let _PART_INDEX = 0;

  // Holds the handle returned from setInterval
  let _INTERVAL_VAL;

  // Element that holds the text
  const _ELEMENT = textEle;

  // Cursor element
  const _CURSOR = cursorEle;

  // Implements typing effect
  function Type() {
    // Get substring with 1 characater added
    const text = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
    _ELEMENT.innerHTML = text;
    _PART_INDEX++;

    // If full sentence has been displayed then start to delete the sentence after some time
    if (text === _CONTENT[_PART]) {
      // Hide the cursor
      _CURSOR.style.display = 'none';

      clearInterval(_INTERVAL_VAL);
      setTimeout(() => {
        _INTERVAL_VAL = setInterval(Delete, 50);
      }, 1000);
    }
  }

  // Implements deleting effect
  function Delete() {
    // Get substring with 1 characater deleted
    const text = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
    _ELEMENT.innerHTML = text;
    _PART_INDEX--;

    // If sentence has been deleted then start to display the next sentence
    if (text === '') {
      clearInterval(_INTERVAL_VAL);

      // If current sentence was last then display the first one, else move to the next
      if (_PART === (_CONTENT.length - 1)) {
        _PART = 0;
      } else {
        _PART++;
      }

      _PART_INDEX = 0;

      // Start to display the next sentence after some time
      setTimeout(() => {
        _CURSOR.style.display = 'inline-block';
        _INTERVAL_VAL = setInterval(Type, 100);
      }, 200);
    }
  }

  // Start the typing effect on load
  _INTERVAL_VAL = setInterval(Type, 100);
}

@Component({
  selector: 'app-typing-text',
  templateUrl: './typing-text.component.html',
  styleUrls: ['./typing-text.component.scss']
})
export class TypingTextComponent implements AfterViewInit {
  @Input() phrases: string[];
  @ViewChild('text') _ELEMENT: ElementRef;
  @ViewChild('cursor') _CURSOR: ElementRef;
  constructor() { }
  ngAfterViewInit(): void {
    initTypeText(this.phrases, this._ELEMENT.nativeElement, this._CURSOR.nativeElement);
  }

}
