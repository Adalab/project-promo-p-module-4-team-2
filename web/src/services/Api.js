const dataApi = (data) => {
  return fetch("https://team-hook.herokuapp.com/cards", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((dataApi) => {
      return dataApi;
    });
};
export default dataApi;
