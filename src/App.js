import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";


import { getDictionaryAction, getProductDetailAction } from "./services/actions";
import AppLayout from './router'


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDictionaryAction())
    let obj = {
      id: 254,
      lang: 'en'
    }
    dispatch(getProductDetailAction(obj))
  }, [])

  return (
    <>
      <AppLayout />
    </>
  );
}

export default App;
