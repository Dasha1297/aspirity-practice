import { createStore } from 'redux';
import { projectReducer } from './projectReducer';

const rootReducer = projectReducer;

export const store = createStore(rootReducer)