import { extraerImagenes } from "./motor";


describe("extraerImagenes", () => {

  it("extrae una sola imagen del HTML", () => {
    
    // Given
    const html = '<img src="foto.jpg" alt="foto">';
    
    // When
    const resultado = extraerImagenes(html);

    // Then
    expect(resultado).toEqual(["foto.jpg"]);
  });

});

describe("extraerImagenes", () => {

  it("extrae múltiples imágenes del HTML", () => {
    
    // Given
    const html = `
      <img src="foto1.jpg" alt="foto1">
      <img src="foto2.png" alt="foto2">
      <img src="foto3.gif" alt="foto3">
    `;
    
    // When
    const resultado = extraerImagenes(html);

    // Then
    expect(resultado).toEqual(["foto1.jpg", "foto2.png", "foto3.gif"]);
  });

});

describe("extraerImagenes", () => {

  it("devuelve un array vacío si no hay imágenes en el HTML", () => {
    
    // Given
    const html = 'No hay imágenes';
    
    // When
    const resultado = extraerImagenes(html);

    // Then
    expect(resultado).toEqual([]);
  });

});

describe("extraerImagenes", () => {

  it("maneja imágenes con atributos adicionales", () => {
    
    // Given
    const html = '<img src="foto.jpg" alt="foto" width="100" height="100">';
    
    // When
    const resultado = extraerImagenes(html);

    // Then
    expect(resultado).toEqual(["foto.jpg"]);
  });

});

describe("extraerImagenes", () => {

  it("maneja imágenes con comillas simples en el src", () => {
    
    // Given
    const html = "<img src='foto.jpg' alt='foto'>";
    
    // When
    const resultado = extraerImagenes(html);

    // Then
    expect(resultado).toEqual(["foto.jpg"]);
  });

});

