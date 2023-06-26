import CarCard from "@/components/CarCard";

const CarList = ({title, list = [],}) => {
  return (
    <>
      <div>
        <header className={"flex flex-row justify-between items-center text-xl font-semibold px-5 py-5"}>
          <h5 className={"text-gray-600 font-normal"}>{title}</h5>
          <h5 className={"text-blue-500 cursor-pointer"}>View All</h5>
        </header>
        <main className={"flex flex-row flex-nowrap overflow-x-auto gap-6"}>
          {list.map((car, index) => {
            return <CarCard key={index} {...car}/>
          })}
        </main>
      </div>
    </>
  )
}

export default CarList;
