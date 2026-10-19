//https://jsonplaceholder.typicode.com/users"
//https://api.github.com/users/gustavomp1625

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
 
async function traerUsuario() {
    try{
        const usuarios = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!usuarios.ok) {
            throw new Error('Error HTTP ${usuarios.status}');
        }
        const listaUsuarios = await usuarios.json();
        console.log(listaUsuarios);
        return listaUsuarios;
    } catch(error) { 
    console.log(error);
    }
}

traerUsuarios();