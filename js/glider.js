// new Glider(document.querySelector('.glider'));

new Glider(document.querySelector('.glider'), {

    // `auto` allows automatic responsive
    // width calculations
    slidesToShow: 'auto',
    slidesToScroll: 'auto',
  
    // should have been named `itemMinWidth`
    // slides grow to fit the container viewport
    // ignored unless `slidesToShow` is set to `auto`
    itemWidth: 350,
  
    // if true, slides wont be resized to fit viewport
    // requires `itemWidth` to be set
    // * this may cause fractional slides
    exactWidth: true,
  
    // speed aggravator - higher is slower
    duration: .5,
  
    // dot container element or selector
    dots: 'CSS Selector',
  
    // arrow container elements or selector
    arrows: {
      prev: 'CSS Selector',
      // may also pass element directly
      next: document.querySelector('CSS Selector')
    },
  
    // allow mouse dragging
    draggable: true,
    // how much to scroll with each mouse delta
    dragVelocity: 3.3,
  
  
    // event control
    scrollPropagate: false,
    eventPropagate: true,
  
    // Force centering slide after scroll event
    scrollLock: true,
    // how long to wait after scroll event before locking
    // if too low, it might interrupt normal scrolling
    scrollLockDelay: 150,
  
    // Force centering slide after resize event
    resizeLock: true,
  
    // Glider.js breakpoints are mobile-first
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 4
        }
      },
      {
      breakpoint: 300,
      settings: {
          slidesToShow: 1,
          slidesToScroll: 4
      }
    }
    ]
  });