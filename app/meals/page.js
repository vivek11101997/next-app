import React, { Suspense } from 'react'
import styles from "./page.module.css"
import Link from 'next/link'
import { getMeals } from '@/lib/meals'
import MealsGrid from '@/components/Meal/meals-grid/meals-grid'

export const metadata = {
  title: 'All Meals',
  description: 'Broswe the delicious meals, shared by a our vibrant community.',
};

const MealsPage = () => {
  return (
    <>
    <header className={styles.header}>
      <h1>
        Delicious meals, created <span className={styles.highlight}>by you</span>
      </h1>

      <p> Choose your favorite recipe and cook it yourself .It is easy and fun!</p>

      <p className={styles.cta}>
        <Link href="/meals/share">Share Your Facourite recipe</Link>
      </p>
    </header>
      <main className={styles.main}>
        <Suspense fallback={<p className={styles.loading}>Fetching Meals</p>}>
          <Meals/>
        </Suspense>
      </main>
      </>
  )
}
const Meals = async () => {
  const meals=await getMeals();
  return <MealsGrid meals={meals}/>
}

export default MealsPage