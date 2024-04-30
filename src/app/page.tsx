import TransferToExercises from "./components/TransferToExercises/TransferToExercises";
import TransferToCoachesList from "./components/TransferToCoachesList/TransferToCoachesList";
import TransferToCoachRegister from "./components/TransferToCoachRegister/TransferToCoachRegister";
import TransferToRecipesList from "./components/TransferToRecipesList/TransferToRecipesList";


export default function Home() {
  return (
    <main className="flex flex-col gap-40 mb-20 lg:mt-14 sm:mt-16 sm:ml-12">
      <TransferToExercises/>
      <TransferToRecipesList/>
      <TransferToCoachesList/>
      <TransferToCoachRegister/>
    </main>
  );
}
