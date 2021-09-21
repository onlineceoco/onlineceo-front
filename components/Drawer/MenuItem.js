import { BiLoaderCircle, BiCodeAlt, BiVector, BiPlanet,BiArrowFromTop } from "react-icons/bi";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const MenuItem = (props) => {
  const { name, subMenus, to } = props;
  const [expand, setExpand] = useState(false);
  let menuRef = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if(menuRef.current){
        if (!menuRef.current.contains(event.target)) {
          setExpand(false);
        }
      }
     
    });
  });

  return (
    
    <li ref={menuRef}  onClick={() => setExpand(perval=>!perval)}>
      <div  className="icon-link">
        <a>
          <div className="sidebar-logo">
            {(() => {
              switch (name) {
                case "زمینه فعالیت":
                  return <BiLoaderCircle id="drawer-icon"/>;
                case "خدمات وب و برنامه نویسی" :
                  return <BiCodeAlt  id="drawer-icon"/>;
                case "مدیریت آنلاین":
                  return <BiPlanet id="drawer-icon"/>;
                case "اتوماسیون های رباتیک":
                  return <BiVector  id="drawer-icon"/>;
              }
            })()}
          </div>
          
            <span className="link-name">{name}</span>
          
        </a>

        <div className="sidebar-logo">
          <BiArrowFromTop  id="drawer-icon" />
        </div>
      </div>
      {subMenus  ? (
        <ul className={`sub-menu ${expand ? "active" : ""}`}>
          <h1 href={to} className="link-name">
            {name}
          </h1>
          {subMenus.map((menu, index) => (
            <li key={index}>
              <Link  href={menu.to}>
                {/* <h1>({menu.to}</h1> */}
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default MenuItem;
