window.addEventListener("DOMContentLoaded", ()=>{
    setInterval(()=>{

        /* section 1  */
        let time = new Date(),
            second = time.getSeconds(),
            minut = time.getMinutes(),
            hour = time.getHours(),
            day = time.getDate(),
            month = 1
            year = time.getFullYear();
            let inner = month.toString().split("")
        if(inner[1]===undefined){
            month=`0${month}`
        }else{
            month;
        }

        /* section 2 */
        const mil_Second = document.querySelector(".second"),
            mil_Minut = document.querySelector(".minut"),
            mil_Hour = document.querySelector(".hour"),
            totalTime = document.querySelector(".total-time"),
            totalYear = document.querySelector(".total-year");
        /* section 3 */
        mil_Second.style.transform = `rotate(${second*6}deg)`;
        mil_Minut.style.transform = `rotate(${minut*6}deg)`;
        mil_Hour.style.transform = `rotate(${hour*30}deg)`;
        totalTime.textContent = `${second}:${minut}:${hour}`;
        totalYear.textContent = `${day}.${month}.${year}`;
    }, 1000)
})