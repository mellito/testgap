import { AiOutlineDislike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";

function Card({ card, onClickSocial }) {
  return (
    <div className="border border-gray-300 p-2 bg-gray-200">
      <h3 className="text-blue-500 font-bold">{card.name}</h3>
      <div>
        <p>{card.body}</p>
        <div
          className="flex justify-center items-center gap-2"
          onClick={() => onClickSocial(card.id)}
        >
          {!!card.status ? (
            <AiOutlineDislike className="text-red-700" />
          ) : (
            <AiOutlineLike className="text-blue-900" />
          )}
          <h3>Likes {card.like}</h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
