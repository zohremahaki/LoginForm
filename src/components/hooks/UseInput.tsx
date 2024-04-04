import { useState } from "react";
import { useForm } from "react-hook-form";
interface FormValue {
  username: string;
  password: string;
}
interface UseInputReturn {
  value: string;
  isValid: boolean;
  hasError: boolean;
  valueChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  valueBlurHandler: () => void;
  reset: () => void;
}

const useInput = () => {
  // const useInput = (validateValue?: (value: string) => boolean) => {
  const [isVisible, setVisible] = useState(false);
  const toggle = () => {
    setVisible(!isVisible);
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm<FormValue>({
    mode: "onBlur",
  });

  const onSubmit = (data: FormValue) => {
    console.log(data);
    reset();
  };
  //   const [enteredValue, setEnteredValue] = useState<string>("");
  //   const [isTouched, setIsTouched] = useState<boolean>(false);
  //   const valueIsValid = validateValue ? validateValue(enteredValue) : true;
  //   const hasError = !valueIsValid && isTouched;
  //   const valueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setEnteredValue(event.target.value);
  //   };
  //   const valueBlurHandler = () => {
  //     setIsTouched(true);
  //   };
  //   const reset = () => {
  //     setEnteredValue("");
  //     setIsTouched(false);
  //   };
  return {
    // value: enteredValue,
    // isValid: valueIsValid,
    // hasError,
    // valueChangeHandler,
    // valueBlurHandler,
    reset,
  } as UseInputReturn;
};
export default useInput;
