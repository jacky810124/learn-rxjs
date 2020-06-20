import React from "react";
import styled from "styled-components";

import { fromEvent, interval } from "rxjs";
import {
  bufferTime,
  bufferCount,
  filter,
  map,
  take,
  exhaust,
  count,
} from "rxjs/operators";

class MultipleClick extends React.Component {
  setButtonElement = (element) => {
    this.buttonElement = element;
  };
  componentDidMount() {
    if (this.buttonElement) {
      const clicks = fromEvent(this.buttonElement, "click");
      clicks.pipe(bufferCount(3)).subscribe(() => console.log("3 clicks"));
      // clicks
      // .pipe(map(() => interval(1000).pipe(take(3))))
      // .pipe(exhaust())
      // .pipe(bufferTime(1000))
      // .pipe(filter((events) => events.length >= 3))
      // .subscribe(() => console.log(123));
    }
  }
  render() {
    return (
      <Page>
        <Button ref={this.setButtonElement}>Click Me 😜</Button>
      </Page>
    );
  }
}

const Page = styled.div``;

const Button = styled.button``;

export default MultipleClick;
