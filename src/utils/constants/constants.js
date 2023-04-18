/**
 * Available filter options for the app.
 * @type {Array.<string>}
 */
export const statusFilters = ["Show all", "Follow", "Followings"];

/**
 * Base URL for the API.
 * @type {string}
 */
export const BASE_URL_API = "https://643a987ebd3623f1b9b6f228.mockapi.io/";

/**
 * List of routes for the app.
 * @type {Array.<Object>}
 */
export const ROUTES_LIST = [
  { name: "Home", path: "/" },
  { name: "Tweets", path: "/tweets" },
];

/**
 * Enum of keys used to store data in local storage.
 * @enum {string}
 * @readonly
 */
export const localStorageKeys = Object.freeze({
  users: "users",
  filter: "filter",
  followings: "followings",
});

/**
 * The maximum number of items that can be displayed on a page.
 * @type {number}
 */
export const ITEM_LIMIT_PER_PAGE = 9;

/**
 * The total number of items in the app.
 * @type {number}
 */
export const TOTAL_ITEMS_COUNT = 40;
