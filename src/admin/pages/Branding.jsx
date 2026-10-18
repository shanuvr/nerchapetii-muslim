import { Save, Sliders } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionCard from '../components/SectionCard';
import { Button } from '../components/Controls';
import { Toggle } from '../components/Field';

export default function Branding() {
  return (
    <div className="max-w-4xl space-y-4">
      <PageHeader
        title="Branding & Sacred Motion"
        subtitle="Configure Islamic geometric animations, lantern physics, and visual effects for the mosque kiosk."
        actions={<Button variant="primary" icon={Save}>Save changes</Button>}
      />

      <div className="space-y-3.5">
        <SectionCard title="Sacred Visual Effects" description="Atmospheric animations running on the mosque kiosk." icon={Sliders}>
          <div className="space-y-3">
            <Toggle
              label="Rotating 8-Point Islamic Geometric Star (Girih Rosette)"
              hint="The slow revolving celestial star lattice in the ambient backdrop."
              defaultChecked
            />
            <Toggle
              label="Flickering Fanous Lantern Flames"
              hint="Warm flame flickering physics inside the hanging brass lanterns."
              defaultChecked
            />
            <Toggle
              label="Floating Starlight Particles"
              hint="Gentle points of celestial starlight drifting upward."
              defaultChecked
            />
            <Toggle
              label="Celestial Crescent & Star Confetti Shower"
              hint="Celebratory azure, turquoise, and gold burst upon completing a Sadaqah offering."
              defaultChecked
            />
            <Toggle
              label="Serene Crystal Prayer Tone on Tap"
              hint="Plays meditative acoustic chime when entering the kiosk or tapping."
              defaultChecked
            />
            <Toggle
              label="Respect Reduced-Motion Preference"
              hint="Follows the device's accessibility settings to soften heavy particle animations."
              defaultChecked
            />
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
