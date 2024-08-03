import { BannerHome } from "@/components/02-molecules/BannerHome";
import { BannerInfoHome } from "@/components/02-molecules/BannerInfoHome";
import { CarouselStartExam } from "@/components/03-organisms/Carousel/CarouselStartExam";
import { CarouselTest } from "@/components/03-organisms/Carousel/CarouselTest";
import { GeneralSection } from "@/components/03-organisms/GeneralSection";
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
      idInstitution: '1017',
      urlImage: 'https://picsum.photos/124/100',
      alt: 'Image Test',
      nameInstitution: 'ICFES 10°',
      numSimulation: '2',
      isDataTest: true
  },
  {
      idInstitution: '1018',
      urlImage: 'https://picsum.photos/124/100',
      alt: 'Image Test',
      nameInstitution: 'ICFES 11°',
      numSimulation: '4',
      isDataTest: true
  },
  {
      idInstitution: '1019',
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
      id: '1017',
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
      id: '1018',
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
    <main>
      <BannerHome/>
      <GeneralSection
        classSection="flex flex-col items-center py-14 sm:pb-33 sm:pt-20"
        classBlockText="mb-8 px-3 sm:mb-18"
        classComponent="max-w-120"
        title="Prueba tus conocimientos"
        paragraph="Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Adipisci Alias Aperiam At, Aut Commodi Corporis Dolorum Ducimus Labore Magnam Mollitia Natus Porro Possimus Quae Sit Tenetur Veniam Veritatis Voluptate Voluptatem!"
        renderItem={<CarouselTest items={items}/>}
        items={items}
      />
      <BannerInfoHome/>
      <GeneralSection
        classSection="flex flex-col items-center py-14 sm:pb-33 sm:pt-20"
        classBlockText="mb-8 px-3 sm:mb-18"
        classComponent="max-w-120"
        title="Presenta exámenes"
        paragraph="Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Adipisci Alias Aperiam At, Aut Commodi Corporis Dolorum Ducimus Labore Magnam Mollitia Natus Porro Possimus Quae Sit Tenetur Veniam Veritatis Voluptate Voluptatem!"
        renderItem={<CarouselStartExam items={items2} />}
        items={items}
      />
    </main>
  );
}
