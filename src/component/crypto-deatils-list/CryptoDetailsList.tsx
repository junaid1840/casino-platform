import React, { FC } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { CryptoDetailsCard } from "../crypto-details-card/CryptoDetailsCard";
import "./CryptoDetailsList.scss";

export const CryptoDetailsList: FC = () => {
  const { cryptoDetailsList } = useSelector(
    (state: AppState) => state.cryptoReducer
  );

  return (
    <div className="crypto-details-list-wrapper">
      {cryptoDetailsList.map((cryptoDetailsItem, index) => (
        <CryptoDetailsCard
          key={`crypto-details-card-${index}`}
          {...cryptoDetailsItem}
          index={index}
        />
      ))}
    </div>
  );
};
