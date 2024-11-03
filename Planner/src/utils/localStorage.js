export const saveData = (data) => {
  localStorage.setItem("plannerData", JSON.stringify(data));
};

export const getEntries = () => {
  const entries = localStorage.getItem("plannerData");
  return entries ? JSON.parse(entries) : [];
};

export const getEntriesFromLocalStorage = () => {
  const storedEntries = localStorage.getItem("entries");
  return storedEntries ? JSON.parse(storedEntries) : []; // Ensure it returns an array
};
