export const newsApi = async (category, country) => {
  try {
    const resp = await fetch(
      `https://gnews.io/api/v4/top-headlines?token=e40075e34d9b87c73599adec2800be27&topic=${category}&country=${country}
      `
    );
    const { articles } = await resp.json();
    return articles;
  } catch (error) {
    console.log(error);
  }
};
