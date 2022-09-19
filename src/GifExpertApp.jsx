import { useState } from "react"
import { AddCategory } from "./components/AddCategory"

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Lol','Dragon ball'])

    const onAddCategory = (newCategory) => {
        setCategories(categories => {
            if(!categories.find(cat => cat.toLowerCase() === newCategory.toLowerCase())){
                return [newCategory,...categories]
            }else{
                return [...categories]
            }
        })
    }



    return (
        <>
            {/* Titulo */}
            <h1>Git Expert App</h1>
   
            {/* Input */}
            <AddCategory onNewCategory={onAddCategory} />



            {/* Listado de Gif */}
            
            <ol>
                {categories.map((category,index) => {
                    return <li key={index}>{category}</li>
                })}
            </ol>
            
            
            
            {/* Git Item */}
        </>
    )
}
