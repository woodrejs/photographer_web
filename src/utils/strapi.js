import axios from "axios";

export async function getList(name) {
  const resp = await axios({
    url: `${process.env.REACT_APP_STRAPI_DB}`,
    method: "post",
    data: {
      query: `
        {
          ${name}{
              id
              date
              title
              src{
                formats
              }           
          }
        }      
        `,
    },
  });

  return resp.data.data[name];
}
export async function getSingle(name, id) {
  const resp = await axios({
    url: `${process.env.REACT_APP_STRAPI_DB}`,
    method: "post",
    data: {
      query: `
      {
        ${name} (where:{id: "${id}"}) {
         id
         title
         date
         images{
           id         
           src{formats}
         }
        }
      }      
        `,
    },
  });

  return resp.data.data[name][0];
}
export async function getSlides() {
  const resp = await axios({
    url: `${process.env.REACT_APP_STRAPI_DB}`,
    method: "post",
    data: {
      query: `
        {
          slides {
              id
              src{
                formats
              }           
          }
        }      
        `,
    },
  });

  return resp.data.data.slides;
}
