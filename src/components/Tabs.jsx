import { useState } from "react";
const Tabs = ({ defaultTabs }) => {
  const [tabs, setTabs] = useState(defaultTabs);

  const handleTabNames = (clicked) => {
    let newTabs = tabs.map((tab) => {
      if (tab.title === clicked) {
        tab.active = true;
        return tab;
      } else {
        tab.active = false;
        return tab;
      }
    });
    setTabs(newTabs);
  };
  const css = `/* Tabs */
  .tabs {
    margin-top: 30px;
  }

  .tabs-header {
    display: flex;
    background: #333;
    padding: 10px 20px;
  }

  .tabs-header li {
    color: #fff;
    margin-right: 20px;
    cursor: pointer;
  }
  .tabs-header li.active {
    color: #A741ff;
  }
  .hidden {
    display:none;
  }
  .tabs-content {
    font-size: 18px;
    padding: 20px;
    border: 1px solid #333;
    font-weight: bold;
    background: #f4f4f4;
  }`;
  return (
    <>
      <style>{css}</style>
      <div className="tabs">
        <ul className="tabs-header">
          {tabs.map((tab) => {
            return (
              <li
                key={tab.title}
                className={tab.active ? "active" : ""}
                onClick={() => handleTabNames(tab.title)}
              >
                {tab.title}
              </li>
            );
          })}
        </ul>
        <ul className="tabs-content">
          {tabs.map((tab) => {
            return (
              <li
                key={tab.content}
                className={tab.active ? "tab-content" : "hidden"}
              >
                <code>{tab.content}</code>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Tabs;
