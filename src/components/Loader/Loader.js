import React from "react";
import { ImSpinner } from "react-icons/im";
import { LoadSpinner } from "./Loader.styled";

const styles = {
  spinner: {
    display: "flex",
    alignItems: "center",
    marginBottom: 10,
    fontSize: 24,
  },
};

const Loader = () => {
  return (
    <LoadSpinner style={styles.spinner}>
      Загружаем... <ImSpinner size="32" name="icon-spin" />
    </LoadSpinner>
  );
};

export default Loader;
