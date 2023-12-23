import Button from "./Button";
export default function() {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
      <div>
        <ul>
        <li><Button> ADD PROJECT</Button></li>
        <li><Button> ADD PROJECT</Button></li>
        <li><Button> ADD PROJECT</Button></li>
        <li><Button> ADD PROJECT</Button></li>
        <li><Button> ADD PROJECT</Button></li>
        <li><Button> ADD PROJECT</Button></li>
        </ul>
      </div>
      {/* <ul className="mt-8">
        {projects.map((projectDetail)=>{
          return(
              <li key={projectDetail.id}><button className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800">{projectDetail.title}</button></li>
          );
        })}
      </ul> */}
    </aside>
  );
}
