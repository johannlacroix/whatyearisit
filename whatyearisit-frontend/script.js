fetch('https://whatyearisit-backend-ochre.vercel.app/year')
    .then(resp => resp.json())
    .then(data => {
        document.querySelector("#year").textContent = data.year
    })