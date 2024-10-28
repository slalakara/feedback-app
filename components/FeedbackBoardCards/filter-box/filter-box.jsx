"use client";
import "@/components/FeedbackBoardCards/filter-box/filter-box.css";
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import categories from "@/components/data/categories.json";

export default function FilterBox() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const createQueryString = (name, value) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(name, value);
    return params.toString();
  };

  return (
    <div className="Categories">
      <div className="CategoryItem">
        <button onClick={() => router.push(`${pathname}`)}>All</button>
          {categories.categories && categories.categories.length > 0 ? (
            categories.categories.map((category, index) => (
                <button onClick={() => router.push(`${pathname}?${createQueryString("category", category.slug)}`)}>
                  {category.name}
                </button>
            ))
          ) : (
            <p>No categories available</p>
          )}
      </div>
    </div>
  );
}