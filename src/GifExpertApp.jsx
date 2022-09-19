import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([])

    const onAddCategory = (newCategory) => {
        if (categories.find(cat => cat.toLowerCase() === newCategory.toLowerCase())) return;
        setCategories([newCategory, ...categories])
    }

    return (
        <>

            <h1>Git Expert App</h1>
            <AddCategory onNewCategory={onAddCategory} />

            {
                categories.map((category, index) => (
                    <GifGrid
                        key={index}
                        category={category} />))
            }

        </>
    )
}
