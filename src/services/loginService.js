export const getAuth = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await res.json();
    return result || [];
  } catch (err) {
    console.error(err);
  }
};
