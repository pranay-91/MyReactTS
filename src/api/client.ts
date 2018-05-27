// Test API client using JSON Place holder
// https://jsonplaceholder.typicode.com/

export const getPlaceHolder = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const json = await res.json();
  return json;

};
