import { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('')

    const onInputChanged = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (inputValue.trim() !== ''){
            // setCategories(categories => [inputValue,...categories])
            onNewCategory(inputValue.trim())
            setInputValue('')
        }
       
    }

    return (

        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChanged}
            />
        </form>

    )
}
