import Container from "@/components/home/home_container";
import fetcher from "@/utils/fetch";


export default async function Home() {
  const res = await fetcher("http://localhost:3000/api/");
  return (
    <Container data={res}/>
  );
}
