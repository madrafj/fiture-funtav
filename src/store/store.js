import { configureStore } from '@reduxjs/toolkit';
import customPlanReducer from './slices/customPlanSlice'

export const store = configureStore({
  reducer: {
    customPlan: customPlanReducer,
  },
});
