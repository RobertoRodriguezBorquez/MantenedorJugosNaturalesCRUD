  var matriz=[[]];

function mostrarProducto(){
	var largo=matriz.length;
	
	for(var x=0; x<largo;x++){
		for(var y=0; y<matriz[x].length;y++){
			alert(matriz[x][y]);
			//document.writeln(matriz[x][y]);
		}
	}
}

function insertarProducto(){
	var nombre=document.getElementById("nombre").value;
	var precio=document.getElementById("precio").value;
	var codigo=document.getElementById("codigo").value;
	var descripcion=document.getElementById("descripcion").value;
	var stock=document.getElementById("stock").value;
	matriz.push([nombre,precio,codigo,descripcion,stock]);
	alert("Producto insertado");
	document.getElementById("nombre").value="";
	document.getElementById("precio").value="";
	document.getElementById("codigo").value="";
	document.getElementById("descripcion").value="";
	document.getElementById("stock").value="";

}

function actualizarProducto(){
	//actualización de precio por medio del nombre
	var nombre=document.getElementById("nombre").value;
	var precio=document.getElementById("precio").value;
	var codigo=document.getElementById("codigo").value;
	var descripcion=document.getElementById("descripcion").value;
	var stock=document.getElementById("stock").value;
	
	var largo=matriz.length;
	for(var x=0; x<largo;x++){
		for(var y=0; y<matriz[x].length;y++){
			if(matriz[x][y]===codigo){
				//ACTUALIZO DATOS DE PRODUCTO
					matriz[x][0]=nombre;
					matriz[x][1]=precio;
					matriz[x][3]=descripcion;
					matriz[x][4]=stock;
				}

				alert("Datos actualizados correctamente ");
			
				// alert("Datoas actualizados correctamente "+nombre);
				// alert("Datoas actualizados correctamente "+precio);
				// alert("Datoas actualizados correctamente "+descripcion);
				// alert("Datoas actualizados correctamente "+stock);
		}

	}
	
	document.getElementById("nombre").value="";
	document.getElementById("precio").value="";
	document.getElementById("codigo").value="";
	document.getElementById("descripcion").value="";
	document.getElementById("stock").value="";
}

function eliminarProducto(){
//eliminar por codigo
	var codigo=document.getElementById("codigo").value;
	
	var largo=matriz.length;
	for(var x=0; x<largo;x++){
		for(var y=0; y<matriz[x].length;y++){
			 if(matriz[x][y]===codigo){
		 	//ELIMINA DATOS DE PRODUCTO
			 matriz.splice(x, 1);
			 document.getElementById("codigo").value="";
			 alert("Los datos relacionados con el codigo han sido eliminados con exito.");


			//  if(matriz[x][y]==codigo
			// 	){
			//  	matriz.splice([x][y],2);
			//  	alert("Producto eliminado");
			//  	document.getElementById("codigo").value="";
			}

		}
	}
	
}
