import React, { useState } from 'react';

function Slides({slides}) {

  const [activeSlide, setActiveSlide] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(slides[0]);
  const [disableNextBtn, setDisableNext] = useState(false);
  const [disableResartBtn, setDisableRestart] = useState(true);
  const [disablePrevBtn, setDisabledPrev] = useState(true);

  const OnRestartBtn = () => {
    setActiveSlide(0);
    setCurrentSlide(slides[0]);
    setDisableNext(false);
    setDisableRestart(true);
    setDisabledPrev(true);
  }

  const OnNextBtn = () => {
    var curIndex = activeSlide;

    if (curIndex < slides.length - 1) {
      curIndex++;
      setActiveSlide(curIndex);
      setCurrentSlide(slides[curIndex]);
      setDisableRestart(false);
      setDisabledPrev(false);
    }

    if (curIndex === slides.length - 1) {
      setDisableNext(true);
    }
  }

  const OnPrevBtn = () => {
    var curIndex = activeSlide;

    if (curIndex > 0) {
      curIndex--;
      setActiveSlide(curIndex);
      setCurrentSlide(slides[curIndex]);
      setDisableNext(false);
    }

    if (curIndex === 0) {
      setDisabledPrev(true);
      setDisableRestart(true);
    }
  }


  return (
      <div>
          <div id="navigation" className="text-center">
              <button data-testid="button-restart" onClick={() => OnRestartBtn()} disabled={disableResartBtn} className="small outlined">Restart</button>
              <button data-testid="button-prev" onClick={() => OnPrevBtn()} disabled={disablePrevBtn} className="small">Prev</button>
              <button data-testid="button-next" onClick={() => OnNextBtn()} disabled={disableNextBtn} className="small">Next</button>
          </div>
          <div id="slide" className="card text-center">
              <h1 data-testid="title">{currentSlide.title}</h1>
              <p data-testid="text">{currentSlide.text}</p>
          </div>
      </div>
  );
}

export default Slides;
