async function fact() {
    const data = await fetch("https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=KKycLqaAQfhTDGPrYQXnT2Mcm71dUENk")
    const books = await data.json()
    const el = document.getElementById("fact")
    el.textContent = "List:"
    el.appendChild(document.createElement("li"))

  }
  
  fact()