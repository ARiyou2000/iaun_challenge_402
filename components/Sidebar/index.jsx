import {useState} from "react";

const SidebarItem = ({title, number}) => {
  return (
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
      <label className="form-check-label mx-2" htmlFor="flexCheckDefault">
        {title} <span>({number})</span>
      </label>
    </div>
  )
}

const typesInfo = [
  {title: "Sport", number: 10},
  {title: "SUV", number: 12},
  {title: "MPV", number: 16},
  {title: "Sedan", number: 20},
  {title: "Coupe", number: 14},
  {title: "Hatchback", number: 14},
]

const capacities = [
  {title: "2Person", number: 10},
  {title: "4Person", number: 14},
  {title: "6Person", number: 12},
  {title: "8Person", number: 16},
]

const FilterItem = ({title, dataArray}) => {

  return (
    <div>
      <div><span className={"block mb-3 font-monospace uppercase text-sm"}>{title}</span>

        {dataArray.map((info, index) => {
          return <SidebarItem key={index} title={info.title} number={info.number}/>
        })}
      </div>
    </div>
  )
}

const getItem = (title, dataArray) => {
  return {
    key: title,
    disabled: false,
    label: <h4 className={"font-semibold text-[#C2C2C2]"}>{title}</h4>,
    children:
      [<div key={title + "_submenu"}>
        {
          dataArray.map((info, index) => {
            // return <SidebarItem key={index} title={info.title} number={info.number}/>
            return {
              key: "side_menu_type_" + index,
              label: <SidebarItem key={index} title={info.title} number={info.number}/>
            }
          })
        }
      </div>]

  }
}

const items = [
  getItem("Type", typesInfo),
  getItem("Capacity", capacities),
  {
    key: "Price",
    label: <h4 className={"font-semibold text-[#C2C2C2]"}>Price</h4>,
    children: [
      <div key={"price_submenu"}>
        <input type={"range"}/>
        <h6>Max. $100.00</h6>
      </div>
    ]
  }
];
const Sidebar = (props) => {

  const [priceValue, setPriceValue] = useState(60);

  return (
    <>
      {/*<Menu*/}
      {/*  theme="light"*/}
      {/*  mode="inline"*/}
      {/*  defaultSelectedKeys={["Type,Capacity,Price"]}*/}
      {/*  items={items}*/}
      {/*  className={"h-screen bg-white"}*/}
      {/*  style={{width: "100%"}}*/}
      {/*/>*/}

      <div className={"gray-span flex flex-col justify-start items-start gap-5 bg-white p-10"}>

        <FilterItem title={"Type"} dataArray={typesInfo}/>

        <FilterItem title={"Capacity"} dataArray={capacities}/>

        <div>
          <span className={"block mb-3 font-monospace uppercase text-sm"}>Price</span>
          <input type={"range"} min={0} max={100} value={priceValue} onChange={(event) => {
            setPriceValue(event.target.value)
          }}/>
          <h6>Max. ${priceValue}.00</h6>
        </div>

      </div>
    </>
  )
}

export default Sidebar;
