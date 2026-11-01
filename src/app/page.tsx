import Link from 'next/link';
import { ArrowRight, Briefcase, BarChart3, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const pillars = [
  {
    icon: Briefcase,
    title: 'Career Record',
    description: 'Bring experience, projects, and milestones into one evolving record.',
  },
  {
    icon: GraduationCap,
    title: 'Skills & Learning',
    description: 'Track what you know, what you are learning, and where you want to grow.',
  },
  {
    icon: BarChart3,
    title: 'Career Insights',
    description: 'Turn your history into clearer evidence for your next opportunity.',
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-cream text-espresso">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="flex items-center gap-3 text-xl font-semibold tracking-tight">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gold/60 text-sm">B</span>
          Become
          <span className="text-xs font-normal uppercase tracking-[0.2em] text-brown">CareerOS</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-brown md:flex">
          <Link href="#platform">Platform</Link>
          <Link href="/login">Sign in</Link>
        </nav>
        <Link href="/register">
          <Button className="rounded-full bg-espresso text-cream hover:bg-brown">Explore CareerOS</Button>
        </Link>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-20 pt-20 md:pt-28">
        <div className="max-w-3xl">
          <Badge className="mb-6 rounded-full border border-gold/40 bg-champagne/50 text-espresso">
            A platform within Become
          </Badge>
          <h1 className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
            Who are you becoming?
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-brown">
            CareerOS helps turn your experience, skills, and growth into a living career record—not just another resume.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/onboarding">
              <Button className="rounded-full bg-gold px-6 text-espresso hover:bg-[#bd8f2f]">
                Build your Career Record <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="outline" className="rounded-full border-espresso/20 bg-transparent text-espresso">
                Sign in to CareerOS
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section id="platform" className="mx-auto grid max-w-6xl gap-5 px-6 pb-24 md:grid-cols-3">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <Card key={pillar.title} className="border-espresso/10 bg-white/70">
              <CardContent className="p-6">
                <Icon className="h-6 w-6 text-brown" />
                <h2 className="mt-5 text-xl font-semibold">{pillar.title}</h2>
                <p className="mt-3 leading-7 text-brown">{pillar.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </section>
    </main>
  );
}
