const logger = (store) => (next) => (action) => {
  //   console.log(store);
  //   console.log(next);
  //   console.log(action);
  if (Math.round(Math.random() * 100) > 50) {
    next(action);
  } else {
    console.log("Hoynai Bro! Testing ");
  }
};
export default logger;
