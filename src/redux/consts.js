
export const ApiUrl = "http://173.212.214.70:3002/";

import { createStore } from 'redux';
import { projectReducer } from './projectReducer';

const rootReducer = projectReducer;

export const store = createStore(rootReducer)

