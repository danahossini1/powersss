import HomaPage from "@/components/template/HomaPage";

export default function Home(props) {



  return (
    <main className="flex justify-center flex-col ntext-2xl">
      <HomaPage props={props} />
    </main>
  )
}

export async function getStaticProps() {

  const servisesRes = await fetch(`https://api.numberland.ir/v2.php/?apikey=${process.env.API_KEY}&method=getservice`)
  const servisesData = await servisesRes.json()

  const countryRes = await fetch(`https://api.numberland.ir/v2.php/?apikey=${process.env.API_KEY}&method=getcountry`)
  const countryData = await countryRes.json()


  return {
    props: {
      servises: servisesData,
      country: countryData
    }
  }
}