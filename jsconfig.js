
    function search_table(){
    // Declare variables 
    var input, filter, table, tr, td, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("TablaLibros");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td") ; 
      for(j=0 ; j<td.length ; j++)
      {
        let tdata = td[j] ;
        if (tdata) {
          if (tdata.innerHTML.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
            break ; 
          } else {
            tr[i].style.display = "none";
          }
        } 
      }
    }
  }
  const tablaTitulos = document.getElementById("TablaLibros")
  tablaTitulos.addEventListener("click", verificarClic);

  function verificarClic(e){
    if(e.target.matches(".MagiaEliminar")){
        const tIndex= e.target.parentNode.parentNode.rowIndex;
        tablaTitulos.deleteRow(tIndex);
    }else if(e.target.matches(".ModalEditar")){
        const tIndex= e.target.parentNode.parentNode;
        hijos = tIndex.children;
        const TextoTitulo = document.getElementById("EditarTitulo");
        const TextoAutor = document.getElementById("EditarAutor");
        const TextoGenero = document.getElementById("EditarGenero");
        const TextoFecha = document.getElementById("EditarFecha");
        TextoTitulo.placeholder = hijos[1].textContent;
        TextoAutor.placeholder = hijos[2].textContent;
        TextoFecha.placeholder = hijos[4].textContent;
        verificarModal()
      }
    }
  
  const ModalLibros = document.getElementById("Editar")
  ModalLibros.addEventListener("click", verificarModal);

  function verificarModal(e){
    console.log("EII");
    if(e.target.matches(".GuardarModal")){
      console.log("EII");
      console.log(hijos);
      const TextoTitulo =  document.getElementById("EditarTitulo").value;
    const TextoAutor = document.getElementById("EditarAutor").value;
    const TextoGenero= document.getElementById("EditarGenero").value;
    const TextoFecha= document.getElementById("EditarFecha").value;
    console.log(TextoTitulo, TextoAutor, TextoGenero,TextoFecha);
    console.log(Nombre,Autor)
    if (TextoTitulo == "") {
      alert("El titulo debe llenarse ");
      return false;
    }
    if (TextoAutor == "") {
      alert("Autor tiene que llenarse");
      return false;
    }
    if (TextoGenero == "" || TextoGenero == "Genero") {
      alert("Genero debe llenarse");
      return false;
    }
    if (TextoFecha == "") {
      alert("Fecha debe llenarse");
      return false;
      }else{
        if(TextoFecha <= 1900){
          alert("Ingresar mayor a 1900");
          return false;
        }
      }
      hijos[1].textContent = TextoTitulo;
      hijos[2].textContent = TextoAutor;
      hijos[3].textContent = TextoGenero;
      hijos[4].textContent = TextoFecha;
    }
  }


  function agregarLibro(){
    const tablanumero = document.getElementById("TablaLibros");
    const tabla = document.getElementById("cuerpoTabla");
    const template = document.getElementById("cvRow");
    const templateRow = template.content;
    const titulo = document.getElementById("TextoTitulo").value;
    const autor = document.getElementById("TextoAutor").value;
    const genero = document.getElementById("TextoGenero").value;
    const fecha = document.getElementById("Fecha").value;
    console.log(template);
    console.log(templateRow);
    let tr = templateRow.cloneNode(true);
    console.log(tr);
    let colnumero = tr.querySelector(".cvNumero");
    let colTitulo = tr.querySelector(".cvNombre");
    let colAutor = tr.querySelector(".cvAutor");
    let colGenero = tr.querySelector(".cvGenero");
    let colAno = tr.querySelector(".cvAno");
    colnumero.textContent = tablanumero.rows.length;
    colTitulo.textContent = titulo;
    colAutor.textContent = autor;
    colGenero.textContent = genero;
    colAno.textContent = fecha;
    cuerpoTabla.appendChild(tr);
    console.log(tr);
  }
  function ContarTabla(){
    const CuerpoTabla = document.getElementById("cuerpoTabla");
    const ContarTablas = CuerpoTabla.rows.length;
  }
  function validarDatos(){
    const TextoTitulo =  document.getElementById("TextoTitulo").value;
    const TextoAutor= document.getElementById("TextoAutor").value;
    const TextoGenero= document.getElementById("TextoGenero").value;
    const TextoFecha= document.getElementById("Fecha").value;
    if (TextoTitulo == "") {
      alert("Titulo tiene que llenarse")
      return false;
    }
    if (TextoAutor == "") {
      alert("Autor tiene que llenarse");
      return false;
    }
    if (TextoGenero == "" || TextoGenero == "Genero") {
      alert("Genero debe llenarse");
      return false;
    }
    if (TextoFecha == "") {
      alert("Fecha debe llenarse");
      return false;
      }else{
        if(TextoFecha <= 1900){
          alert("Ingresar mayor a 1900");
          return false;
      }
    }
    agregarLibro();
    var modal = document.getElementsByClassName("Modal");
    modal.style.display = "none";
    return 0;
  }
  function VerificarContacto(){

    const TextoUsuario =  document.getElementById("NombreUsuario").value;
    const TextoMensaje = document.getElementById("Mensaje").value;
    const TextoCorreo = document.getElementById("Correo").value;
    const regex = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/;
    const resultado = regex.test(TextoCorreo);
    
    if (TextoUsuario == "") {
      alert("Name must be filled out");
      console.log("VACIO Titulo!");
      return false;
    }
    if (TextoMensaje == "") {
      alert("Autor tiene que llenarse");
      console.log("VACIO Autor!");
      return false;
    }
    if (!resultado) {
      alert("Correo no valido");
      return false;
    }
    return 0;
  }
  
  