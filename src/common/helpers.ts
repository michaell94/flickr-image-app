export const getImageUrl = (
  farm: number,
  server: string,
  id: string,
  secret: string,
  size: "q" | "s" | "m"
) =>
  `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_${size}.jpg`;
