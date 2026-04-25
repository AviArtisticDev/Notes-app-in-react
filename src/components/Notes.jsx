import { Trash2 } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Notes() {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState(() => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  // This useEffect is no longer needed, as state is initialized lazily above
  // useEffect(() => {
  //   const savedNotes = localStorage.getItem('notes');
  //   if (savedNotes) {
  //     setTask(JSON.parse(savedNotes));
  //   }
  // }, []);

  // Keep the existing useEffect for saving to localStorage on changes
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(task));
  }, [task]);

  const submitHandler = (e) => {
    e.preventDefault()

    if (details.trim().length > 0) {
      const copyTask = [...task]
      copyTask.push({title, details})
  
      setTask(copyTask)
    }

    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx, 1)

    setTask(copyTask)
  }

  return (
    <div className="h-screen w-full lg:flex bg-black text-white">
      <form onSubmit= {(e) => {
        submitHandler(e)
      }} className="flex flex-col items-start gap-4 p-10 lg:w-1/2">
        
        <input
          className="px-5 py-2 w-full border-2 rounded outline-none font-medium"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />

        <textarea 
          placeholder="Notes" 
          className="px-5 h-30 w-full border-2 rounded outline-none font-medium"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
        ></textarea>

        <button className='bg-white text-black font-medium w-full px-5 py-2 rounded outline-none cursor-pointer active:scale-95'>Add Notes</button>

      </form>

      <div className='lg:p-10 px-10 lg:w-1/2 lg:border-l flex flex-col flex-1 lg:h-full lg:sticky lg:top-0'>
        <h1 className='text-xl font-bold mb-5'>Recent Notes</h1>

        <div id='scroll' className='flex flex-wrap flex-1 gap-5 overflow-auto'>
          {task.map((elem, idx) => {
            return (
              <div
                key={idx}
                className="relative flex flex-col h-52 w-40 rounded-2xl text-black px-3 pt-4.5 pb-2 bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]"
              >
                <div id="scroll" className="overflow-y-auto flex-1">
                  <h3 className="leading-tight font-bold mt-1">{elem.title}</h3>
                  <p className="text-gray-800 wrap-anywhere">{elem.details}</p>
                </div>

                <button className="absolute bottom-1 right-2 cursor-pointer active:scale-105 bg-red-500 text-white p-1 rounded"
                onClick={ () => {
                  deleteNote(idx)
                }}>
                  <Trash2 size={18} strokeWidth={2.25} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

