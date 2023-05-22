import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/Globalstyles';
import { dark } from './styles/Theme';
import { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import Home from './sections/Home';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { AnimatePresence } from 'framer-motion';
import About from './sections/About';
import Shop from './sections/Shop';
import ScrollTriggerProxy from './components/ScrollTriggerProxy';

function App() {
  const containerRef = useRef(null);
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{
            smooth: true
            // ... all available Locomotive Scroll instance options
          }}
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          <ScrollTriggerProxy />
          <AnimatePresence>
            <main ref={containerRef} className="App" data-scroll-container>
              <Home />
              <About />
              <Shop />
            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
