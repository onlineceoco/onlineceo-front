import React from "react";
import {  ServicesContainer, ServicesWrapper, ServicesH1, ServicesCard,  ServicesIcon, ServicesH2, ServicesP,
} from "./ServicesElements";

const Services = () => {
  const services = [
    {
      image: "images/web.png",
      title: " پلتفرم اینترنت اشیا",
      descreption:
        "برنامه نویسی و تولید پلتفرم اختصاصی",
    },
    {
      image: "images/iot11.png",
      title: "آنالیز تخصصی",
      descreption:
        "افزایش راندمان ",
    },
    {
      image: "images/robo.png",
      title: " مدیریت ربات های  هوشمند",
      descreption:
        "کنترل و برنامه دهی آنلاین",
    },
  ];
  return (
    <ServicesContainer id="Services">
      {/* <ServicesH1> شاخه های فعال </ServicesH1> */}
      <ServicesWrapper>
        {services.map((item, index) => (
          <ServicesCard key={index}>
            <ServicesIcon src={item.image} />
            <ServicesH2>{item.title}</ServicesH2>
            <ServicesP>{item.descreption}</ServicesP>
          </ServicesCard>
        ))}
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
