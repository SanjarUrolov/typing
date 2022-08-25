import React, { useState } from "react";
import "./style.css";

let text = `reakt interfaol foydalanuvchi interfeyslarni qiyinchiliksiz yaratish imkonini beradi. ilovangizdagi har bir holat uchun oddiy ko'rinishni loyihalashtiring va  react sizning ma'lumotlaringizni faqat o'zgartirgan tarkibiy qismlarni belgilab ularni samarali ravishda yangilaydi.
deklarativ ko'rinishlar sizning kodingizni oldindan bashorat qilish va xatoliklarni onsonroq aniqlashga yordam beradi.`;
const myArr = text.toLowerCase().split("");

function App() {
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };
  return (
    <div className="app">
    <h1>App</h1>
      <div className="text">
        {myArr.map((value, index) => {
         {/* if(inputText > 0){
          <span style={{ color: "black" , fontWeight:700 }} key={index}>
                {value}
              </span>
            } */}

          if (inputText[index] === value && inputText > 0) {
            return (
              <span style={{ color: "green" , fontWeight :800 ,  }} key={index}>
                {value}
              </span>
            );
          } 

          else if(inputText[index] !== value){
            return (
              <span style={{ color: "black" , opacity: "0.5" }} key={index}>
                {value}
              </span>
            );
          }
        })}
      </div>

      <form>
        <input
          type="text"
          value={inputText || ""}
          onInput={handleChange}
          placeholder="Start typing. . . "
        />
      </form>
    </div>
  );
}

export default App;
