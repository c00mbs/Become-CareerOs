export function calculateIdentityScore(experienceCount: number, skillCount: number, certificationsCount: number) {
  const base = 45;
  const experienceBoost = Math.min(experienceCount * 6, 24);
  const skillBoost = Math.min(skillCount * 3, 15);
  const certificationBoost = Math.min(certificationsCount * 4, 12);

  return Math.min(base + experienceBoost + skillBoost + certificationBoost, 100);
}
