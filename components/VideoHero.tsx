import Image from 'next/image';

const VideoHero = () => {
  return (
    <>
      {/* <video id="background-video" autoPlay loop muted poster="https://assets.codepen.io/6093409/river.jpg">
          <source src="https://assets.codepen.io/6093409/river.mp4" type="video/mp4"/>
    </video> */}
      <Image
        id="background-video"
        src="/winter-hero.jpg"
				// fill
        width={5000}
        height={5000}
        alt="Picture of the author"
      />
    </>
  );
};

export default VideoHero;
