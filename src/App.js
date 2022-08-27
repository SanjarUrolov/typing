import React, { useRef, useState } from "react";
import "./style.css";

let text = `React interfaol foydalanuvchi interfeyslarni qiyinchiliksiz yaratish imkonini beradi. Ilovangizdagi har bir holat uchun oddiy ko'rinishni loyihalashtiring va  react sizning ma'lumotlaringizni faqat o'zgartirgan tarkibiy qismlarni belgilab ularni samarali ravishda yangilaydi.
Deklarativ ko'rinishlar sizning kodingizni oldindan bashorat qilish va xatoliklarni onsonroq aniqlashga yordam beradi.`;
const myArr = text.toLowerCase().split("");
console.log(myArr.length);
let count=0
function App() {
  const [inputText, setInputText] = useState("");
  // const [date, setDate]=useState(60)
  // console.log(date)
  const handleChange = (e) => {
    setInputText(e.target.value.toLowerCase());
  };
  
  let date = 60;
 setInterval(()=>{
      if (date > 0 && inputText) 
      {date--
        spanDate.current.innerHTML =
           date + " soniya";
    }
  },1000)
  
  count=0;
  let spanDate=useRef(null)
  return (
    <div className="app">
      <h1><span class="date" ref={spanDate}>
         60 soniya
      </span>
      </h1>
      
      <div className="text">
        {myArr.map((value, index) => {
          if (inputText[index] === value) {
                 count++;
            return (
              <span style={{ color: "green", fontWeight: 800 }} key={index}>
                {value}
              </span>
            );
          } 
          else  {
            return (
              <span style={{ color: "black", opacity: "0.5" }} key={index}>
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
      <h2>{Math.floor((count*100)/myArr.length)}%</h2>
    </div>
  );
}

export default App;
