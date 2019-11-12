let mainDay = document.getElementById('weekDay');
let getDate = new Date().getDay();
let day;

    switch (getDate)
    {
        case 0: 
        day = "Today is Sunday";
            break;
        case 1: 
            day ="Today is Monday";
            break;
        case 2: 
            day ="Today is Tuesday";
            break;
        case 3: 
            day = "Today is Wednesday";
            break;
        case 4: 
            day ="Today is Thursday";
            break;
        case 5: 
            day ="Today is Friday";
            break;
        case 6: 
            day ="Today is Saturdy";
            break;
        
    }
    mainDay.innerHTML=day;
