import axios from "axios";
import React, { useEffect, useState } from "react";
import Category from "../components/Category";
import Layout from "../components/Layout";

export default function Ranking() {
  useEffect(() => {
    getRanking();
  }, []);

  const [ranking, setRanking] = useState<[{ user: string; correct: number }]>([
    { user: "", correct: 0 },
  ]);

  function renderRanking(ranking: [{ user: string; correct: number }]) {
    return ranking.map((user) => {
      return (
        <Category
          title={`${ranking.indexOf(user) + 1}º Colocado: ${user.user}`}
        >
          <h1>Acertos: {user.correct} / 23</h1>
        </Category>
      );
    });
  }

  function getRanking() {
    axios
      .get("https://crazy-duck-baseball-cap.cyclic.app/getRanking")
      .then((data) => data.data)
      .then(setRanking);
    // .then(data => setRanking(data.data))
  }

  return <Layout title="Ranking">{renderRanking(ranking)}</Layout>;
}
