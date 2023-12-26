// validation
export interface Validation {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

//-------------------------------------------
export function validator(item: Validation) {
  let isValid = true;
  if (item.required) {
    isValid = isValid && item.value.toString().trim().length !== 0;
  }

  if (item.minLength != null && typeof item.value === "string") {
    isValid = isValid && item.value.trim().length >= item.minLength;
  }

  if (item.maxLength != null && typeof item.value === "string") {
    isValid = isValid && item.value.trim().length <= item.maxLength;
  }

  if (item.min != null && typeof item.value === "number") {
    isValid = isValid && item.value >= item.min;
  }

  if (item.max != null && typeof item.value === "number") {
    isValid = isValid && item.value <= item.max;
  }

  return isValid;
}
