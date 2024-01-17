let main = document.getElementById('main');
let cities = [
    "New York", "London", "Tokyo", "Paris", "Sydney", "Berlin", "Los Angeles", "Mumbai", "Toronto", "Rio de Janeiro",
    "Beijing", "Dubai", "Moscow", "Rome", "Cairo", "Seoul", "Cape Town", "San Francisco", "Bangkok", "Mexico City",
    "Amsterdam", "Madrid", "Istanbul", "Stockholm", "Singapore", "Hong Kong", "Vienna", "Athens", "Prague", "Toronto",
    "Barcelona", "Oslo", "Lisbon", "Edinburgh", "Helsinki", "Brussels", "Copenhagen", "Auckland", "Wellington", "Osaka", "Kyoto"
];
cities.forEach((Element) => {
    let div = document.createElement('div');
    let xPos = Math.random() * 100;
    let yPos = Math.random() * 100;
    div.classList.add('city')
    div.style.top = `${xPos}%`
    div.style.left = `${yPos}%`
    div.innerText = Element;
    main.appendChild(div)
    main.addEventListener('mousemove', () => {
        xPos = Math.random() * 100;
        yPos = Math.random() * 100;
        div.style.transform = `translate(${-xPos}%,${-yPos}%)`
    })

})
