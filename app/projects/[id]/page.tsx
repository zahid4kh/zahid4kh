import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Package } from "lucide-react";

const projects = {
  deskit: {
    title: "Deskit",
    subtitle: "Compose Desktop UI Library",
    description:
      "A comprehensive desktop component library built with Jetpack Compose for Desktop, providing developers with essential UI components for building modern desktop applications.",
    longDescription: `Deskit is a powerful UI library designed specifically for Compose Desktop applications. It provides a rich set of components that make desktop development more efficient and enjoyable.

The library includes file choosers with advanced filtering capabilities, customizable dialogs, and intuitive navigation components. One of its standout features is the scrollable breadcrumb navigation system that adapts to different screen sizes and content lengths.

Built with Material3 design principles, Deskit ensures consistency and modern aesthetics across desktop applications. The library is actively maintained and distributed through JitPack for easy integration.`,
    version: "v1.4.0",
    sourceCode: "https://github.com/zahid4kh/deskit",
    year: "2025",
    tags: ["Kotlin", "Jetpack Compose", "Desktop", "UI Library", "Material3"],
    platform: "JitPack",
    type: "Open Source Library",
    features: [
      "File choosers with advanced filtering",
      "Customizable dialog components",
      "Scrollable breadcrumb navigation",
      "Material3 design integration",
      "Cross-platform desktop support",
      "Easy JitPack integration",
    ],
    techStack: ["Kotlin", "Jetpack Compose for Desktop", "Material3", "Gradle"],
    status: "Active Development",
  },
  "neobrutal-ui": {
    title: "NeoBrutal UI",
    subtitle: "Jetpack Compose Library",
    description:
      "A bold and distinctive UI component library for Android applications, featuring neo-brutalist design principles with geometric styling and vibrant aesthetics.",
    longDescription: `NeoBrutal UI brings the bold, unapologetic aesthetic of neo-brutalism to Android development. This library contains over 15 custom components that break away from conventional design patterns.

The library includes buttons with sharp edges and bold colors, text fields with geometric borders, cards with striking shadows, interactive sliders with unique styling, and dropdown menus that make a statement. Each component is designed to create interfaces that are both functional and visually impactful.

Perfect for applications that want to stand out from the crowd, NeoBrutal UI provides developers with the tools to create memorable user experiences that challenge traditional design conventions.`,
    version: "v1.0.9",
    sourceCode: "https://github.com/zahid4kh/neobrutal-lib",
    year: "2024",
    tags: [
      "Kotlin",
      "Jetpack Compose",
      "Android",
      "UI Components",
      "Neo-Brutalism",
    ],
    platform: "JitPack",
    type: "Open Source Library",
    features: [
      "15+ custom neo-brutalist components",
      "Bold geometric styling",
      "Vibrant color schemes",
      "Custom buttons and text fields",
      "Unique cards and sliders",
      "Distinctive dropdown menus",
    ],
    techStack: ["Kotlin", "Jetpack Compose", "Android SDK", "Material Design"],
    status: "Stable Release",
  },
  sumpdf: {
    title: "SumPDF",
    subtitle: "Desktop PDF Manager",
    description:
      "A comprehensive PDF toolkit built with Compose for Desktop, offering powerful document management capabilities including merging, conversion, splitting, and reordering.",
    longDescription: `SumPDF is a full-featured PDF management application that brings professional document handling capabilities to the desktop. Built entirely with Compose for Desktop, it offers a modern and intuitive interface for complex PDF operations.

The application can combine multiple PDFs into a single document, convert various document formats (DOC, DOCX, ODT, SVG, Images) to PDF, split large documents by page ranges, and reorder pages with a simple drag-and-drop interface.

What sets SumPDF apart is its cross-platform nature and its distribution through Linux APT repositories, making it easily accessible to Linux users. The application is designed with performance in mind, handling large documents efficiently while maintaining a responsive user interface.`,
    year: "2025",
    version: "v1.3.1",
    sourceCode: "https://github.com/zahid4kh/sumpdf",
    tags: [
      "Kotlin",
      "Compose Desktop",
      "PDF",
      "Cross-platform",
      "Document Management",
    ],
    platform: "Cross-platform App",
    type: "Desktop Application",
    features: [
      "PDF merging and combining",
      "Multi-format document conversion",
      "Page range splitting",
      "Drag-and-drop page reordering",
      "Linux APT repository distribution",
      "Cross-platform compatibility",
    ],
    techStack: [
      "Kotlin",
      "Compose for Desktop",
      "Apache PDFBox",
      "Cross-platform APIs",
    ],
    status: "Production Ready",
  },
  kached: {
    title: "Kached",
    subtitle: "Code Snippet Manager",
    version: "v1.0.1",
    sourceCode: "https://github.com/zahid4kh/kached",
    description:
      "An offline code snippet manager with advanced syntax highlighting, supporting 17+ programming languages and multiple export formats for developers.",
    longDescription: `Kached is designed for developers who need to organize and manage their code snippets efficiently. This offline application ensures your code snippets are always available, regardless of internet connectivity.

The application features syntax highlighting for over 17 programming languages, making it easy to read and understand stored code. It supports multiple export formats, allowing developers to share snippets in various ways or integrate them into documentation.

Built with Material3 theming, Kached provides a modern and customizable interface that adapts to user preferences. The cross-platform desktop deployment ensures that developers can use their preferred operating system while maintaining access to their snippet library.`,
    year: "2025",
    tags: [
      "Kotlin",
      "Desktop",
      "Code Management",
      "Syntax Highlighting",
      "Material3",
    ],
    platform: "Desktop App",
    type: "Desktop Application",
    features: [
      "Offline code snippet storage",
      "Syntax highlighting for 17+ languages",
      "Multiple export formats",
      "Material3 theming",
      "Cross-platform desktop support",
      "Advanced search and filtering",
    ],
    techStack: [
      "Kotlin",
      "Compose for Desktop",
      "Material3",
      "Syntax Highlighting Libraries",
    ],
    status: "Active Development",
  },
};

export function generateStaticParams() {
  return Object.keys(projects).map((id) => ({
    id,
  }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects[params.id as keyof typeof projects];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-8">
          <Button asChild variant="ghost" className="mb-4">
            <Link href="/#projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>

          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-4xl font-bold">{project.title}</h1>
            {project?.version && (
              <Badge variant="outline" className="text-sm">
                {project?.version}
              </Badge>
            )}
          </div>

          <p className="text-xl text-muted-foreground mb-6">
            {project.subtitle}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>About This Project</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none text-muted-foreground">
                  {project.longDescription
                    .split("\n\n")
                    .map((paragraph, index) => (
                      <p key={index} className="mb-4 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-muted-foreground"
                    >
                      <span className="text-accent mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Project Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Year:</span>
                  <span className="text-sm font-medium">{project.year}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Package className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    Platform:
                  </span>
                  <span className="text-sm font-medium">
                    {project.platform}
                  </span>
                </div>

                <div>
                  <span className="text-sm text-muted-foreground">Status:</span>
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {project.status}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tech Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="space-y-3">
              <Button className="w-full" asChild>
                <Link
                  href={project?.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Source Code
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
