import ContentLoader from "react-content-loader"

function PlaceholderPizza() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="139" cy="124" r="124" />
      <rect x="0" y="268" rx="6" ry="6" width="280" height="25" />
      <rect x="0" y="308" rx="6" ry="6" width="280" height="86" />
      <rect x="135" y="410" rx="6" ry="6" width="144" height="45" />
      <rect x="0" y="420" rx="6" ry="6" width="89" height="27" />
    </ContentLoader>
  )
}

export default PlaceholderPizza;
