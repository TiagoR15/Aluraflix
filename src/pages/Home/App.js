import React, { useEffect, useState } from "react";
import Menu from "../../components/Menu";
import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import categoriesRepository from '../../repositories/categories'
import PageDefault from "../../components/PageDefault"
import "./App.css";

function Home() {
  const { dadosIniciais, setDadosIniciais } = useState([])

  useEffect(() => {
    categoriesRepository.getAllWithVideos()
      .then((res) => {
        setDadosIniciais(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [])

  return (
    <PageDefault>
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="O que é Front-end? Trabalhando na área"
      />
      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />
      <Carousel category={dadosIniciais.categorias[1]} />
      <Carousel category={dadosIniciais.categorias[2]} />
      <Carousel category={dadosIniciais.categorias[3]} />
      <Carousel category={dadosIniciais.categorias[4]} />
    </PageDefault>
  );
}
export default Home;
