export type Foto = {
  id: string;
  url: string;
  width: number;
  height: number;
};
export const getFotos = async (): Promise<Foto[]> => {
  const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=100")
  if (!res.ok) throw new Error(`API request failed: ${res.status}`);

  return await res.json();
};