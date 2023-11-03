fetch('https://whatyearisit-backend-ochre.vercel.app/year').then(data => {
    document.querySelector("#year").textContent = data.year
})