const coin = {
    state: 0,
  
    flip: function () {
      // Use "this.state" para acessar a propriedade "state".
      // Configure de forma randômica a propriedade “state” do
      // seu objeto moeda. "STATE" deve receber somente os valores 0 ou 1.

      this.state = Math.floor(Math.random() * 2)
    },
  
    toString: function () {
      // Se o valor de "state" for 0, retorne "Heads"
      // Se o valor de "state" for 1, retorne "Tails"

      if (this.state === 0) {
          return "Heads"
      } else {
          return "Tails"
      }
    },
  
    toHTML: function () {
      const image = document.createElement("img");
      // Colocar uma imagem correspondente a essa valor.
      // image.src = "./CAMINHO/IMAGEM.JPEG"
      // image.alt = "Heads/Tails"

      if (this.state === 0) {
        image.src = "./images/heads.jpeg"
        image.alt = "Heads"
      }
      if (this.state === 1) {
        image.src = "./images/tails.jpeg"
        image.alt = "Tails"        
      }

      return image
    }
  }

  function display20Flips() {
    const results = [];
    // Use um loop para arremessar a moeda 20 vezes.
    // Depois que o seu loop terminar, exiba o resultado na página no formato de TEXTO.
    // Além de exibir os resultados na página, não esqueça
    // de retornar o valor de "results".
    // Caso esqueça de retornar "results", sua função não
    // irá passar nos testes.

    const body = document.querySelector("body")

    for (let i = 0; i < 20; i++) {
        coin.flip()
        let displayFlipString = document.createElement("div")
        displayFlipString.innerText = coin.toString()
        body.append(displayFlipString)
        results.push(coin.toString())
    }

    return results
  }
  
  function display20Images() {
    const results = [];
    // Use um loop para arremessar a moeda 20 vezes.
    // Depois que o seu loop terminar, exiba o resultado na página no formato de IMAGEM.
    // Além de exibir os resultados na página, não esqueça
    // de retornar o valor de "results".
    // Caso esqueça de retornar "results", sua função não
    // irá passar nos testes.

    const body = document.querySelector("body")

    for (let i = 0; i < 20; i++) {
        coin.flip()
        let displayFlipImage = document.createElement("div")
        displayFlipImage.append(coin.toHTML())
        body.append(displayFlipImage)
        results.push(coin.toString())
    }

    return results
  }