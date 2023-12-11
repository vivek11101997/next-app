"use server";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

const isInvalidText = (text) => {
  return !text || text.trim() === ""
}

export const shareMeal = async (prevState, formData) => {
  const meal = {
    title: formData.get("title"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image")
  }
  if (
    isInvalidText(meal.creator)||
    isInvalidText(meal.creator_email)||
    isInvalidText(meal.instructions)||
    isInvalidText(meal.summary)||
    isInvalidText(meal.title) ||
    !meal.creator_email.includes("@")||
    !meal.image || meal.image.size===0
  ) {
    // throw new Error("Invalid input ")

    return {
      message:"Invalid input."
    }
  }
  
  await saveMeal(meal);
  revalidatePath("/meals","page");
  redirect("/meals")
}