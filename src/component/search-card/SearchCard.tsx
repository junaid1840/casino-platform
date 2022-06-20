import React, { FC, useState } from "react";
import "./SearchCard.scss";
import { Button } from "../core/Button/Button";
import { SEARCH_CARD_LABELS } from "./searchCard.labels";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { ERROR_MESSAGE } from "../../constants/errorMessage.constants";
import { Input } from "../core/input/Input";
import { Loader } from "../core/loader/Loader";
import { useLazyQuery } from "@apollo/client";
import { ICryptoCurrentPriceResponse } from "../../services/crypto-services/cryptoMarketServices";
import { addCryptoDetailsListAction } from "../../redux/actions/crypto/cryptoAction";
import {
  getCryptoDetailItem,
  getFormattedCryptoDetailsItem,
} from "./searchCard.utils";
import { GET_CRYPTO_PRICE_QUERY } from "../../services/graphQLManager/queries";

export const SearchCard: FC = () => {
  const dispatch = useDispatch();
  const { cryptoDetailsList } = useSelector(
    (state: AppState) => state.cryptoReducer
  );
  const [cryptoSymbol, setCryptoSymbol] = useState<string>("");
  const [searchErrorMessage, setSearchErrorMessage] = useState<string>("");

  const handleCryptoCodeChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setCryptoSymbol(e.target.value);
    setSearchErrorMessage("");
  };

  const addToCryptoDetailsList = (data: ICryptoCurrentPriceResponse): void => {
    const firstValidDetailItem = data.markets.find(
      (cryptoItem) => cryptoItem.ticker !== null
    );
    const formattedCryptoDetails =
      getFormattedCryptoDetailsItem(firstValidDetailItem);
    formattedCryptoDetails
      ? dispatch(addCryptoDetailsListAction(formattedCryptoDetails))
      : setSearchErrorMessage(
          ERROR_MESSAGE.CURRENCY_DETAILS_NOT_AVAILABLE(cryptoSymbol)
        );
  };

  const [getCryptoDetails, { loading }] = useLazyQuery(GET_CRYPTO_PRICE_QUERY, {
    variables: { cryptoSymbol },
    onCompleted: addToCryptoDetailsList,
  });

  const getCryptoBySymbol = async (): Promise<void> => {
    if (getCryptoDetailItem(cryptoDetailsList, cryptoSymbol)) {
      setSearchErrorMessage(
        ERROR_MESSAGE.CRYPTO_ITEM_ALREADY_IN_LIST(cryptoSymbol)
      );
      return;
    }
    getCryptoDetails({ variables: { cryptoSymbol } });
    setCryptoSymbol("");
    setSearchErrorMessage("");
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
      {<span className="error-message">{searchErrorMessage}</span>}
      <p className="disclaimer">{SEARCH_CARD_LABELS.disclaimer}</p>
    </div>
  );
};
