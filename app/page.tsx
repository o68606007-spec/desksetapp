import { SearchForm } from "./components/SearchForm";
import { HomeTitle } from "./components/HomeTitle";
import { HomeContent } from "./components/HomeContent";

export default function Page() {
  return (
    <>
      <HomeTitle />
      <HomeContent />
      <SearchForm />
    </>
  )
}