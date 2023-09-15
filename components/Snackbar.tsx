import * as React from "react";
import { useSnackbar } from "notistack";
import { Severity } from "@/types";

type Props = {
  errors: string[];
  severity: Severity;
};

const SnackBar: React.FC<Props> = ({ errors, severity }) => {
  const { enqueueSnackbar } = useSnackbar();

  React.useEffect(() => {
    if (errors.length > 0) {
      errors.forEach((error) => {
        enqueueSnackbar(error, {
          variant: severity,
          autoHideDuration: 5000,
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
          },
        });
      });
    }
  }, [errors, enqueueSnackbar, severity]);

  return null;
};

export default SnackBar;
