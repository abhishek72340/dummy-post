export const getComments = async (id) => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    const result = await res.json();
    return result || [];
  } catch (err) {
    console.error(err);
  }
};
