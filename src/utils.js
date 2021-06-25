export const setTheme = name => {
  try {
    localStorage.setItem("theme", name);
  } catch (error) {
    console.log(error);
  };
};

export const getTheme = () => {
  try {
    const ongoingTheme = localStorage.getItem("theme");
    return ongoingTheme;
  } catch (error) {
    console.log(error);
  };
};