class heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
    ataque() {
      let ataque;
      switch (this.tipo) {
        case "mago":
          ataque = "usando magia";
          break;
        case "guerreiro":
          ataque = "usando espada";
          break;
        case "monge":
          ataque = "usando artes marciais";
          break;
        case "ninja":
          ataque = "usando shuriken";
          break;
        default:
          ataque = "usando um ataque genérico";
      }
      console.log(`O ${this.tipo} atacou  ${ataque}`);
    }
  }
  
  const heroi1 = new heroi("Gandalf", 1000, "mago");
  heroi1.ataque();
  
  const heroi2 = new heroi("Aragorn", 35, "guerreiro");
  heroi2.ataque();
  
  const heroi3 = new heroi("Bruce Lee", 45, "monge");
  heroi3.ataque();
  
  const heroi4 = new heroi("Hanzo", 30, "ninja");
  heroi4.ataque();