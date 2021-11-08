var inv = angular.module("inventario",[]);
//stock
inv.controller("controlStock",function($scope){
    $scope.productoModificar = {};
    $scope.inventario=[
        {
            producto: "Celular",
            marca:"Samsung",
            precio:5000,
            cantidad:1
          
 
        },
        {
            producto: "Tablet",
            marca:"Xiaomi",
            precio:7000,
            cantidad:2
          
        },
        {
            producto: "Smart tv",
            marca:"LG",
            precio:15000,
            cantidad:2
           
 
        }
    ] 

    $scope.agregarInventario = function () {
        
        //Verificamos que el campo input no este vacio.
         if ($scope.nuevoProducto != null&&$scope.nuevaMarca!=null&&$scope.nuevaCantidad!=null&&$scope.nuevoPrecio){
                        // agregamos el elemento a nuestro array
                            $scope.inventario.push({
                            
                            producto: $scope.nuevoProducto,
                            marca:$scope.nuevaMarca,
                            cantidad:$scope.nuevaCantidad,
                            precio:$scope.nuevoPrecio
                            
                                                });
                            // Limpiamos el input
                            $scope.nuevoProducto = null;
                            $scope.nuevaMarca = null;
                            $scope.nuevoPrecio = null;
                            $scope.nuevaCantidad = null;

  

        }
      
            
        };
      
            
        $scope.modificar = function(producto){
            $scope.productoModificar = producto;
            $scope.show = true;
        }
                
            


   

 });