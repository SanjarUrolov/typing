import React, { useEffect, useRef, useState } from "react";
import {useNavigate} from 'react-router-dom'

let text = `React interfaol foydalanuvchi interfeyslarni qiyinchiliksiz yaratish imkonini beradi.Ilovangizdagi har bir holat uchun oddiy ko'rinishni loyihalashtiring va react sizning ma'lumotlaringizni faqat o'zgartirgan tarkibiy qismlarni belgilab ularni samarali ravishda yangilaydi.
Deklarativ ko'rinishlar sizning kodingizni oldindan bashorat qilish va xatoliklarni onsonroq aniqlashga yordam beradi.`;
const myArr = text.toLowerCase().split("");
// console.log(myArr.length);

function Typing() {
  const [inputText, setInputText] = useState("");
  const [counter, setCounter]=useState(40);
 let count=0;
  let spancounter=useRef(null);
let navigate=useNavigate()
  const handleChange = (e) => {
    setInputText(e.target.value.toLowerCase());
  };
  
  const decrement = () => {
    setCounter(counter > 0 && inputText ? counter-1 : counter )
    spancounter.current.innerHTML =
              counter + " soniya";
              if(counter === 0){
                navigate('result', {state:count})
              }
  };
    
  useEffect(()=>{
    const interval= setInterval(() => {
      decrement();
    }, 1000);
    return ()=>{
      clearInterval(interval)
    }
  })
  
  return(
    <div className="app">
      <div class="counter" ref={spancounter}>
         40 soniya
      </div>

      
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
  )
    }
    export default Typing;