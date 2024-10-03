const cityName = document.getElementById("city");
const btn = document.getElementById("button");
const paragraph = document.getElementById("data"); 

btn.addEventListener("click", async (e) => {
    e.preventDefault(); // Prevent the default form submission

    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName.value}?unitGroup=metric&key=QUHDK9RQJQBGKG5WXGM6DKA6G&contentType=json`);
        
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        // Wait for 2 seconds before processing the response
        setTimeout(async () => {
            const data = await response.json();
            console.log(data);
            console.log(`In ${data.resolvedAddress} it is ${data.currentConditions.conditions}`);
            paragraph.textContent = `Hi, In ${data.resolvedAddress} it is ${data.currentConditions.conditions}`; 
        }, 2000);
    } catch (error) {
        console.log('There was a problem with the fetch operation:', error);
    }
});
