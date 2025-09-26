window.pcs = function (selector) {
  'use strict';

  function getElement(selector) {
    return document.querySelector(selector);
  }

  function setCss(element, property, value) {
    //console.log('in setCss', property);
    element.style[property] = value;
  }

  function getCss(element, property) {
    //return element.style[property];
    return getComputedStyle(element)[property];
  }

  function on(element, event, callback) {
    element.addEventListener(event, callback);
  }

  function pickRandColor() {
    return `#${Math.floor(Math.random() * 16777216).toString(16).padStart(6, '0')}`;
  }

  function sparkle(timeOut = 5000, intervalNum = 1000) {
    let interval = setInterval(() => {
      setCss(element, 'background-color', pickRandColor());
    }, intervalNum);
    setTimeout(() => {
      clearInterval(interval);
    }, timeOut);
  };

  const element = getElement(selector);

  return {
    // element,
    css: function (property, value) {
      if (arguments.length === 1) {
        return getCss(element, property);
      } else {
        return setCss(element, property, value);
      }
    },
    on: (event, callback) => {
      on(element, event, callback);
    },
    click: (callback) => on(element, 'click', callback),
    hide: () => setCss(element, 'display', 'none'),
    show: () => setCss(element, 'display', 'block'),
    sparkle
  };
};


