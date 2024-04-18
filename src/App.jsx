import { useEffect, useState } from "react";
import CardList from "./components/CardList";
import { getPost } from "./assets/apt";
function App() {
  const [cardList, setCardList] = useState([]);
  const postData = async () => {
    const cardListData = await getPost();
    const cardListNew = cardListData.map((card) => {
      return {
        ...card,
        status: true,
        like: Math.floor(Math.random() * 20) + 1,
      };
    });

    setCardList(cardListNew);
  };

  const onClickSocial = (id) => {
    const cardIndex = cardList.findIndex((card) => card.id === id);

    if (cardIndex !== -1) {
      const newArray = [...cardList];
      newArray[cardIndex] = {
        ...newArray[cardIndex],
        status: !newArray[cardIndex].status,
        like: newArray[cardIndex].status
          ? newArray[cardIndex].like + 1
          : newArray[cardIndex].like - 1,
      };
      setCardList(newArray);
    }
  };

  useEffect(() => {
    postData();
  }, []);

  return (
    <div>
      {cardList && <CardList cards={cardList} onClickSocial={onClickSocial} />}
    </div>
  );
}

export default App;
