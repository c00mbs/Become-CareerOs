import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const stats = [
  { label: 'Identity Score', value: '87' },
  { label: 'Career Milestones', value: '6' },
  { label: 'Skills', value: '12' },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-cream text-espresso">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2 text-xl font-semibold tracking-tight">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gold text-sm text-espresso">B</span>
          Become
        </div>

        <nav className="hidden items-center gap-8 text-sm text-brown md:flex">
          <Link href="#story">Story</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/profile">Profile</Link>
        </nav>

        <Link href="/onboarding">
          <Button className="rounded-full bg-espresso text-cream hover:bg-brown">Start Building</Button>
        </Link>
      </header>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-20 pt-12 md:grid-cols-[1.2fr_0.8fr] md:pt-20">
        <div>
          <Badge className="mb-6 rounded-full border border-gold/40 bg-champagne/50 text-espresso">
            <Sparkles className="mr-2 h-3.5 w-3.5" />
            The future version of you
          </Badge>

          <h1 className="max-w-xl text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
            Become.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-brown">
            Your resume captures where you&apos;ve been. Your Career Record captures who you&apos;re becoming.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/onboarding">
              <Button className="rounded-full bg-gold px-6 text-espresso hover:bg-[#bd8f2f]">
                Start Building
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="outline" className="rounded-full border-espresso/20 bg-transparent text-espresso">
                View Demo Record
              </Button>
            </Link>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <Card key={stat.label} className="border-espresso/10 bg-white/60 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="text-3xl font-semibold text-espresso">{stat.value}</div>
                  <div className="mt-1 text-sm text-brown">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Card className="w-full max-w-md border-espresso/10 bg-white/80 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between border-b border-espresso/10 pb-4">
                <div>
                  <div className="text-sm uppercase tracking-[0.2em] text-brown">Identity</div>
                  <div className="mt-2 text-3xl font-semibold">87</div>
                </div>
                <div className="rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">
                  Strong momentum
                </div>
              </div>

              <div className="mt-6 space-y-5">
                <div>
                  <div className="text-xs uppercase tracking-[0.22em] text-brown">Career Journey</div>
                  <div className="mt-3 space-y-3 text-sm text-espresso">
                    <div className="rounded-xl border border-espresso/10 bg-cream p-3">2020 • Family Dollar</div>
                    <div className="rounded-xl border border-espresso/10 bg-cream p-3">2022 • Best Buy</div>
                    <div className="rounded-xl border border-espresso/10 bg-cream p-3">2024 • Wawa</div>
                    <div className="rounded-xl border border-espresso/10 bg-cream p-3">2025 • BS Data Science</div>
                    <div className="rounded-xl border border-espresso/10 bg-cream p-3">2026 • Founder</div>
                  </div>
                </div>

                <div>
                  <div className="text-xs uppercase tracking-[0.22em] text-brown">Skills</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {['Leadership', 'Operations', 'Analytics', 'Python'].map((skill) => (
                      <Badge key={skill} className="rounded-full border border-espresso/10 bg-champagne/70 text-espresso">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
