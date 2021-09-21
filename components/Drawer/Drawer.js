import { BiLogOutCircle, BiBody } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";
import MenuItem from "./MenuItem";

export const menuItems = [
  {
    name: "زمینه فعالیت",
    to: "/Pharmacy",
    subMenus: [
      { name: "وب سرویس", to: "/Pharmacy/Antibiotics" },
      { name: "اینترنت اشیا", to: "/Pharmacy/vaccine" },
      { name: " اتوماسیون های رباتیک", to: "/Pharmacy/Supplementry" },
      { name: "هوشمندسازی و هوش مصنوعی", to: "/Pharmacy/Supplementry" },
    ],
  },
  {
    name: "خدمات وب و برنامه نویسی",
    to: "/Store",
    subMenus: [
      { name: "وب اپ و وب سایت ", to: "/Store/Concentrate" },
      { name: "پلتفرم های تحت وب", to: "/Store/Pellets" },
      { name: " میزبانی کسب و کار", to: "/Store/Equipments" },
    ],
  },
  {
    name: "مدیریت آنلاین",
    to: "/Chick",
    subMenus: [
      { name: "مدیریت کسب کارهای پرورشی", to: "/Chick/Ross308" },
      { name: "مدیریت کسب و کارهای صنعتی", to: "/Chick/Arbruckers" },
      { name: "کسب و کارهای مدیریتی", to: "/Chick/Arian" },
      
    ],
  },
  {
    name: "اتوماسیون های رباتیک",
    to: "/Adviser",
    subMenus: [
      { name: "بازو های رباتیک", to: "/Adviser/vet-advice" },
      { name: "ربات های خودران", to: "/Adviser/breeding-advice" },
      { name: "ربات های چندمنظوره", to: "/Adviser/breeding-advice" },
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
