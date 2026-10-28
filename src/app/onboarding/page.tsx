import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function OnboardingPage() {
  return (
    <main className="min-h-screen bg-cream p-6 text-espresso">
      <div className="mx-auto max-w-4xl">
        <Card className="border-espresso/10 bg-white/80 shadow-soft">
          <CardContent className="p-8 md:p-12">
            <div className="mb-6 flex items-center gap-3">
              <Badge className="rounded-full border border-gold/40 bg-champagne/70 text-espresso">Foundation</Badge>
            </div>

            <h1 className="text-4xl font-semibold tracking-[-0.05em]">Build your Career Record</h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-brown">
              Start with the truth of your work: your experience, education, skills, certifications, and the story of how you are becoming.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-espresso/10 bg-cream p-5">
                <div className="text-sm uppercase tracking-[0.2em] text-brown">Profile</div>
                <div className="mt-3 text-xl font-medium">Who you are</div>
              </div>
              <div className="rounded-2xl border border-espresso/10 bg-cream p-5">
                <div className="text-sm uppercase tracking-[0.2em] text-brown">Experience</div>
                <div className="mt-3 text-xl font-medium">What you&apos;ve done</div>
              </div>
              <div className="rounded-2xl border border-espresso/10 bg-cream p-5">
                <div className="text-sm uppercase tracking-[0.2em] text-brown">Education</div>
                <div className="mt-3 text-xl font-medium">What you&apos;ve learned</div>
              </div>
              <div className="rounded-2xl border border-espresso/10 bg-cream p-5">
                <div className="text-sm uppercase tracking-[0.2em] text-brown">Identity</div>
                <div className="mt-3 text-xl font-medium">How you&apos;re growing</div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/dashboard">
                <Button className="rounded-full bg-espresso text-cream hover:bg-brown">Continue to dashboard</Button>
              </Link>
              <Link href="/profile">
                <Button variant="outline" className="rounded-full border-espresso/15 bg-transparent text-espresso">
                  View profile
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
