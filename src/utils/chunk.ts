export default function chunk(array: any[], size: number) {
  return Array.from({ length: Math.ceil(array.length / size) }, (v, i) => {
    console.log(v);
    return array.slice(i * size, i * size + size);
  });
}
