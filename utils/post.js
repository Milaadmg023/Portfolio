export default async function Post(url, data) {
     const baseUrl =
          process.env.NODE_ENV === "production" ? "" : "http://localhost:3000/";
     try {
          const res = await fetch(baseUrl + url, {
               method: "POST",
               body: data
          });
          return res.json();
     } catch (error) {
          console.log(error);
          return error;
     }
}