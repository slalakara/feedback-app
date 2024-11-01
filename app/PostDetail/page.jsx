import SidebarHome from "@/components/FeedbackBoardCards/sidebar/SidebarHome";
import FeedbackCard from "@/components/FeedbackCard";
import FeedbackHeaderComp from "@/components/FeedbackHeader/FeedbackHeaderComp";

// export const metadata = {
//     title: {
//         absolute: "Stories"
//     }
// }

export default function Page({searchParams}) {
    // let url = `${process.env.API_ROOT_URL}${process.env.API_ENDPOINT}${process.env.API_FEEDBACKS_ENDPOINT}`
    // if(searchParams?.category){
    //     url = `${url}?category=${category}`
    // }

    // console.log(url);

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <SidebarHome />
      </div>
      <main className={styles.content}>
        <FeedbackHeaderComp onFilterChange={setSelectedFilter} />
        {feedbacks.length > 0 ? (
          feedbacks.map((feedback) => (
            <FeedbackCard key={feedback.id} feedback={feedback} />
          ))
        ) : (
          <p>Hiç geri bildirim yok.</p>
        )}
      </main>
    </div>
  );
}
