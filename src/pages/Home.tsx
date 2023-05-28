import React, { useEffect, useState } from "react";
import Category from "../components/Category";
import Layout from "../components/Layout";
import Nominated from "../components/Nominated";
import axios from "axios";
import Oscar from "../new_oscar.json";
import { render } from "react-dom";

function Home() {
  // const selection: {category: String; nominee: string}[] = []
  const oscar = Oscar;
  const user = localStorage.getItem("user");
  const userName = localStorage.getItem("userName");
  console.log(oscar);

  function renderNominees(
    nominees: { title: string; imageUrl: string; label: string }[],
    category: string
  ) {
    return nominees.map((nominee) => {
      return (
        <Nominated
          name={nominee.title}
          category={category}
          img={nominee.imageUrl}
          label={nominee.label}
          select={saveNominee}
        />
      );
    });
  }

  function renderCategory(
    candidates: {
      name: string;
      nominees: { title: string; imageUrl: string; label: string }[];
    }[]
  ) {
    return candidates.map((category) => {
      return (
        <Category title={category.name}>
          {renderNominees(category.nominees, category.name)}
        </Category>
      );
    });
  }

  useEffect(() => {
    if (user) {
      getVotes(user);
    }
  }, []);

  function highlight(category: string, nominee: string) {
    const highlight = document
      .getElementById(`${category}`)
      ?.getElementsByClassName(`${category}`);
    if (highlight) {
      for (let el of Array.from(highlight)) {
        if (el.id === nominee) {
          el.className = `
				${category}
			bg-black text-[#ebab47] bg-opacity-100 m-2 p-2 rounded-xl w-4/5 
			flex justify-between items-center
			hover:bg-opacity-100
	
		`;
        } else {
          el.className = `
				${category}
			bg-black text-[#ebab47] bg-opacity-75 m-2 p-2 rounded-xl w-4/5 
			flex justify-between items-center
			hover:bg-opacity-100
	
		`;
        }
      }
    }
  }

  async function getVotes(user: string) {
    const userGet = user;
    axios
      .get("http://localhost:3002/getVotes", {
        params: {
          user: userGet,
        },
      })
      .then((resp) => {
        resp.data.map((vote: { category: string; nominee: string }) => {
          highlight(vote.category, vote.nominee);
        });
      });
  }
  async function saveNominee(
    nominee: string,
    category: string,
    imgUrl: string
  ) {
    await axios.post("http://localhost:3002/create", {
      user,
      category,
      nominee,
    });
    if (user) {
      getVotes(user);
    }
  }

  return <Layout title="Indicados ao Oscar">{renderCategory(oscar)}</Layout>;
}

export default Home;
