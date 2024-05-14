const apiKey = "live_L75Wmv0zqgsldeuMXbLaPph2khIPRfZfIyexwecIpPRtZk0Hg35aquvAfA9afBUR"

async function fetchData(dogSelect) {
    try {
        const response = await fetch(`https://api.thecatapi.com/v1/images/search?q=${dogSelect}&key=${apiKey}`);
        const data = await response.json();
        return data.results; // Assuming API returns an array of results
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}