const cheerio = require("cheerio");
const axios = require("axios");

const getHTML = async () => {
  try {
    return await axios.get("https://www.tu.ac.kr/tuhome/sub07_01_05.do");
  } catch (error) {
    console.log(error);
  }
};

const parsing = async () => {
  const html = await getHTML();
  const $ = cheerio.load(html.data);

  const $trs = $("tbody > tr");

  let dataArr = [];

  $trs.each((idx, node) => {
    const title = $(node).find("a").attr("title");
    const link = $(node).find("a").attr("href");

    if (title === "") {
      return;
    }

    dataArr.push({
      title,
      link,
    });
  });

  console.log(dataArr);
};

parsing();
