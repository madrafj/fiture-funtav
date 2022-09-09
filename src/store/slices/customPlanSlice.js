import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  customerData: {
    name: '',
    email: '',
    phone: ''
  },
  preferences: {
    budgeting: 0,
    transportationMethod: '',
    accomodation: '',
    scheduleThightness: '',
    tourFocus: '',
    numberOfPersons: 1,
    medicalRecords: 'none'
  }
}

const customPlanSlice = createSlice({
  name: 'customPlan',
  initialState,
  reducers: {
    setCustomer: (state, action) => {
      state.customerData = {
        ...state.customerData,
        ...action.payload
      }
    },
    setPreferences: (state, action) => {
      state.preferences = {
        ...state.preferences,
        ...action.payload
      }
    },
    resetCustomer: (state) => {
      state.customerData = initialState.customerData
    },
    resetPreferences: (state) => {
      state.preferences = initialState.preferences
    }
  }
})

export const {
  setCustomer, setPreferences, resetPreferences, resetCustomer
} = customPlanSlice.actions

export const selectCustomPlan = (state) => state.customPlan
export const selectCustomer = (state) => state.customPlan.customerData
export const selectPreferences = (state) => state.customPlan.preferences

export default customPlanSlice.reducer