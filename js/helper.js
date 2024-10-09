const helper = {
  // DEVICE HELPER
  isTouchDevice:() => {
    const prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
    const mq = (query) => { window.matchMedia(query).matches; };
  
    if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
      return true;
    }
    const query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
    return mq(query);
  },

  // FRONT HELPER
  widthScrollbar: () => {
    const scrollbarWidth = window.innerWidth - document.body.clientWidth;
    document.body.style.setProperty('--scrollbarWidth', `${scrollbarWidth}px`);
  },
  getHeight: $container => $container.offsetHeight,
  setHeight: ($target, value) => $target.style.marginTop = `${value}px`,
  isInViewport : (element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= -500 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  },

  //INTERACTIVITÉ
  positionObjetByMouse: (e) => {
    const target = e.currentTarget;
    const offsetX = e.offsetX ? e.offsetX : e.touches[0].pageX;
    const offsetY = e.offsetY ? e.offsetY : e.touches[0].pageY;
    const x = offsetX / target.offsetWidth * 100;
    const y = offsetY / target.offsetHeight * 100;
    return {x, y};
  },

  // INPUTS
  validateEmail: (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  },
  
}

export default helper;



