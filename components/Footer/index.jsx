const Footer = () => {

  return (
    <footer className={"p-10  bg-white"}>
      <div className={"flex flex-row flex-wrap text-gray-600 text-xl"}>
        <div className={"basis-full md:basis-3/12"}>
          <h4 className={"text-blue-600 text-4xl font-extrabold"}>MORENT</h4>
          <p className="block my-5">
            Our vision is to provide convenience and help
            increase your sales business.
          </p>
        </div>
        <div className={"basis-full md:basis-3/12"}/>
        <div className={"basis-2/5 md:basis-2/12"}>
          <h2 className="m-5 text-xl font-semibold text-black">About</h2>
          <h5 className="m-5">how it works</h5>
          <h5 className="m-5">Featured</h5>
          <h5 className="m-5">Partnership</h5>
          <h5 className="m-5">Bussiness Relation</h5>
        </div>
        <div className={"basis-2/5 md:basis-2/12"}>
          <h2 className="m-5 text-xl font-semibold text-black">Community</h2>
          <h5 className="m-5">Events</h5>
          <h5 className="m-5">Blog</h5>
          <h5 className="m-5">Podcast</h5>
          <h5 className="m-5">Invite a friend</h5>
        </div>
        <div className={"basis-2/5 md:basis-2/12"}>
          <h2 className="m-5 text-xl font-semibold text-black">Socials</h2>
          <h5 className="m-5">Discord</h5>
          <h5 className="m-5">Instagram</h5>
          <h5 className="m-5">Twitter</h5>
          <h5 className="m-5">Facebook</h5>
        </div>
      </div>

      <div className={"flex flex-row flex-wrap justify-between md:border-t py-10 text-xl"}>
        <div className={"basis-full md:basis-6/12 text-right"}>
          <h2 className="mr-4 inline-block">Privacy & Policy</h2>
          <h2 className="ml-4 inline-block">Terms & Condition</h2>
        </div>
        <div className={"basis-full md:basis-6/12 md:order-first"}>
          <h2 className="mx-2">@2022 MORENT. All rights reserved</h2>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
