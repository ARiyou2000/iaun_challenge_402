import {UilFavorite} from '@iconscout/react-unicons'
import {UisFavorite as UisFavoriteFill} from '@iconscout/react-unicons-solid'

const RatingStars = ({ratingNumber = 0, ...otherProps}) => {
  return (
    <div {...otherProps}>
      <div className={"flex flex-row flex-nowrap items-center gap-1"}>
        {Array(5).fill(null).map((_, index) => {
          if (index < ratingNumber) {
            return <UisFavoriteFill key={index} color={"#ffcd00"}/>
          }
          return <UilFavorite key={index} color={"#ffcd00"}/>
        })}
      </div>
    </div>
  )
}

export default RatingStars;
