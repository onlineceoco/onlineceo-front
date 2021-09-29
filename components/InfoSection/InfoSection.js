import React from "react";
import { Button } from "../Button/ButtonElemnts";
import Resp from "../flasher/resp";
import React360Viewer from "../React360Viewer";
import useInView from "react-cool-inview";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Img,
  ImgWrap,
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  id,
  topLine,
  headLine,
  description,
  img,
  display3D,
  bg,
  buttonLable,
  imgStart,
  alt,
  lightText,
  darkText,
  dark,
  dark2,
  primary,
  imgDisplay,
  videoDisplay,
  video,
  fname,
  path,
  resDisplay,
}) => {
  const { observe, inView } = useInView({
    threshold: 0.1,
    onEnter: ({ unobserve }) => unobserve(),
  });
  return (
    <>
      <InfoContainer ref={observe} id={id} style={{ backgroundColor: bg }}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            {inView && (
              <Column1>
                <TextWrapper>
                  <TopLine>{topLine}</TopLine>
                  <Heading lightText={lightText}>{headLine} </Heading>
                  <Subtitle darkText={darkText}>{description}</Subtitle>
                  <BtnWrap>
                    <Button
                      to="home"
                      smooth={true}
                      duration={500}
                      spy={true}
                      offset={-80}
                      primary={primary ? 1 : 0}
                      dark={dark ? 1 : 0}
                      dark2={dark2 ? 1 : 0}
                    >
                      {buttonLable}
                    </Button>
                  </BtnWrap>
                </TextWrapper>
              </Column1>
            )}
            {inView && (
              <Column2>
                <ImgWrap>
                  <div style={{ display: resDisplay, marginRight: "5px" }}>
                    <Resp />
                  </div>
                  <Img src={img} alt={alt} style={{ display: imgDisplay }} />
                  <video
                    id="video"
                    src={video}
                    style={{ display: videoDisplay }}
                    autoPlay
                    loop
                    muted
                    type="video/mp4"
                  />
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: `${display3D}`,
                      cursor: "default",
                    }}
                  >
                    <React360Viewer
                      amount={36}
                      i={1}
                      imagePath="/images/selfdrive"
                      fileName="r{index}.jpg"
                      autoplay={0}
                      loop={1}
                    />
                  </div>
                </ImgWrap>
              </Column2>
            )}
          </InfoRow>
        </InfoWrapper>
        <style jsx>
          {`
            #video {
              width: 70%;
              height: 100%;
              display: none;
              // filter: drop-shadow(00px 10px 20px rgba(0, 0, 0, 0.425));
              transition: all 1s ease-in-out;
              border-radius: 10px;
            }
            #video:hover {
              transform: scale(1.1);
              // filter: drop-shadow(00px 40px 20px rgba(0, 0, 0, 0.425));
              cursor: pointer;
            }
            @media screen and (max-width: 1080px) {
              #video {
                width: 100%;
              }
            }
          `}
        </style>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
