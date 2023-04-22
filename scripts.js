async function fact() {
    const data = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
    const fact = await data.json()
    console.log(fact)
    document.getElementById("fact").innerHTML = fact.text
  }
  
  fact()