import "./homeCards.css";
import { useHistory } from "react-router-dom";
import { useHome } from "../../../contexts/home-context";
import Loader from "../../Loader/Loader";

function HomeCards() {
  const { quizDetail } = useHome();

  let history = useHistory<string>();
  return (
    <div className="home-cards">
      <h1 className="home-cards-header">Pick-A-Theme!</h1>
      {quizDetail ? (
        <div className="cards-section">
          {quizDetail &&
            quizDetail.map((item) => (
              <div className="game-card" key={item._id}>
                <h2>{item.themeName}</h2>
                <img
                  src={item.themeImage}
                  alt="theme"
                  onClick={() => history.push(`/${item._id}`)}
                />
              </div>
            ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default HomeCards;
