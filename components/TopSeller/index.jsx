import {Button, Image} from "antd";
import {useState} from "react";
import RatingStars from "@/components/RatingStars";
import {UilHeart} from '@iconscout/react-unicons'


const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const topSellerInfo = {
  TypeCar: "Sport",
  Capacity: "2Person",
  Steering: "Manual",
  Gasoline: "70L"
}

const TopSeller = () => {
  const [imageLink, setImageLink] = useState("/images/Vector (0).png");
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className={"flex flex-row flex-wrap items-start gap-16 justify-center"}>
        <div className={"basis-full md:basis-2/5 flex-none relative z-10"}>
          <Image
            preview={{
              visible: false,
            }}
            width={"100%"}
            src={imageLink}
            onClick={() => setVisible(true)}
          />
          <div
            style={{
              display: 'none',
            }}
          >
            <Image.PreviewGroup
              preview={{
                visible,
                onVisibleChange: (vis) => setVisible(vis),
              }}
            >
              <Image src={"/images/Vector (0).png"}/>
              <Image src={"/images/Vector (1).png"}/>
              <Image src={"/images/Vector (2).png"}/>
            </Image.PreviewGroup>
          </div>
          {/*<Image src={imageLink} width={"100%"}/>*/}
          <div className={"flex flex-row gap-4 items-center justify-between"}>
            <img src={"/images/Vector (0).png"} width={"30%"} onClick={() => {
              setImageLink("/images/Vector (0).png")
            }}/>
            <img src={"/images/Vector (1).png"} width={"30%"} onClick={() => {
              setImageLink("/images/Vector (1).png")
            }}/>
            <img src={"/images/Vector (2).png"} width={"30%"} onClick={() => {
              setImageLink("/images/Vector (2).png")
            }}/>
          </div>
        </div>


        <div
          className={"flex flex-col gap-8 justify-between basis-full md:basis-2/5 self-stretch flex-auto bg-white rounded-2xl shadow px-6 py-10"}>
          <div className={"flex flex-row justify-between items-start"}>
            <div>
              <h2 className={"font-bold text-6xl"}>Nissan GT-R</h2>
              <RatingStars ratingNumber={4} className={"inline-block"}/>
              <span className={"font-semibold text-gray-600 align-super ml-3"}>440+ Reviews</span>
            </div>

            <UilHeart size={42}/>
          </div>
          <p className={"text-gray-600 text-2xl"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At commodi doloribus impedit minus nam omnis quos
            similique, unde! Deserunt dignissimos est eum facilis itaque iusto magnam maxime minima nisi, quos soluta
            tempora tempore voluptas! Alias architecto assumenda omnis quidem quod sapiente similique, sint? Amet
            blanditiis commodi corporis distinctio dolore dolorem eius eligendi eum ex exercitationem facere impedit
            inventore iste iusto laboriosam maiores maxime natus, nobis nulla obcaecati odio omnis pariatur placeat
            saepe tenetur veniam voluptatem voluptates! Assumenda id nihil sed.
          </p>
          <div className={"flex flex-row flex-wrap justify-between items-center gap-x-10 gap-y-3"}>
            {Object.keys(topSellerInfo).map((property, index) => {
              return (
                <div
                  key={index}
                  className={"flex flex-row justify-between items-center gap-4 flex-1 basis-2/5 text-gray-600 text-3xl"}
                >
                  <h6 className={"font-normal"}>{property}</h6>
                  <h6 className={"font-extrabold"}>{topSellerInfo[property]}</h6>
                </div>
              )
            })}
          </div>

          <div className={"flex flex-row justify-between items-center"}>
            <div>
              <h5 className={"text-5xl font-semibold"}>$80.00/<span
                className={"text-gray-600 font-normal text-3xl"}>&nbsp;days</span></h5>
              <h6 className={"text-4xl font-normal text-gray-600 line-through"}>$100.00</h6>
            </div>
            <Button className={"h-full  p-6 bg-blue-600 text-xl font-semibold"} type={"primary"} color={"blue"}>Rent
              Now</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopSeller;
