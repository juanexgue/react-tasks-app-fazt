import { useEffect, useState } from 'react'
import { tasks as data } from './tasks'


export default function TaskList() {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        setTasks(data)
    }, [])

    return (
        <div>
            {
                tasks.map((task) => (
                    <div key={task.id}>
                        <h1>{task.title}</h1>
                        <p>{task.description}</p>
                    </div>
                ))
            }
        </div>
    )
}
