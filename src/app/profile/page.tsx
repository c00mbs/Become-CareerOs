import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockProfile } from '@/data/mock-record';

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-cream px-6 py-10 text-espresso">
      <div className="mx-auto max-w-5xl">
        <div className="mb-5 rounded-2xl border border-gold/30 bg-champagne/40 px-4 py-3 text-sm text-brown">
          Sample workspace · Fictional demonstration data only · Not connected to a live account
        </div>
        <Card className="border-espresso/10 bg-white/80 shadow-soft">
          <CardContent className="p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold bg-champagne text-xl font-semibold">
                  TM
                </div>
                <div>
                  <h1 className="text-3xl font-semibold">{mockProfile.full_name}</h1>
                  <p className="text-brown">{mockProfile.headline}</p>
                </div>
              </div>
              <Badge className="rounded-full border border-gold/40 bg-champagne/70 text-espresso">
                Illustrative score: {mockProfile.identity_score}
              </Badge>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-espresso/10 bg-cream p-5">
                <div className="text-sm uppercase tracking-[0.2em] text-brown">Education</div>
                <div className="mt-4 space-y-3">
                  {mockProfile.education.map((item) => (
                    <div key={item.id}>
                      <div className="font-medium">{item.school}</div>
                      <div className="text-brown">{item.degree}</div>
                      <div className="text-sm text-brown">GPA: {item.gpa}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-espresso/10 bg-cream p-5">
                <div className="text-sm uppercase tracking-[0.2em] text-brown">Certifications</div>
                <div className="mt-4 space-y-3">
                  {mockProfile.certifications.map((item) => (
                    <div key={item.id}>
                      <div className="font-medium">{item.certification_name}</div>
                      <div className="text-brown">{item.issuer}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
