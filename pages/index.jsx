import React, { useState, useEffect } from "react";
import menu from "../db";

const App = () => {
  const [type, setType] = useState(0);
  // 0 : 전체메뉴
  // 1 : 햄버거
  // 2 : 사이드

  const [list, setList] = useState([]);

  useEffect(() => {
    setList(menu);
  }, []);

  const clickType = (value) => {
    setType(value);
  };

  return (
    <div>
      {/* TYPE SECTION */}
      <div>
        <h4 onClick={() => clickType(0)}>전체메뉴</h4>
        <h4 onClick={() => clickType(1)}>햄버거(세트)</h4>
        <h4 onClick={() => clickType(2)}>사이드</h4>
      </div>

      {/* MENU SECTION */}
      <div>
        {list.map((v) => {
          if (type === 0) {
            return (
              <div>
                <span>{v.name}</span>
                <span>{v.price}</span>
                <img src={v.img} width="100px" />
                <hr />
              </div>
            );
          } else if (type === 1) {
            if (v.type === "햄버거") {
              return (
                <div>
                  <span>{v.name}</span>
                  <span>{v.price}</span>
                  <img src={v.img} width="100px" />
                  <hr />
                </div>
              );
            }
          } else if (type === 2) {
            if (v.type === "사이드") {
              return (
                <div>
                  <span>{v.name}</span>
                  <span>{v.price}</span>
                  <img src={v.img} width="100px" />
                  <hr />
                </div>
              );
            }
          } else {
            return all;
          }
        })}
      </div>
    </div>
  );
};

export default App;
