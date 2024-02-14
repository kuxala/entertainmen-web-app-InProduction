import Card from "../card/Card";
import "./Recommended.css";
import data from "../../data.json";

function Recommended() {
  return (
    <div id="recommended">
      <h1>Recommended for you</h1>
      <div className="columns">
        {data.map((x) => {
          return (
            <Card
              year={x.year}
              category={x.category}
              rating={x.rating}
              title={x.title}
              url={x.thumbnail.regular.large}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Recommended;
