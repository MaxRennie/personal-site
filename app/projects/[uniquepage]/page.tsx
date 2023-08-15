import projectlist from '@/app/projectlist.json'
import {notFound} from "next/navigation";

export async function generateStaticParams() {
  return projectlist.map((p) => ({
    uniquepage: p.id.toString(),
  }))
}

export default function UniquePage({params: {uniquepage}}: { params: { uniquepage: string } }) {
  const project = projectlist.find(p => p.id.toString() === uniquepage)
  if (!project) {
    notFound()
  }

  return (
    <main>
      <p>Project: {project.name}</p>
      <p>{project.description}</p>
    </main>
  )
}