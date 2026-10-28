import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockProfile } from '@/data/mock-record';

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#f8f4ed] p-6 text-espresso">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex flex-col gap-4 rounded-[28px] border border-espresso/10 bg-white/70 p-6 shadow-soft md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-brown">Career Record</p>
            <h1 className="mt-2 text-3xl font-semibold">{mockProfile.full_name}</h1>
          </div>
          <div className="flex items-center gap-3">
            <Badge className="rounded-full border border-gold/40 bg-champagne/70 text-espresso">
              Identity Score: {mockProfile.identity_score}
            </Badge>
            <Link href="/profile">
              <Button variant="outline" className="rounded-full border-espresso/15 bg-transparent text-espresso">
                View profile
              </Button>
            </Link>
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <Card className="border-espresso/10 bg-white/80">
            <CardContent className="p-6">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-semibold">Career Journey</h2>
                <span className="text-sm text-brown">Narrative timeline</span>
              </div>

              <div className="space-y-5">
                {mockProfile.experience.map((item) => (
                  <div key={item.id} className="rounded-2xl border border-espresso/10 bg-cream p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-lg font-medium">{item.title}</div>
                        <div className="mt-1 text-brown">{item.company}</div>
                      </div>
                      <div className="text-sm text-brown">{item.start_date} — {item.end_date}</div>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-brown">{item.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-espresso/10 bg-white/80">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold">Skills</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {mockProfile.skills.map((skill) => (
                    <Badge key={skill.id} className="rounded-full border border-espresso/10 bg-champagne/60 text-espresso">
                      {skill.skill_name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-espresso/10 bg-white/80">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold">Next Recommendation</h3>
                <div className="mt-4 rounded-2xl border border-gold/30 bg-gold/10 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-brown">Opportunity</p>
                      <p className="mt-2 text-lg font-medium">Earn Lean Six Sigma</p>
                    </div>
                    <Badge className="rounded-full bg-gold text-espresso">+5 score</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
