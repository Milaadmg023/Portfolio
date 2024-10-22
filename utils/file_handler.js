export default async function file_handler(file) {
     const fileReader = new FileReader();
     fileReader.readAsDataURL(file);
     return new Promise((resolve, reject) => {
          fileReader.onload = () => {
               resolve(fileReader.result);
          };
          fileReader.onerror = (error) => {
               reject(error);
          };
     });
}