import { useState } from "react";
import './MainLayout.scss';
import { ReactComponent as Logo } from 'src/assets/img/logo/logo.svg';
import Button from '../Button/Button';
import texts from './texts.json';
export default function MainLayout(){
  const [activeTab, setActiveTab] = useState(1);
  const toggleTab = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <div className="MainLayout">
      <div className="nav-container">
        <div className="logo-container">
          <div className="logo-box">
            <Logo className="logo"/>
          </div>
        </div>
        <div className="btn-container">
          <Button            
            className={`tab-btn ${activeTab === 1 ? "active" : ""}`}
            onClick={()=>{toggleTab(1)}}
          >
            Button 1
          </Button>
          <Button
            className={`tab-btn ${activeTab === 2 ? "active" : ""}`}
            onClick={()=>{toggleTab(2)}}
          >
            Button 2
          </Button>
        </div>
      </div>
      <div className="tab-content">
        <h2
          className="tab-title"
        >
          {texts[activeTab].title}
        </h2> 
        <div className={`texts-container v${activeTab}`}>
          {texts[activeTab].text.map((el,ind)=>(
            <p
              className="text-item"
              key={ind}
            >
              {el}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
