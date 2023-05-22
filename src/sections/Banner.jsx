import { styled } from 'styled-components';

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  width: 80vw;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BannerWrapper = styled.h2`
  font-family: 'Kaushan Script';
  font-size: ${({ theme }) => theme.font.xxxl};
  color: ${({ theme }) => theme.color.text};
  white-space: nowrap;
  text-transform: uppercase;
  line-height: 1;

  span {
    display: block;
    background-color: ${({ theme }) => theme.color.body};
    padding: 1rem 2rem;
  }
`;

const Banner = () => {
  return (
    <Section data-scroll-section>
      <Container id="up">
        <BannerWrapper>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="8"
            data-scroll-target="#up"
          >
            Fashion is the armour{' '}
          </span>
        </BannerWrapper>
        <BannerWrapper>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-6"
            data-scroll-target="#up"
          >
            to survive the reality of everyday life
          </span>
        </BannerWrapper>
        <BannerWrapper>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
            data-scroll-target="#up"
          >
            One is never over-dressed or{' '}
          </span>
        </BannerWrapper>
        <BannerWrapper>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-4"
            data-scroll-target="#up"
          >
            under-dressed{' '}
          </span>
        </BannerWrapper>
        <BannerWrapper>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
            data-scroll-target="#up"
          >
            with a Little Black Dress
          </span>
        </BannerWrapper>
      </Container>
    </Section>
  );
};

export default Banner;
