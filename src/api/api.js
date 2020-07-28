export const apiCall = (link) => 
  fetch(link).then((result) => result.json());