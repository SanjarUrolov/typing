import React, { useState } from "react";
import "./style.css";

let text = `React interfaol foydalanuvchi interfeyslarni qiyinchiliksiz yaratish imkonini beradi. Ilovangizdagi har bir holat uchun oddiy ko'rinishni loyihalashtiring va  react sizning ma'lumotlaringizni faqat o'zgartirgan tarkibiy qismlarni belgilab ularni samarali ravishda yangilaydi.
Deklarativ ko'rinishlar sizning kodingizni oldindan bashorat qilish va xatoliklarni onsonroq aniqlashga yordam beradi.`;
const myArr = text.toLowerCase().split("");

function App() {
  const [inputText, setInputText] = useState("");
  const [date, setDate]=useState(60)
  console.log(date)
  const handleChange = (e) => {
    setInputText(e.target.value.toLowerCase());
  };
  
  // let date = 60;
 let a=setInterval(()=>{
      if (date > 0 && inputText) 
      {date--
        document.getElementById("date").innerHTML =
           date + " soniya";
    }
    // if(date<=0){
    //   date=60
    // }
  },1000)
  clearInterval(a)
  let count=0;
  return (
    <div className="app">
      <h1><span class="date" id="date">
         60 soniya
      </span>
      </h1>
      
      {/* <button onClick={a()}>Click</button> */}
      <div className="text">
        {myArr.map((value, index) => {
          {
            /* if(inputText > 0){
          <span style={{ color: "black" , fontWeight:700 }} key={index}>
                {value}
              </span>
            } */
          }

          if (inputText[index] === value) {
                 count++;
            return (
              <span style={{ color: "green", fontWeight: 800 }} key={index}>
                {value}
              </span>
            );
          } else if (inputText[index] !== value) {
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
      <h2>{count}</h2>
    </div>
  );
}

export default App;
