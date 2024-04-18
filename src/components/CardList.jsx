import Card from "./Card";
// eslint-disable-next-line react/prop-types
const CardList = ({ cards, onClickSocial }) => {
  return (
    <div className="grid grid-cols-2 gap-1">
      {cards.map((card) => {
        return <Card key={card.id} card={card} onClickSocial={onClickSocial} />;
      })}
    </div>
  );
};

export default CardList;
