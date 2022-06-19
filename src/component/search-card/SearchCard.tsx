import React, { FC, useState } from "react";
import "./SearchCard.scss";
import { Button } from "../core/Button/Button";
import { SEARCH_CARD_LABELS } from "./searchCard.labels";
import { useDispatch, useSelector } from "react-redux";
import { cryptoDetailsEffect } from "../../redux/effects/crypto-effects/cryptoMarketEffect";
import { AppState } from "../../redux/store";
import { ERROR_MESSAGE } from "../../constants/errorMessage.constants";
import { Input } from "../core/input/Input";
import { Loader } from "../core/loader/Loader";

export const SearchCard: FC = () => {
  const dispatch = useDispatch();
  const {
    cryptoDetailsList,
    cryptoDetailsItem: { loading, error, message },
  } = useSelector((state: AppState) => state.cryptoReducer);
  const [cryptoSymbol, setCryptoSymbol] = useState<string>("");
  const [showIsInListError, setShowShowIsInListErrorError] = useState(false);

  const getCryptoDetailItem = () =>
    cryptoDetailsList.find(
      (detailsItem) => detailsItem.cryptoSymbol.toLowerCase() === cryptoSymbol
    );
  const getCryptoBySymbol = () => {
    const isCryptoItemAlreadyInList = getCryptoDetailItem();
    if (isCryptoItemAlreadyInList) {
      setShowShowIsInListErrorError(Boolean(isCryptoItemAlreadyInList));
      return;
    }
    dispatch(cryptoDetailsEffect(cryptoSymbol));
    setCryptoSymbol("");
    setShowShowIsInListErrorError(false);
  };

  const handleCryptoCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCryptoSymbol(e.target.value);
    setShowShowIsInListErrorError(false);
  };

  return (
    <div className="search-card-wrapper">
      <Input
        className="search-card-input"
        placeholder={SEARCH_CARD_LABELS.searchInputPlaceHolderText}
        value={cryptoSymbol}
        onChange={(e) => handleCryptoCodeChange(e)}
      />
      <Button
        className="add-btn"
        onClick={getCryptoBySymbol}
        disabled={loading}
      >
        {loading ? <Loader /> : SEARCH_CARD_LABELS.addButtonText}
      </Button>
      {
        <span className="error-message">
          {showIsInListError
            ? ERROR_MESSAGE.CRYPTO_ITEM_ALREADY_IN_LIST(cryptoSymbol)
            : error && message}
        </span>
      }
      <p className="disclaimer">{SEARCH_CARD_LABELS.disclaimer}</p>
    </div>
  );
};
