function retirarUsuariosSinTicket(cola) {
    const colaInicial = [...cola];
    const colaFinal = [];
    const usuariosRetirados = [];
  
    while (cola.length > 0) {
      const usuario = cola.shift();
      if (usuario.ticket) {
        colaFinal.push(usuario);
      } else {
        usuariosRetirados.push(usuario.user);
      }
    }
  
    console.log("Cola Inicial:", colaInicial);
    console.log("Usuarios Retirados:", usuariosRetirados);
    console.log("Cola Final:", colaFinal);
  }
  
  const colaTickets = [
    { user: "User1", ticket: true },
    { user: "User2", ticket: true },
    { user: "User3", ticket: false },
    { user: "User4", ticket: true },
    { user: "User5", ticket: false },
    { user: "User6", ticket: false },
    { user: "User7", ticket: true },
    { user: "User8", ticket: true },
    { user: "User9", ticket: true },
    { user: "User10", ticket: false },
    { user: "User11", ticket: true },
  ];
  
  retirarUsuariosSinTicket(colaTickets);
  