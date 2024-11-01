"use server"

export const createFeedback = async (feedbackData) => {
  const response = await fetch('https://feedback.mkadirgulgun.com.tr/createfeedback', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(feedbackData),
  });

  if (!response.ok) {
    throw new Error('API isteği başarısız oldu');
  }

  const data = await response.json();
  return data; 
};
