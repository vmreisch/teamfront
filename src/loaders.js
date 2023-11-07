const URL = "https://p4teamproj.onrender.com";

export const indexLoader = async () => {
  const response = await fetch(URL + "/athletes/");
  const athletes = await response.json();
  return athletes;
};

export const showLoader = async ({ params }) => {
  const response = await fetch(URL + `/athletes/${params.id}/`);
  const athlete = await response.json();
  return athlete;
};
