const key = `b36230f291c970076dbc00fcaa439bce`;
const searchBtn = document.getElementById('search-btn');
const inputField = document.getElementById('input-field');
const imageIcon = document.getElementById('img-icon')

searchBtn.addEventListener('click',()=>{
    const inputVal = inputField.value 
    inputField.value = ''
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${key}&units=metric`;
    // console.log(url);
    // const timer = setInterval(() => {
    //     document.getElementById('spinner').style.display="block";
    // }, 500);
    // clearTimeout(timer)
    document.getElementById('spinner').style.display="block";
    fetch(url)
    .then(res => res.json())
    .then(data=> displayTemp(data))
})

const inerText = (id,text)=>{
     document.getElementById(id).innerText = text
}


const displayTemp = (values)=>{
 
    console.log(values);
     inerText('city',values.name);
     inerText('temperature',values.main.temp);
     inerText('sky',values.weather[0].main)
     const url = `http://openweathermap.org/img/wn/${values.weather[0].icon}@2x.png`;
     
     imageIcon.setAttribute('src',url);
     document.getElementById('spinner').style.display="none";
}