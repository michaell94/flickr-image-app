export const getImageUrl = (
  farm: number,
  server: string,
  id: string,
  secret: string,
  size: "q" | "s" | "m" | "z"
) =>
  `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_${size}.jpg`;
