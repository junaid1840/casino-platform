export const ERROR_MESSAGE = {
  CURRENCY_DETAILS_NOT_AVAILABLE: (currencySymbol: string): string =>
    `Sorry, currently ${currencySymbol.toUpperCase()} details are not available!`,
  CRYPTO_ITEM_ALREADY_IN_LIST: (currencySymbol: string): string =>
    `Sorry, ${currencySymbol.toUpperCase()} is already in the list!`,
};
