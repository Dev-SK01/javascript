const hrs = document.querySelector('.hrs');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');
console.log(hrs, min, sec);

const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');

console.log(start, stop, reset);

// start.addEventListener('click' ,ClockStart());

function ClockStart() {
   setInterval(() => {
      let seconds_Value = sec.textContent;
      let IncrementSeconds = parseInt(seconds_Value) + 1;
      // sec.textContent = IncrementSeconds;
      sec.innerText < 9 ? sec.textContent = '0'+ IncrementSeconds : sec.textContent = IncrementSeconds;
      if (seconds_Value == 60) {
         sec.textContent = '00';
      };

      let IncrementMin;
      if (seconds_Value == 60) {
         let Min_Value = min.textContent;
          IncrementMin = parseInt(Min_Value) + 1;
         parseInt(min.textContent) < 9 ? min.textContent = '0'+ IncrementMin+':' : min.textContent = IncrementMin + ' :';
        
         if(parseInt(Min_Value) == 60){
            min.textContent= '00';
         }

      };

      let IncrementHrs ;
      if(IncrementMin == 60){
         let hrs_value =hrs.textContent;
         IncrementHrs = parseInt(hrs_value) + 1;
         parseInt(hrs.textContent) < 9 ? hrs.textContent = '0'+ IncrementHrs +':' : hrs.textContent = IncrementHrs + ' :'; 

         if(parseInt(hrs_value) == 60){
            hrs.textContent= '00';
         }
         
      }

   },1000);

};

function stopfunction(){
   start.removeEventListener(onclick , ClockStart())
}

function resetFunction(){
   sec.textContent = '00 :';
   min.textContent = '00 :';
   hrs.textContent = '00 :';
   start.removeEventListener(onclick , ClockStart())
}

