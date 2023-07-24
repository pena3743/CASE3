let nombre = prompt("ingrese su numbre")
let edad = prompt(`ingrese su edad ${nombre}`)


const bartrago11 = 2500;
const bartrago22 = 1000;
const bartrago33 = "gratis";
const bartrago44 = 1000;
const bartrago55 = 500;
const bartrago66 = 1000;



if (edad < 15) {

  alert(`No podes ingresar ${nombre}`)



} else if (edad >= 15 && edad <= 18) {

  alert(`podes ingresar ${nombre}, pero no podes consumir alcohol.`)
  let trago = prompt(`por favor, introduzca que tipo de bebida sin alcohol va a consumir ${nombre}`)
  {

  }
  switch (trago) {

    case "coca":
      alert(`tiene un costo de $ ${bartrago11}`)
      alert(`puedes retirar por caja tu ${trago}` + " " + nombre)
      console.log(`facturacion por venta de ${trago}`)
      break;

    case "sprite":
      alert(`tiene un costo de ${bartrago22}`)
      alert(`puedes retirar tu ${trago} por caja ` + " " + nombre)
      console.log(`facturacion por venta de ${trago}`)
      break;

    case "agua":
      alert(`tiene un costo de ${bartrago33}`)
      alert(`puedes retirar tu ${trago}por caja ` + " " + nombre)
      console.log(`facturacion por venta de ${trago}`)
      break;
    default:
      alert(`no hay de esa bebida ${nombre}`)
      break;

  }

}

else {

  alert(`podes ingresar ${nombre}`)
  prompt(`por favor ${nombre}, ingresa que tipo de bebida vas a consumir`)



}
