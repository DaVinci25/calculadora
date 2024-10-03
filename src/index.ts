let resultado: HTMLInputElement = document.getElementById("valores") as HTMLInputElement; 
// Método para recoger el input (valores)
function añadirNumero(teclado: string): void {
   
 
   if (teclado == "=") {
     calcular();
   } else {
     resultado.value += teclado;
   }
 }
 
 // Método para calcular usando eval()
 function calcular(): void {
   
   try {
     resultado.value = eval(resultado.value);
   } catch (e) {
     resultado.value = "Error";
   }
 }
 
 // Método para limpiar todo
 function limpiar(): void {
   resultado.value = "";
 }

