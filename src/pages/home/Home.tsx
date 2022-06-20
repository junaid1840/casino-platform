import React, { FC } from "react";
import "./../../assets/scss/global.scss";
import { Header } from "../../component/header/Header";
import { Footer } from "../../component/footer/Footer";
import { SearchCard } from "../../component/search-card/SearchCard";
import "./Home.scss";
import { HOME_PAGE_LABELS } from "./home.labels";
import { CryptoDetailsList } from "../../component/crypto-deatils-list/CryptoDetailsList";

export const Home: FC = () => {
  return (
    <>
      <div className="home-wrapper">
        <div className="container">
          <Header />
          <div className="main-container">
            <div className="headlines-wrapper">
              <h1 className="main-heading">{HOME_PAGE_LABELS.mainHeading}</h1>
              <h3 className="subtitle">{HOME_PAGE_LABELS.subtitle}</h3>
            </div>
            <SearchCard />
          </div>
          <div className="lower-container">
            <CryptoDetailsList />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
