import { extraerImagenes } from "./motor";

const textarea = document.getElementById("box");
const botonExtraer = document.getElementById("extraer");
const contenedorResultado = document.getElementById("resultado");

const crearLista = (urls: string[]): HTMLUListElement => {
  const lista = document.createElement("ul");

  urls.forEach((url) => {
    const item = document.createElement("li");

    const enlace = document.createElement("a");
    enlace.href = url;
    enlace.textContent = url;
    enlace.target = "_blank";

    item.appendChild(enlace);
    lista.appendChild(item);
  });

  return lista;
};

const limpiarResultados = (contenedor: HTMLDivElement): void => {
  contenedor.innerHTML = "";
};

export const mostrarResultados = (
  contenedor: HTMLDivElement,
  urls: string[],
): void => {
  limpiarResultados(contenedor);

  if (urls.length === 0) {
    contenedor.textContent = "No hay imágenes.";
    return;
  }
  const lista = crearLista(urls);
  contenedor.appendChild(lista);
};

const handleExtraerClick = (): void => {
  if (
    textarea !== null &&
    contenedorResultado !== null &&
    textarea !== undefined &&
    contenedorResultado != undefined &&
    textarea instanceof HTMLTextAreaElement &&
    contenedorResultado instanceof HTMLDivElement
  ) {
    const html = textarea.value;
    const urls = extraerImagenes(html);
    mostrarResultados(contenedorResultado, urls);
  }
};

export const iniciarUI = () => {
if (
  botonExtraer !== null &&
  botonExtraer !== undefined &&
  botonExtraer instanceof HTMLButtonElement
) {
  botonExtraer.addEventListener("click", handleExtraerClick);
}
};
