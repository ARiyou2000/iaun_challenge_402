import TopSeller from "@/components/TopSeller";
import Reviews from "@/components/Reviews";
import CarList from "@/components/CarList";
import DashboardLayout from "@/layouts/DashboardLayout";
import {useEffect, useState} from "react";

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
    title: "Nissan GT-R",
    type: "Sport",
    gas: 80,
    girBoxType: "Manual",
    capacity: 2,
    price: "80.00",
    originalPrice: "100.00",
    imageSrc: "/images/Vector (4).png"
  },
  {
    title: "Rolls-Royce",
    type: "Sport",
    gas: 70,
    girBoxType: "Manual",
    capacity: 4,
    price: "96.00",
    imageSrc: "/images/Vector (5).png"
  },
  {
    title: "All New Rush",
    type: "SUV",
    gas: 70,
    girBoxType: "Manual",
    capacity: 6,
    price: "72.00",
    originalPrice: "80.00",
    imageSrc: "/images/Vector (6).png"
  },
  {
    title: "CR - V",
    type: "SUV",
    gas: 80,
    girBoxType: "Manual",
    capacity: 6,
    price: "80.00",
    imageSrc: "/images/Vector (7).png"
  },
  {
    title: "All New Trios",
    type: "SUV",
    gas: 90,
    girBoxType: "Manual",
    capacity: 6,
    price: "74.00",
    imageSrc: "/images/Vector (8).png"
  },
]

export default function Home() {

  const [recentCarsList, setRecentCarsList] = useState([]);
  const [recommendedCarList, setRecommendedCarList] = useState([]);

  useEffect(() => {
    setRecentCarsList([...carListArray].sort((a, b) => 0.5 - Math.random()))
    setRecommendedCarList([...carListArray].sort((a, b) => 0.5 - Math.random()))
  }, []);

  return (
    <>
      <DashboardLayout>
        <TopSeller/>
        <Reviews/>
        <CarList title={"Recent cars"} list={recentCarsList}/>
        <CarList title={"Recommended cars"} list={recommendedCarList}/>
      </DashboardLayout>
    </>
  )
}
