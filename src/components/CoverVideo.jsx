import { styled } from 'styled-components';
import HeroVideo from '../assets/Walking Girl.mp4';
import { motion } from 'framer-motion';

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

const Title = styled(motion.div)`
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

const container = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,

    transition: {
      dealayChildren: 2,
      staggerChildren: 0.3
    }
  }
};

const letter = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1
  }
};

const CoverVideo = () => {
  return (
    <VideoContainer>
      <DarkOverlay />
      <Title variants={container} initial="hidden" animate="show">
        <div>
          <motion.h1 variants={letter} data-scroll data-scroll-delay="0.13" data-scroll-speed="4">
            W
          </motion.h1>
          <motion.h1 variants={letter} data-scroll data-scroll-delay="0.09" data-scroll-speed="4">
            i
          </motion.h1>
          <motion.h1 variants={letter} data-scroll data-scroll-delay="0.06" data-scroll-speed="4">
            b
          </motion.h1>
          <motion.h1 variants={letter} data-scroll data-scroll-delay="0.04" data-scroll-speed="4">
            e
          </motion.h1>
        </div>
        <motion.h2 variants={letter} data-scroll data-scroll-delay="0.04" data-scroll-speed="4">
          Inspire. Create. Believe
        </motion.h2>
      </Title>
      <video src={HeroVideo} type="video/mp4" muted loop autoPlay />
    </VideoContainer>
  );
};

export default CoverVideo;
