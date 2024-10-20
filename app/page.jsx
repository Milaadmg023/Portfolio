import Container from "@/components/home/home_container";
import fetcher from "@/utils/fetch";


export default async function Home() {
  const res = await fetcher("/");
  return (
    <Container data={res}/>
  );
}
