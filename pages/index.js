import TopSeller from "@/components/TopSeller";
import Reviews from "@/components/Reviews";
import CarList from "@/components/CarList";
import Footer from "@/components/Footer";
import DashboardLayout from "@/layouts/DashboardLayout";

const carListArray = [
  {
    title: "Koenigsegg",
    type: "Sport",
    gas: 90,
    girBoxType: "Manual",
    capacity: 2,
    price: "99.00",
    imageSrc: "/images/Vector (3).png"
  },
  {
    title: "Koenigsegg",
    type: "Sport",
    gas: 90,
    girBoxType: "Manual",
    capacity: 2,
    price: "99.00",
    originalPrice: "29.66",
    imageSrc: "/images/Vector (4).png"
  },
  {
    title: "Koenigsegg",
    type: "Sport",
    gas: 90,
    girBoxType: "Manual",
    capacity: 2,
    price: "99.00",
    imageSrc: "/images/Vector (5).png"
  },
  {
    title: "Koenigsegg",
    type: "Sport",
    gas: 90,
    girBoxType: "Manual",
    capacity: 2,
    price: "99.00",
    imageSrc: "/images/Vector (6).png"
  },
  {
    title: "Koenigsegg",
    type: "Sport",
    gas: 90,
    girBoxType: "Manual",
    capacity: 2,
    price: "99.00",
    imageSrc: "/images/Vector (7).png"
  },
  {
    title: "Koenigsegg",
    type: "Sport",
    gas: 90,
    girBoxType: "Manual",
    capacity: 2,
    price: "99.00",
    imageSrc: "/images/Vector (8).png"
  },
]

export default function Home() {
  return (
    <>
      <DashboardLayout>
        <TopSeller/>
        <Reviews/>
        <CarList title={"Recent cars"} list={[...carListArray].sort((a, b) => 0.5 - Math.random())}/>
        <CarList title={"Recommended cars"} list={[...carListArray].sort((a, b) => 0.5 - Math.random())}/>
      </DashboardLayout>
    </>
  )
}
