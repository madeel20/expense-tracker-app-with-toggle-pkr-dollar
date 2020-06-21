import React, { useContext } from "react";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { GlobalContext } from "../context/GlobalState";

function CurrencyToggler() {
  const { changeCurrency, currentCurrency } = useContext(GlobalContext);
  const [alignment, setAlignment] = React.useState(currentCurrency);
  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
      changeCurrency(newAlignment);
    }
  };
  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
      style={{ marginLeft: "100px" }}
    >
      <ToggleButton value="dollar" aria-label="left aligned">
        $
      </ToggleButton>
      <ToggleButton value="rupees" aria-label="centered">
        Rs /-
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default CurrencyToggler;
