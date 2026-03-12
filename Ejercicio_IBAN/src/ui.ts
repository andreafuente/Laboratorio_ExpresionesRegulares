import { IBANBienFormado, IBANValido, obtenerDatosIBAN } from "./motor";

const inputIBAN = document.getElementById("iban-input") 
const botonValidar = document.getElementById("validar-boton") 
const valorFormado = document.getElementById("bienformado") 
const valorValido = document.getElementById("validacion") 
const datosDiv = document.getElementById("datos-iban") 



const comprobarValor = (valor: string) => {
    if (valorFormado !== null && valorFormado !== undefined && valorFormado instanceof HTMLSpanElement) {
        if (!IBANBienFormado(valor)) {
            valorFormado.textContent = "El IBAN no tiene un formato válido";
            return;
        }
        valorFormado.textContent = "El IBAN tiene un formato válido";
    }
}

const comprobarValidez = (valor: string) => {
    if (valorValido !== null && valorValido !== undefined && valorValido instanceof HTMLSpanElement) {
        if (!IBANValido(valor)) {
            valorValido.textContent = "El IBAN no es válido";
            return;
        }
        valorValido.textContent = "El IBAN es válido";
    }
}
const mostrarDatosIBAN = (valor: string) => {

  if (!(datosDiv instanceof HTMLDivElement)) {
    return;
  }

  const datos = obtenerDatosIBAN(valor);

  if (!datos) {
    datosDiv.textContent = "No se pudieron extraer los datos";
    return;
  }

  datosDiv.innerHTML = `
    <p><strong>Banco:</strong> ${datos.nombreBanco}</p>
    <p><strong>Oficina:</strong> ${datos.sucursal}</p>
    <p><strong>Dígito de control:</strong> ${datos.control}</p>
    <p><strong>Cuenta:</strong> ${datos.cuenta}</p>
  `;
};

const handleValidarClick = () => {
    if (inputIBAN !== null && inputIBAN !== undefined && inputIBAN instanceof HTMLInputElement) {
        const valor = inputIBAN.value;
        comprobarValor(valor);
        comprobarValidez(valor);
        mostrarDatosIBAN(valor);
    }
}

export const iniciarUI = () => {
  if (botonValidar !== null && botonValidar !== undefined && botonValidar instanceof HTMLButtonElement) {
    botonValidar.addEventListener("click", handleValidarClick);
  }
};

    