export function buildFptSearchUrl(productName: string) {
  return "https://fptshop.com.vn/tim-kiem?s=hyperwork";
}

export function buildTgddSearchUrl(productName: string) {
  return `https://www.thegioididong.com/tim-kiem?key=${encodeURIComponent(
    `HyperWork ${productName}`
  )}`;
}
