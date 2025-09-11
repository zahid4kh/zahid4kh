import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, GraduationCap, Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Experience & Education
        </h2>

        <div className="space-y-6">
          {/* Professional Experience */}
          <Card className="bg-card border-border">
            <CardHeader>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Briefcase className="h-5 w-5 text-accent" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl">
                    Software Development Intern
                  </CardTitle>
                  <CardDescription className="text-base font-medium text-foreground">
                    Bosch Manufacturing Solutions
                  </CardDescription>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <CalendarDays className="h-4 w-4" />
                      <span>May 2023 – Oct 2023</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>Stuttgart, Germany</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  • Developed inverse kinematics program for robotic simulation
                  systems
                </li>
                <li>
                  • Built digital twin integrations using Siemens NX MCD &
                  TwinCAT
                </li>
                <li>
                  • Implemented automation solutions with focus on performance
                  optimization
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Current Education */}
          <Card className="bg-card border-border">
            <CardHeader>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <GraduationCap className="h-5 w-5 text-accent" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl">
                    M.Sc. Scientific Instrumentation
                  </CardTitle>
                  <CardDescription className="text-base font-medium text-foreground">
                    Ernst-Abbe-Hochschule Jena
                  </CardDescription>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <CalendarDays className="h-4 w-4" />
                      <span>Oct 2021 - Present</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>Germany</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Focus: Mechanical design, FEM Simulation & Analysis
              </p>
            </CardContent>
          </Card>

          {/* Previous Education */}
          <Card className="bg-card border-border">
            <CardHeader>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <GraduationCap className="h-5 w-5 text-accent" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl">
                    B.Sc. Instrumentation Engineering
                  </CardTitle>
                  <CardDescription className="text-base font-medium text-foreground">
                    Azerbaijan State Oil and Industry University
                  </CardDescription>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <CalendarDays className="h-4 w-4" />
                      <span>Sep 2016 – Jul 2020</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>Azerbaijan</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Coursework: Programming fundamentals, PLCs, and control systems
              </p>
            </CardContent>
          </Card>

          {/* Languages */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-xl">Languages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">German: B1</Badge>
                <Badge variant="secondary">English: Fluent</Badge>
                <Badge variant="secondary">Russian: Fluent</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
