import React, { FC } from "react";
import { ICryptoDetails } from "../../redux/types/crypto/cryptoType";
import cardLogo from "./../../assets/images/icon.svg";
import "./CryptoDetailsCard.scss";
import { useDispatch } from "react-redux";
import { deleteCryptoDetailsListAction } from "../../redux/actions/crypto/cryptoAction";

interface ICryptoDetailsCardProps extends ICryptoDetails {
  index: number;
}
export const CryptoDetailsCard: FC<ICryptoDetailsCardProps> = ({
  cryptoSymbol,
  cryptoPrice,
  index,
}) => {
  const dispatch = useDispatch();
  const deleteCryptoDetailItem = () =>
    dispatch(deleteCryptoDetailsListAction(index));

  return (
    <div className="crypto-details-card-wrapper">
      <div className="card-logo">
        <img src={cardLogo} alt="card-logo" />
      </div>
      <div className="crypto-details-card-content-wrapper">
        <div className="crypto-symbol">{cryptoSymbol}</div>
        <div className="crypto-price">{Number(cryptoPrice).toFixed(2)} EUR</div>
      </div>
      <div className="delete-icon" onClick={deleteCryptoDetailItem}>
        <span>x</span>
      </div>
    </div>
  );
};
