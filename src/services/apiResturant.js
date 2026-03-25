const API_URL = "https://api.jsonbin.io/v3/b/69bec9f3aa77b81da9068805";
export default async function fetchMenu() {
  const res = await fetch(API_URL, {
    headers: {
      "X-Master-Key":
        "$2a$10$Cbrd.nXJFZPW4gEbg2ken.IjS.XNZprFnV1VEK7e5nmdlLpwq/lT2 ",
    },
  });
  if (!res.ok) throw Error("Failed getting menu");
  const data = await res.json();

  return data.record;
}
