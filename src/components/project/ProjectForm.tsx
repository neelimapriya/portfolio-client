'use client';

// update path if needed

// const ProjectForm = () => {
//   const dispatch = useAppDispatch();

//   const [form, setForm] = useState({
//     title: '',
//     subtitle: '',
//     description: '',
//     category: '',
//     image: '',
//     githubClientUrl: '',
//     githubServerUrl: '',
//     liveUrl: '',
//     technologies: '',
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setForm(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     dispatch(addProject(form));
//     setForm({
//       title: '',
//       subtitle: '',
//       description: '',
//       category: '',
//       image: '',
//       githubClientUrl: '',
//       githubServerUrl: '',
//       liveUrl: '',
//       technologies: '',
//     });
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg space-y-4"
//     >
//       <h2 className="text-2xl font-semibold">Add New Project</h2>

//       <input
//         name="title"
//         value={form.title}
//         onChange={handleChange}
//         placeholder="Project Title"
//         required
//         className="w-full p-2 border rounded"
//       />

//       <input
//         name="subtitle"
//         value={form.subtitle}
//         onChange={handleChange}
//         placeholder="Subtitle"
//         className="w-full p-2 border rounded"
//       />

//       <textarea
//         name="description"
//         value={form.description}
//         onChange={handleChange}
//         placeholder="Description"
//         required
//         rows={4}
//         className="w-full p-2 border rounded"
//       />

//       <select
//         name="category"
//         value={form.category}
//         onChange={handleChange}
//         required
//         className="w-full p-2 border rounded"
//       >
//         <option value="">Select Category</option>
//         <option value="web">Web</option>
//         <option value="mobile">Mobile</option>
//         <option value="other">Other</option>
//       </select>

//       <input
//         name="image"
//         value={form.image}
//         onChange={handleChange}
//         placeholder="Image URL"
//         className="w-full p-2 border rounded"
//       />

//       <input
//         name="githubClientUrl"
//         value={form.githubClientUrl}
//         onChange={handleChange}
//         placeholder="GitHub Client URL"
//         className="w-full p-2 border rounded"
//       />

//       <input
//         name="githubServerUrl"
//         value={form.githubServerUrl}
//         onChange={handleChange}
//         placeholder="GitHub Server URL"
//         className="w-full p-2 border rounded"
//       />

//       <input
//         name="liveUrl"
//         value={form.liveUrl}
//         onChange={handleChange}
//         placeholder="Live Site URL"
//         className="w-full p-2 border rounded"
//       />

//       <input
//         name="technologies"
//         value={form.technologies}
//         onChange={handleChange}
//         placeholder="Technologies (comma separated)"
//         className="w-full p-2 border rounded"
//       />

//       <button
//         type="submit"
//         className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//       >
//         Submit
//       </button>
//     </form>
//   );
// };

// export default ProjectForm;
