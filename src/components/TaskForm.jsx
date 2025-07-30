import React, { useState } from "react";

function TaskForm({ createTask }) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        createTask({
            title,
            description
        });
        setTitle("")
        setDescription("")
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder="Escribe tu tarea"
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                    value={title}
                    autoFocus
                />
                <br />
                <textarea placeholder="Escribe la descripción de la tarea"
                    onChange={
                        (e) => {
                            setDescription(e.target.value)
                        }
                    }
                    value={description}
                ></textarea>
                <br />
                <button>Guardar</button>
            </form>
        </div>
    )
}
export default TaskForm;