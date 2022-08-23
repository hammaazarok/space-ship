import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers/Index';

const store = configureStore(reducers, {});

export default store;
