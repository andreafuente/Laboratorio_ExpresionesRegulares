import { IBANBienFormado, IBANValido, obtenerDatosIBAN, quitarEspaciosIBAN } from "./motor";

describe("IBANBienFormado", () => {
  test.each([
    ["ES6621000418450200051332", true],
    ["ES66 2100 0418 45 0200051332", true],
    ["ES66-2100-0418-45-0200051332", true],
    ["FR6621000418450200051332", false],
    ["ES662100041845020005133", false],
    ["ES66 2100 041A 45 0200051332", false],
  ])("debería devolver %p -> %p", (iban, esperado) => {
    expect(IBANBienFormado(iban)).toBe(esperado);
  });
});

describe("IBANValido", () => {
  test.each([
    ["ES9121000418450200051332", true],
    ["ES91 2100 0418 45 0200051332", true],
    ["ES91-2100-0418-45-0200051332", true],
    ["ES00 2100 0418 45 0200051332", false],
    ["FR66 2100 0418 45 0200051332", false],
    ["ES66 2100 0418 45 020005133", false],
  ])("debería validar %p -> %p", (iban, esperado) => {
    expect(IBANValido(iban)).toBe(esperado);
  });
});

describe("quitarEspaciosIBAN", () => {
  test.each([
    ["ES66 2100 0418 45 0200051332", "ES6621000418450200051332"],
    ["ES66-2100-0418-45-0200051332", "ES6621000418450200051332"],
    ["ES66 2100-0418 45-0200051332", "ES6621000418450200051332"],
  ])("debería transformar %p en %p", (iban, esperado) => {
    expect(quitarEspaciosIBAN(iban)).toBe(esperado);
  });
});


describe("obtenerDatosIBAN", () => {
  test.each([
    [
      "ES66 2100 0418 45 0200051332",
      {
        nombreBanco: "Caixabank",
        sucursal: "0418",
        control: "45",
        cuenta: "0200051332",
      },
    ],
    [
      "ES66 9999 0418 45 0200051332",
      {
        nombreBanco: "Banco desconocido",
        sucursal: "0418",
        control: "45",
        cuenta: "0200051332",
      },
    ],
  ])("debería extraer correctamente los datos de %p", (iban, esperado) => {
    expect(obtenerDatosIBAN(iban)).toEqual(esperado);
  });
});