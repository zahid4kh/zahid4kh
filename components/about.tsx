import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          About Me
        </h2>

        <Card className="bg-card border-border">
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                I'm someone who finds genuine joy in building things. While I
                don't have a traditional computer science degree, I've
                discovered my passion through hands-on creation and
                experimentation with various technologies.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                My journey started with curiosity and has evolved into creating
                open-source libraries, desktop applications, and tools that
                other developers find useful. I believe the best way to learn is
                by building, breaking, and rebuilding.
              </p>

              <p className="text-lg leading-relaxed">
                Currently pursuing my M.Sc. in Scientific Instrumentation in
                Germany, I combine my technical background in instrumentation
                engineering with my love for software creation. Every project is
                an opportunity to learn something new and hopefully make
                someone's development experience a little better.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
