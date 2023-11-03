fetch('https://whatyearisit-backend-ochre.vercel.app/year').then(data => {
    document.querySelector("#currentYear").textContent = data.year
})