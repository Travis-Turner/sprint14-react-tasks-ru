export const setCalGoal = (calGoal, token) => {
  console.log('token', token);
  return fetch(`${BASE_URL}/En-cal-goals`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({calGoal})
  })
  .then((response) => {
    console.log(response);
  })
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });
}