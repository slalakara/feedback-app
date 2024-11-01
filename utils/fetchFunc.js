"use server"
// utils/func.js
export async function fetchFeedbacks(category) {
  try {
    const response = await fetch('https://feedback.mkadirgulgun.com.tr/getfeedbacks');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("API Cevabı:", data); 
    return data;
  } catch (error) {
    console.error("API Hatası:", error);
    return [];
  }
}


export async function fetchFeedbackDetail(feedbackId) {
  const url = `${process.env.API_ROOT_URL}${process.env.API_ENDPOINT}${process.env.API_FEEDBACKS_DETAIL_ENDPOINT}/${feedbackId}`;
  
  const response = await fetch(url);
  if (!response.ok) throw new Error('Failed to fetch feedback detail');
  
  return response.json();
}

export async function fetchCategories() {
  const url = `${process.env.API_ROOT_URL}${process.env.API_ENDPOINT}${process.env.API_CATEGORIES_ENDPOINT}`;
  
  const response = await fetch(url);
  if (!response.ok) throw new Error('Failed to fetch categories');
  
  return response.json();
}

export async function createFeedback(feedbackData) {
  const url = `${process.env.API_ROOT_URL}${process.env.API_ENDPOINT}${process.env.API_CREATE_FEEDBACKS_ENDPOINT}`;
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(feedbackData),
  });
  if (!response.ok) throw new Error('Failed to create feedback');
  
  return response.json();
}

export async function updateFeedback(feedbackId, updateData) {
  const url = `${process.env.API_ROOT_URL}${process.env.API_ENDPOINT}${process.env.API_UPDATE_FEEDBACKS_ENDPOINT}/${feedbackId}`;
  
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updateData),
  });
  if (!response.ok) throw new Error('Failed to update feedback');
  
  return response.json();
}

function filterFeedbacks(feedbacks, filterId) {
  switch (filterId) {
    case "1": 
      return [...feedbacks].sort((a, b) => b.upvotes - a.upvotes);
    case "2": 
      return [...feedbacks].sort((a, b) => a.upvotes - b.upvotes);
    case "3":
      return [...feedbacks].sort((a, b) => b.comments.length - a.comments.length);
    case "4": 
      return [...feedbacks].sort((a, b) => a.comments.length - b.comments.length);
    default:
      return feedbacks; 
  }
}
