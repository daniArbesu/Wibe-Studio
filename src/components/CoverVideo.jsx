import { styled } from 'styled-components';
import HeroVideo from '../assets/Walking Girl.mp4';

const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: 1;

  background-color: ${({ theme }) => `rgba(${theme.color.bodyrgba},0.6)`};
`;

const Title = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.color.text};

  div {
    display: flex;
    flex-direction: row;
  }

  h1 {
    font-family: 'Kaushan Script';
    font-size: ${({ theme }) => theme.font.xxxxl};
    text-shadow: 1px 1px 1px ${({ theme }) => theme.color.body};
  }

  h2 {
    font-size: ${({ theme }) => theme.font.lg};
    text-shadow: 1px 1px 1px ${({ theme }) => theme.color.body};
    font-weight: 300;
    text-transform: capitalize;
  }
`;

const CoverVideo = () => {
  return (
    <VideoContainer>
      <DarkOverlay />
      <Title>
        <div>
          <h1 data-scroll data-scroll-delay="0.13" data-scroll-speed="4">
            W
          </h1>
          <h1 data-scroll data-scroll-delay="0.09" data-scroll-speed="4">
            i
          </h1>
          <h1 data-scroll data-scroll-delay="0.06" data-scroll-speed="4">
            b
          </h1>
          <h1 data-scroll data-scroll-delay="0.04" data-scroll-speed="4">
            e
          </h1>
        </div>
        <h2 data-scroll data-scroll-delay="0.04" data-scroll-speed="4">
          Inspire. Create. Believe
        </h2>
      </Title>
      <video src={HeroVideo} type="video/mp4" muted loop autoPlay />
    </VideoContainer>
  );
};

export default CoverVideo;
