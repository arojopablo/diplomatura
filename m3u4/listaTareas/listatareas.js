   //Tomo lo que voy a usar

   const nuevaTarea = document.getElementById("textTarea");
   const agregarTarea = document.getElementById("agregarTarea");
   const ul = document.getElementById("lista");
   // Evento listener en boton "Agregar tarea"
   agregarTarea.addEventListener("click", (e) => {
       e.preventDefault();
       const text = nuevaTarea.value;
       if (text != "") {
           const li = document.createElement("li");
           const p = document.createElement("p");
           p.textContent = text;
           console.log(text);
           li.appendChild(p);
           li.appendChild(agregarBoton());
           ul.appendChild(li);
           nuevaTarea.value = ""; // Limpio campo te texto para ingresar tareas
       }
       else {
           alert("Debe ingresar una tarea"); // en caso que el campo de texto para ingresar tarea este vacio
       }

   })
   // agrego boton eliminar tarea
   function agregarBoton() {
       const eliminarTarea = document.createElement("button");

       eliminarTarea.textContent = "Eliminar";
       eliminarTarea.className = "botonEliminar";

       eliminarTarea.addEventListener("click", (e) => {
           const item = e.target.parentElement;
           ul.removeChild(item);
       })
       return eliminarTarea;
   }

   // Tomo fecha
   const fecha = new Date();
   document.getElementById("demo").innerHTML = fecha;