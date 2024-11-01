"use server";
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