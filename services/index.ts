const url = 'https://agro-techfields.herokuapp.com';

export interface Ilha {
  id: number;
  localizacao: string;
}

export const getIlhas = async () => {
  const response = await fetch(`${url}/ilhas`);
  const data = await response.json();
  return data as Ilha[];
}

export const saveIlha = async (localizacao: string) => fetch(`${url}/ilhas`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({localizacao})
  });


export interface Registro {
  id: number;
  data: string;
  idIlha: Ilha;
  temperatura: number;
  umidadeAr: number;
  umidadeSolo: number;
  luz: number;
}
export const getRegistrosIlhas = async (id: string) => {
  const response = await fetch(`${url}/ilhas/${id}/registros`);
  const data = await response.json();
  return data as Registro[];
}

export interface Foto {
  id: number;
  data: string;
  downlaodPath: string;
}
export const getFotos = async () => {
  const response = await fetch(`${url}/fotos`);
  const data = await response.json();
  return data as Foto[];
}

export const fotoMedidor = "https://thumbs.dreamstime.com/b/o-medidor-de-solo-%C3%A9-usado-no-varejo-para-planta%C3%A7%C3%A3o-medida-acidez-do-185001580.jpg"