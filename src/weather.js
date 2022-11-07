function buttonClicked(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7bc71fbb08msh2913c10799e5d46p1d2cd0jsn3c517d9a690b',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    var city =document.getElementById("city_input").value
    fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`,options)
    
        .then((response) => response.json())
        .then((data) => {
        console.log(data)
            
                console.log("Country :",data.location.country)
                console.log("Condition :",data.current.condition.icon)
                console.log("Wind Degree :",data.current.wind_degree)
                console.log("Wind Direction :",data.current.wind_dir)
                console.log("Master of Public Health :",data.current.wind_mph)
                console.log("Weather :",data.current.condition.text)
                

                document.getElementById("country").append(data.location.country)
                document.getElementById("winddeg").append(data.current.wind_degree)
                document.getElementById("winddir").append(data.current.wind_dir)
                document.getElementById("windmph").append(data.current.wind_mph)
                document.getElementById("weather").append(data.current.condition.text)


        })
    }
    