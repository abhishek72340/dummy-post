export const getPost = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const result = await res.json();
    return result || [];
  } catch (err) {
    console.error(err);
  }
};
