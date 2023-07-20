export const contactsSelector = state => state.contacts.contactsList;
export const filterSelector = state => state.filter;
export const selectToken = state => state.credentials.token;
export const selectIsLoggedIn = state => state.credentials.isLoggedIn;
export const selectIsRefreshing = state => state.credentials.isRefreshing;
export const selectAuthName = state => state.credentials.name;
export const selectAuthEmail = state => state.credentials.email;