async function fact() {
    const data = await fetch("mongodb+srv://asvirts:Nashville4117@cluster0.udils2m.mongodb.net/test")
    const fact = await data.json()
    console.log(fact)
    document.getElementById("fact").innerHTML = fact.text
  }
  
  fact()