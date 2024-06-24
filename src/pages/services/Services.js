import React, { useEffect } from "react";
import styles from "./Services.module.css";
import { SET_CURRENT_PATH } from "../../redux/slice/linkSlice";
import { useDispatch } from "react-redux";
import { CustomerPlanOptions, ServiceUpdates, WebDesignServices } from "../../components";
import { paymentOptions2 } from "../../components/customerPlanOptions/data";

const Services = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SET_CURRENT_PATH("services"));
}, [dispatch]);

  return (
    <div
      className={styles.services}
      style={{ backgroundColor: "var(--primaryBackgroundColor)" }}
    >
      <WebDesignServices />
      <ServiceUpdates />
      <CustomerPlanOptions plans={paymentOptions2}/>
    </div>
  );
};

export default Services;