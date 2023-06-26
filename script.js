//variables
let yearsNum = document.querySelector('.years-num');
let monthsNum = document.querySelector('.months-num');
let daysNum = document.querySelector('.days-num');
const inputs = document.getElementsByTagName('input');
let errorMessages = document.querySelectorAll('.error-message');
const errorRedText = document.querySelectorAll('.error-red');
// inputs collection for form validation
    let dayDobInput = document.querySelector('#dayDob')
    let monthDobInput = document.getElementById('monthDob');
    let yearDobInput = document.getElementById("yearDob");
    //error message individual collection
    let errorDay = document.querySelector('.error-day');
    let errorMonth = document.querySelector('.error-month')
    let errorYear = document.querySelector('.error-year')
    // changing day, month, and year error text to red
    let errorTextRedDay = document.getElementById('day-error-text');
    let errorTextRedMonth = document.getElementById('months-error-text');
    let errorTextRedYear = document.getElementById('years-error-text');

    //validating the form 

    dayDobInput.addEventListener('input', (e)=>{
    if(+dayDobInput.value > 31){
        errorDay.textContent = 'must be a valid day'
        dayDobInput.style.border = "1px solid hsl(0, 100%, 80%)";
        errorTextRedDay.style.color = "hsl(0, 100%, 67%)";
        return;
    }else{
        errorDay.textContent = ''
        dayDobInput.style.border = "";
        errorTextRedDay.style.color = "";
    }

    if(dayDobInput.value === '' || dayDobInput.value === 0){
    errorDay.textContent = 'This field is required';
    dayDobInput.style.border = "1px solid hsl(0, 100%, 80%)";
    errorTextRedDay.style.color = "hsl(0, 100%, 67%)";
    return;
    }else{
        errorDay.textContent = '';
        dayDobInput.style.border = "";
        errorTextRedDay.style.color = "";
    }
    })

    monthDobInput.addEventListener('input', (e)=>{
    if(+monthDobInput.value > 12){
        errorMonth.textContent = 'must be a valid month';
        monthDobInput.style.border = "1px solid hsl(0, 100%, 80%)";
        errorTextRedMonth.style.color = "hsl(0, 100%, 67%)";
        return;
    }else{
        errorMonth.textContent = '';
        monthDobInput.style.border = "";
        errorTextRedMonth.style.color = "";
        
    }
    
    if(monthDobInput.value === '' || monthDobInput.value === null){
    errorMonth.textContent = 'This field is required';
    monthDobInput.style.border = "1px solid hsl(0, 100%, 80%)";
    errorTextRedMonth.style.color = "hsl(0, 100%, 67%)";
    return;
    }else{
        errorMonth.textContent = '';
        monthDobInput.style.border = "";
        errorTextRedMonth.style.color = "";
    }
    })

    yearDobInput.addEventListener('input', (e)=>{
    if(+yearDobInput.value > 2023){
        errorYear.textContent = 'must be in the past';
        yearDobInput.style.border = "1px solid hsl(0, 100%, 80%)";
    errorTextRedYear.style.color = "hsl(0, 100%, 67%)";
        return;
    }else{
        errorYear.textContent = '';
        yearDobInput.style.border = "";
        errorTextRedYear.style.color = "";
    }

    if(yearDobInput.value === '' || dayDobInput.value === 0){
    errorYear.textContent = 'This field is required';
    yearDobInput.style.border = "1px solid hsl(0, 100%, 80%)";
    errorTextRedYear.style.color = "hsl(0, 100%, 67%)";
    return;
    }else{
        errorYear.textContent = '';
        yearDobInput.style.border = "";
        errorTextRedYear.style.color = "";
    }
    })
    
    //submitting the button
    
const ageCalculator = () => {
    let dayDobInput = document.querySelector('#dayDob').value;
    let monthDobInput = document.getElementById('monthDob').value;
    let yearDobInput = document.getElementById("yearDob").value;
    let dateOfBirth = 
    new Date(yearDobInput, monthDobInput, dayDobInput)
    // console.log(dateOfBirth)
    
    //validate the form if the all inputs are empty
    
    if(dayDobInput, monthDobInput, yearDobInput === null || dayDobInput, monthDobInput, yearDobInput  === ''){
        
        for(let i = 0; i<errorMessages.length; i++){
        errorMessages[i].textContent = 'This field is required'
        }
        
        Array.from(inputs)
        .forEach(input => 
        input.style.border = 
        "1px solid hsl(0, 100%, 80%)")
        
        errorRedText.forEach(text => text.style.color = "hsl(0, 100%, 67%)")
        
        
    }
    // execute if the user entered a date.
    else{
    
    // remove red lines when user finally enter their details
    for(let i = 0; i<errorMessages.length; i++){
        errorMessages[i].textContent = ''
        }
        
        Array.from(inputs)
        .forEach(input => 
        input.style.border = 
        "1px solid hsl(0, 0%, 86%)")
        
        errorRedText.forEach(text => text.style.color = "")
        
        
        
    // extract the year, month, day from the users date input.
    let userDobYear = dateOfBirth.getFullYear();
    let userDobMonth = dateOfBirth.getMonth();
    let userDobDate = dateOfBirth.getDate();
    
    
    //get the current date from the system
    
    let now = new Date();
    //extract the year, month, date from the current date
    
    let currentYear = now.getFullYear();
    let currentMonth = now.getMonth() + 1;
    let currentDate = now.getDate();
    
    //declare a variable to collect the age in year, month, and days
    let age = {};
    
    //get years
    let todayYearAge = currentYear - userDobYear;
    
    // get the months
    let todayMonthAge;
    if(currentMonth >= userDobMonth){
        //get months only when current month is greater
        todayMonthAge = currentMonth - userDobMonth;
    }else{
    todayYearAge--;
    todayMonthAge =  12 + currentMonth - userDobMonth ;
    
    }
    
    
    //get days
    let todayDayAge;
    if(currentDate >= userDobDate){
        //get days only when current days is greater
        todayDayAge = currentDate - userDobDate;
    }else{
    todayMonthAge-1;  
    todayDayAge = 31 + currentDate - userDobDate;  
    }
    
    if(todayMonthAge < 0){
    todayMonthAge = 11;
    todayYearAge--;
    }
    
    
    //group the age in a single variable
    age = {
        years: todayYearAge,
        months: todayMonthAge,
        days: todayDayAge,
    }
    
    
    
    if ( (age.years > 0) && (age.months > 0) && (age.days > 0) ) {
        yearsNum.textContent = age.years;
        monthsNum.textContent = age.months;
        daysNum.textContent = age.days;
    }
    
    
    
    }
    



}

