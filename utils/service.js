"use server";

export async function fetchFeedbacks(category) {
  let url = `${process.env.API_ROOT_URL}${process.env.API_ENDPOINT}${process.env.API_FEEDBACKS_ENDPOINT}`;
  if (category) {
    url += `?category=${category}`;
  }
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching feedbacks:", error);
    return [];
  }
}

export async function loginFormRequest(url, method= 'POST', data= null, cache = "force-cache") {
  try{
    const response = await fetch(url, {
      method,
      headers: {
        "Content-type": "application/json"
      },
      body: data ? JSON.stringify(data):null,
      cache
    })
    if(!response.ok){
      return { response: null, status: response.status, error: response }
    }
    const responseData = await response.json();
    return { response: responseData, status: response.status,error: null }
  }catch{
    
  }
}