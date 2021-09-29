import { BiLogOutCircle, BiBody } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";
import MenuItem from "./MenuItem";

export const menuItems = [
  {
    name: "زمینه فعالیت",
    to: "/fieldOfActivity",
    subMenus: [
      { name: "وب سرویس", to: "/fieldOfActivity/webServices" },
      { name: "اینترنت اشیا", to: "/fieldOfActivity/IOT" },
      { name: " اتوماسیون های رباتیک", to: "/fieldOfActivity/RoboticAutomation" },
      { name: "هوشمندسازی و هوش مصنوعی", to: "/fieldOfActivity/AI" },
    ],
  },
  {
    name: "خدمات وب و برنامه نویسی",
    to: "/webServices",
    subMenus: [
      { name: "وب اپ و وب سایت ", to: "/webServices/webApp" },
      { name: "پلتفرم های تحت وب", to: "/webServices/platforms" },
      { name: " میزبانی کسب و کار", to: "/webServices/BusinessHosting" },
    ],
  },
  {
    name: "مدیریت آنلاین",
    to: "/OnlineManagement",
    subMenus: [
      { name: "مدیریت کسب کارهای پرورشی", to: "/OnlineManagement/breedingBusinesses" },
      { name: "مدیریت کسب و کارهای صنعتی", to: "/OnlineManagement/IndustrialBusinessManagement" },
      { name: "کسب و کارهای مدیریتی", to: "/OnlineManagement/ManagementBusinesses" },
      
    ],
  },
  {
    name: "اتوماسیون های رباتیک",
    to: "/RoboticAutomation",
    subMenus: [
      { name: "بازو های رباتیک", to: "/RoboticAutomation/RoboticArms" },
      { name: "ربات های خودران", to: "/RoboticAutomation/SelfRobots" },
      { name: "ربات های چندمنظوره", to: "/RoboticAutomation/MultipurposeRobots" },
    ],
  },
];

function Drawer() {
  const [close, setClose] = useState(true);
  const [open, setOpen] = useState(false);
  let menRef = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if(menRef.current){
        if (!menRef.current.contains(event.target)) {
          setClose(true)
        }
      }
       
      
   
    });
  });
  let profileRef = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if(profileRef.current){
        if (!profileRef.current.contains(event.target)) {
          setOpen(false);
        }

      }
    });
  });

  return (
    <>
      <div ref={menRef} className={`sidebar ${close ? "close" : ""}`}>
        <div className="logo-details">
          <span className="logo-name">شرکت  برنامه نویسی مدیر آنلاین</span>
          <div className="dashboard-logo" onClick={() => setClose(!close)}>
            <BiLogOutCircle />
          </div>
        </div>
        <ul className="nav-links">
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              to={menuItem.to}
              subMenus={menuItem.subMenus || []}
            />
          ))}
          </ul>
            
              <div
              ref={profileRef}
              className={`profile-details ${open ? "open" : ""}`}
            >
              <div className="profile-content">
                <BiBody onClick={() => setOpen(!open)}/>
              </div>

              <div className="name-job">
                <div className="profile-name"> User Account </div>
                <div className="job">Custome words</div>
              </div>
              <div className="profile-logo">
                <BiLogOutCircle />
              </div>
            </div>
          </div>
        
      
    </>
  );
}

export default Drawer;
