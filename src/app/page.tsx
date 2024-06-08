import TransferToExercises from "./components/TransferToExercises/TransferToExercises";
import TransferToRecipesList from "./components/TransferToRecipesList/TransferToRecipesList";
import { getCurrentUser } from "../../lib/appwrite";
import { redirect } from "next/navigation";


export default async function Home() {
  const user = await getCurrentUser()
  if(!user){
    redirect("/Login")
  }

  return (
    <main className="flex flex-col gap-40 mb-20 lg:mt-14 sm:mt-16 sm:ml-12">
      <TransferToExercises/>
      <TransferToRecipesList/>
    </main>
  );
}

/**
 * <TransferToCoachesList/>
      <TransferToCoachRegister/>
 */
