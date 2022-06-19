export const ERROR_MESSAGE = {
  CURRENCY_DETAILS_NOT_AVAILABLE: (currencySymbol: string): string =>
    `Sorry, currently ${currencySymbol} details are not available!`,
  CRYPTO_ITEM_ALREADY_IN_LIST: (currencySymbol: string): string =>
    `Sorry, ${currencySymbol} is already in the list!`,
};
