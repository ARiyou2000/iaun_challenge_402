import {useEffect, useState} from "react";
import RatingStars from "@/components/RatingStars";

const UserReview = ({review, avatarSrc}) => {
  return (
    <>
      <div>
        <div className={"flex flex-row items-start justify-between"}>
          <div className={"flex items-start justify-start gap-2"}>
            <img src={avatarSrc} alt={"Err"} width={55}
                 className={"rounded-full"}/>
            <div>
              <h4 className={"text-xl font-semibold"}>{review.name}</h4>
              <span className={"block text-gray-400"}>{review.email}</span>
            </div>
          </div>
          <div className={""}>
            <h5 className={"text-right"}>22 July 2022</h5>
            <RatingStars ratingNumber={Math.random() * 5 + 1}/>
          </div>
        </div>
        <p className={"text-sm text-gray-600"}>
          {review.body}
        </p>
      </div>
    </>
  )
}


const Reviews = () => {
  const [reviews, setReviews] = useState([])
  const [showMore, setShowMore] = useState(false);
  useEffect(() => {
    const getReviewsList = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments");
        const result = await response.json()
        setReviews(result)
      } catch (e) {
        console.error(e)
      }
    }

    getReviewsList();
  }, [])

  return (
    <>
      <div className={"bg-white rounded-2xl shadow px-6 py-10"}>
        <div id="accordion-flush" data-accordion="collapse"
             data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
             data-inactive-classes="text-gray-500 dark:text-gray-400">
          <h2 id="accordion-flush-heading-1">
            {reviews.slice(0, 3).map((review, index) => {
              return (
                <UserReview key={index} review={review}
                            avatarSrc={`https://reqres.in/img/faces/${index % 6 + 1}-image.jpg`}/>
              )
            })}
          </h2>
          <div id="accordion-flush-body-1" className={showMore ? "block" : "hidden"}
               aria-labelledby="accordion-flush-heading-1">
            <div className="border-b border-gray-200 dark:border-gray-700">
              {reviews.slice(3).map((review, index) => {
                return (
                  <UserReview key={index + 3} review={review}
                              avatarSrc={`https://reqres.in/img/faces/${(index + 3) % 6 + 1}-image.jpg`}/>
                )
              })}
            </div>
          </div>

          <button type="button"
                  className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                  data-accordion-target="#accordion-flush-body-1" aria-expanded="true"
                  aria-controls="accordion-flush-body-1"
                  onClick={() => {
                    setShowMore(!showMore)
                  }}
          >
            <span>{showMore ? "Show Less" : "Show More"}</span>
            <svg data-accordion-icon className={`w-6 h-6 ${showMore ? "rotate-180" : "rotate-0"} shrink-0`}
                 fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"></path>
            </svg>
          </button>

        </div>
      </div>
    </>
  )
}


export default Reviews;
