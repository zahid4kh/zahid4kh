import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: "deskit",
    title: "Deskit",
    description: "Compose Desktop UI Library",
    longDescription:
      "Desktop component library with file choosers, dialogs, and navigation. Features scrollable breadcrumbs, file filtering, and Material3 integration.",
    version: "v1.4.0",
    code: "https://github.com/zahid4kh/deskit",
    year: "2025",
    tags: ["Kotlin", "Jetpack Compose", "Desktop", "UI Library"],
    platform: "JitPack",
    type: "Open Source Library",
  },
  {
    id: "neobrutal-ui",
    title: "NeoBrutal UI",
    description: "Jetpack Compose Library",
    longDescription:
      "Neo-Brutalist design UI components for Android. Includes 15+ custom components: buttons, text fields, cards, sliders, and dropdowns with bold geometric styling.",
    version: "v1.0.9",
    code: "https://github.com/zahid4kh/neobrutal-lib",
    year: "2024",
    tags: ["Kotlin", "Jetpack Compose", "Android", "UI Components"],
    platform: "JitPack",
    type: "Open Source Library",
  },
  {
    id: "sumpdf",
    title: "SumPDF",
    description: "Desktop PDF Manager",
    version: "v1.3.1",
    code: "https://github.com/zahid4kh/sumpdf",
    longDescription:
      "Full-featured PDF toolkit built with Compose for Desktop. Combines PDFs, converts documents (DOC/DOCX/ODT/SVG/Images), splits by range, and reorders pages. Linux APT repository distribution.",
    year: "2025",
    tags: ["Kotlin", "Compose Desktop", "PDF", "Cross-platform"],
    platform: "Cross-platform App",
    type: "Desktop Application",
  },
  {
    id: "kached",
    title: "Kached",
    description: "Code Snippet Manager",
    version: "v1.0.1",
    code: "https://github.com/zahid4kh/kached",
    longDescription:
      "Offline code snippet manager with syntax highlighting for 17+ languages. Export to multiple formats, Material3 theming, and cross-platform desktop deployment.",
    year: "2025",
    tags: ["Kotlin", "Desktop", "Code Management", "Syntax Highlighting"],
    platform: "Desktop App",
    type: "Desktop Application",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-card border-border hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <Badge variant="secondary" className="text-xs">
                    {project.year}
                  </Badge>
                </div>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
                {project.version && (
                  <Badge variant="outline" className="w-fit">
                    {project.version}
                  </Badge>
                )}
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.longDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button asChild size="sm" variant="outline">
                    <Link href={`/projects/${project.id}`}>
                      <ExternalLink className="mr-2 h-3 w-3" />
                      Details
                    </Link>
                  </Button>
                  <Button asChild size="sm" variant="ghost">
                    <Link
                      href={project?.code}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        height="24"
                        width="24"
                        src="https://cdn.simpleicons.org/github"
                      />
                      Code
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
