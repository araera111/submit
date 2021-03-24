import Api from "../services/Api";

export const getNovelList = async () => {
  try {
    const response = await Api.get();
    return response.results;
  }catch(error) {
    console.error(error);
  }
};

export const putNovelId = async (novelId) => {
  try {
    const submitElement = {
      id: novelId
    };
    const response = await Api.post("/novels/add", submitElement);
    console.log(response);
    return response.results;
  } catch (error) {
    console.error(error)
  }
};