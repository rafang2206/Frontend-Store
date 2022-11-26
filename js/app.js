document.addEventListener('DOMContentLoaded', function(){

    //variables
    const cuerpo = document.querySelector('body main')
    const producto = document.querySelector('.grid');
    const btnCerrar = document.querySelector('main');
    
    //eventos
    producto.addEventListener('click', seleccionarProducto)
    btnCerrar.addEventListener('click', cerrar)

    //funciones
    function seleccionarProducto(e){
        const parent = e.target.parentElement;
        if(parent.classList.contains('producto')){
            const infoProducto = {
                imagen: parent.querySelector('.producto img').src,
                nombre: parent.querySelector('.producto .producto__nombre').textContent,
            }
    
            agregarHtml(infoProducto);
        }
        

    }

    function agregarHtml(info){
        const div = document.createElement('DIV');
        div.classList.add('compra-producto')
        const titulo = document.createElement('H1');
        titulo.textContent = info.nombre;
        const producto = document.createElement('DIV');
        producto.innerHTML = `
            <img src="${info.imagen}">
            <div class="camisa_contenido container">
                <p>it to make a type specimen book. 
                It has survived not only five centuries orem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer 
                took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into 
                electronic typesetting, remaining essentially</p>
                <form class="form">
                    <div class="formulario">
                    <select class="formulario__campo">
                    <option class="option" disabled selected>--seleccionar talla--</option>
                    <option class="option">pequeña</option>
                    <option class="option">mediana</option>
                    <option class="option">grande</option>
                    </select>
                    <input class="formulario__campo" type="number" placeholder="cantidad" min="1">
                    <input class="formulario__submit" type="submit" value="agregar al carrito">
                    </div>
                </form>
            </div>
            <a class="btn-cerrar">X</a>
        `;
        producto.classList.add('camisa', 'container');


        div.appendChild(titulo);
        div.appendChild(producto);
        cuerpo.appendChild(div);
    }

    function cerrar(e){
        if(e.target.classList.contains('btn-cerrar')){
           const div = e.target.parentElement.parentElement;
           div.remove();
        }
        
        
    }

});