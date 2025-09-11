import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Languages",
    skills: ["Kotlin", "Python", "C++"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Jetpack Compose", "Compose for Desktop", "Android SDK", "QT Framework"],
  },
  {
    title: "Tools & Libraries",
    skills: ["Apache PDFBox", "Gson", "Koin DI", "Gradle", "Git"],
  },
  {
    title: "Publishing & Distribution",
    skills: ["JitPack", "Maven Central", "APT Repositories"],
  },
  {
    title: "Platforms",
    skills: ["Android", "Windows", "Linux", "Cross-platform Desktop"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Technical Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title} className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
