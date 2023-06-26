import Like from "@/components/icons/Like";
import Gas from "@/components/icons/Gas";
import Girbox from "@/components/icons/Girbox";
import Profile2User from "@/components/icons/Profile2User";
import {useState} from "react";

const className = "flex flex-row items-center gap-1 text-gray-600"

const CarCard = ({
                   title = "Name",
                   type = "Car Type",
                   gas = 0,
                   capacity = 0,
                   girBoxType = "Manual",
                   imageSrc = "",
                   price = "00.00",
                   originalPrice,
                   ...otherProps
                 }) => {

  const [favorite, setFavorite] = useState(false);

  return (
    <>
      <div
        className="p-5 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex-none flex flex-col gap-4" {...otherProps}>

        <div style={{display: "flex", alignItems: "start", justifyContent: "space-between"}}>
          <div>
            <h5 className="card-title">{title}</h5>
            <span style={{display: "block", marginLeft: 0, fontWeight: "bold"}}>{type}</span>
          </div>
          <Like fill={favorite ? "red" : "none"} onClick={() => {
            setFavorite(!favorite)
          }}/>
        </div>

        <div className={"h-[10rem] flex items-end"}>
          <img className="p-3 rounded-t-lg" src={imageSrc} alt="product image"/>
        </div>

        <div>

          <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
            <div className={className}><Gas/><span>{gas}L</span></div>
            <div className={className}><Girbox/><span>{girBoxType}</span></div>
            <div className={className}><Profile2User/><span>{capacity} People</span></div>
          </div>

          <div className="my-10"/>

          <div className="flex items-center justify-between">

            <div>
              <h5 className={"text-3xl font-semibold"}>${price}/
                <span className={"text-gray-600 font-semibold text-xl"}>&nbsp;day</span></h5>
              {originalPrice && <h6 className={"text-2xl font-normal text-gray-600 line-through}"}>{originalPrice}</h6>}
            </div>

            <a
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Rent Now
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default CarCard;
