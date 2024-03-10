import { BannerHome } from "@/components/02-molecules/BannerHome";
import { BannerInfoHome } from "@/components/02-molecules/BannerInfoHome";
import { CarouselStartExam } from "@/components/03-organisms/Carousel/CarouselStartExam";
import { CarouselTest } from "@/components/03-organisms/Carousel/CarouselTest";
import Image from "next/image";

const items = [
  {
      idInstitution: '1016',
      urlImage: 'https://picsum.photos/124/100',
      alt: 'Image Test',
      nameInstitution: 'ICFES 9°',
      numSimulation: '3',
      isDataTest: true
  },
  {
      idInstitution: '1016',
      urlImage: 'https://picsum.photos/124/100',
      alt: 'Image Test',
      nameInstitution: 'ICFES 10°',
      numSimulation: '2',
      isDataTest: true
  },
  {
      idInstitution: '1016',
      urlImage: 'https://picsum.photos/124/100',
      alt: 'Image Test',
      nameInstitution: 'ICFES 11°',
      numSimulation: '4',
      isDataTest: true
  },
  {
      idInstitution: '1016',
      urlImage: 'https://picsum.photos/124/100',
      alt: 'Image Test',
      nameInstitution: 'Universidad Nacional',
      numSimulation: '2',
      isDataTest: true
  }
]

const items2 =  [
  {
      id: '1016',
      src: 'https://picsum.photos/124/100',
      alt: 'Image Coupon',
      title: 'UdeA',
      description: 'Examen primer corte 2023',
      textInfo: 'Pruebas de lógica, inglés y lectura',
      text: 'Ver más examenes',
      arrow: true,
      buttonText: 'Comenzar examen',
      newExam: true,
      isDataCard: true,
      // onClick: () => {
      //     console.log('Button clicked!');
      // },
  },
  {
      id: '1016',
      src: 'https://picsum.photos/124/100',
      alt: 'Image Coupon',
      title: 'Unal',
      description: 'Examen segundo corte 2022',
      textInfo: 'Pruebas de materias generales',
      text: 'Ver más examenes',
      arrow: true,
      buttonText: 'Comenzar examen',
      newExam: false,
      isDataCard: true,
      // onClick: () => {
      //     console.log('Button clicked!');
      // },
  },
  {
      id: '1016',
      src: 'https://picsum.photos/124/100',
      alt: 'Image Coupon',
      title: 'ICFES 11°',
      description: 'Examen primer corte 2024',
      textInfo: 'Pruebas de materias generales',
      text: 'Ver más examenes',
      arrow: true,
      buttonText: 'Comenzar examen',
      newExam: true,
      isDataCard: true,
      // onClick: () => {
      //     console.log('Button clicked!');
      // },
  },
]

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //     <h1>Crea la home page</h1>
    // </main>
    <main>
      <BannerHome/>
      <CarouselTest
        items={items}
      />
      <BannerInfoHome/>
      <CarouselStartExam
        items={items2}
      />
    </main>
  );
}
