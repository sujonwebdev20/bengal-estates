const retainOnlyTitle = (htmlString) => {
  const doc = new DOMParser().parseFromString(htmlString, "text/html");

  const h1Elements = doc.querySelectorAll("h1");

  h1Elements.forEach((h1) => {
    h1.removeAttribute("style");
  });

  const cleanedHtml = Array.from(h1Elements)
    .map((h1) => `<h1>${h1.textContent}</h1>`)
    .join("");

  let title = "";

  if (cleanedHtml.startsWith("<h1>")) {
    title = new DOMParser()
      .parseFromString(cleanedHtml, "text/html")
      .querySelector("h1").textContent;
  }
  return title;
};

export default retainOnlyTitle;
