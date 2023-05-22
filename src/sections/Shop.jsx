import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
import { styled } from 'styled-components';

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  overflow: hidden;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Title = styled.h2`
  font-family: 'Kaushan Script';
  font-size: ${({ theme }) => theme.font.xxxl};
  font-weight: 300;
  color: ${({ theme }) => theme.color.text};
  text-shadow: 1px 1px 1px ${({ theme }) => theme.color.body};

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;
`;

const Left = styled.div`
  width: 35%;
  background-color: ${({ theme }) => theme.color.body};
  color: ${({ theme }) => theme.color.text};

  min-height: 100vh;

  position: fixed;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  p {
    font-size: ${({ theme }) => theme.font.lg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
  }
`;

const Right = styled.div`
  position: absolute;
  left: 35%;
  padding-left: 30%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.color.grey};
  /*  width: 65%; */

  display: flex;
  justify-content: flex-start;
  align-items: center;

  h1 {
    width: 5rem;
    margin: 0 2rem;
  }
`;

const Shop = () => {
  gsap.registerPlugin(ScrollTrigger);

  const sectionRef = useRef(null);
  const horizontalRef = useRef(null);

  useLayoutEffect(() => {
    let element = sectionRef.current;
    let scrollingElement = horizontalRef.current;

    let pinWrapWidth = scrollingElement.offsetWidth;

    let t1 = gsap.timeline();
    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top top',
          end: pinWrapWidth,
          scroller: '.App',
          scrub: true,
          pin: true,
          markers: true
        },
        // increase scrolling height of the section equal to the scrolling element width
        height: `${scrollingElement.scrollWidth}px`,
        ease: 'none'
      });

      // Horizontal scrolling
      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: 'top top',
          end: pinWrapWidth,
          scroller: '.App',
          scrub: true,
          markers: true
        },
        // increase scrolling height of the section equal to the scrolling element width
        x: -pinWrapWidth,
        ease: 'none,'
      });
      ScrollTrigger.refresh();
    }, 1000);

    return () => {};
  }, []);

  return (
    <Section ref={sectionRef} data-scroll-section>
      <Title data-scroll data-scroll-speed="-1">
        New Colection
      </Title>
      <Left>
        <p>
          The brand new collection is currently being developed in USA. We create our products using
          best quality material, including the use of some of the pure fabrics to make our products.
          All products are made using the best materials, from the finest cotton to the finest
          fabrics.
        </p>
        <p>
          We have lots of different clothing options like shoes, jackets and dresses. Not only
          clothes but we also provide unique Jewellery as well. It is great for us to carry our new
          clothes all around the country and look different.
        </p>
      </Left>
      <Right ref={horizontalRef}>
        <h1>Img</h1>
        <h1>Img</h1>
        <h1>Img</h1>
        <h1>Img</h1>
        <h1>Img</h1>
        <h1>Img</h1>
        <h1>Img</h1>
        <h1>Img</h1>
        <h1>Img</h1>
        <h1>Img</h1>
        <h1>Img</h1>
        <h1>Img</h1>
        <h1>Img</h1>
        <h1>Img</h1>
      </Right>
    </Section>
  );
};

export default Shop;
