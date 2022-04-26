
export const onInput = (field, setState) => (value) => {
  return setState((state) => ({
    ...state,
    [field]: value,
  }));
};

export const onSelect = (field, setState) => (value) => {
  setState((state) => ({
    ...state,
    [field]: value,
  }));
};

export const onDateTime = (field, setState) => (value) => {
  setState((state) => ({
    ...state,
    [field]: value,
  }));
};

export const onChecked = (field, setState) => (event) => {
  setState((state) => ({
    ...state,
    [field]: event.target.checked,
  }));
};

