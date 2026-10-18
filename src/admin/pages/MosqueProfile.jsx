import { Building2, Image, MapPin, Phone, Save } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionCard from '../components/SectionCard';
import { Button, UploadBox } from '../components/Controls';
import { TextInput, Select } from '../components/Field';

const LANGUAGES = [
  { value: 'ml', label: 'മലയാളം (Malayalam)' },
  { value: 'ar', label: 'العربية (Arabic)' },
  { value: 'en', label: 'English' },
  { value: 'ur', label: 'اردو (Urdu)' },
];

export default function MosqueProfile() {
  return (
    <div className="max-w-5xl space-y-4">
      <PageHeader
        title="Mahal & Mosque Profile"
        subtitle="How your mosque appears to devotees on the kiosk and on digital Sadaqah receipts."
        actions={<Button variant="primary" icon={Save}>Save changes</Button>}
      />

      <div className="space-y-3.5">
        <SectionCard
          title="Mahal Identity"
          description="Shown on the welcome screen header badge and on every offering receipt."
          icon={Building2}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
            <TextInput
              label="Mosque Name (English)"
              defaultValue="Cheraman Juma Masjid & Dargah"
              hint="Appears in the kiosk header and on receipts."
            />
            <TextInput
              label="Mosque Name (Malayalam)"
              defaultValue="ചേരമാൻ ജുമാ മസ്ജിദ്"
              className="sm:[&_input]:font-malayalam"
            />
            <TextInput
              label="Short Mosque Name"
              defaultValue="Cheraman Juma Masjid"
              hint="Used where space is tight."
            />
            <Select label="Primary Language" options={LANGUAGES} />
          </div>
        </SectionCard>

        <SectionCard title="Emblem & Seal" description="Insignia used on receipts and kiosk headers." icon={Image}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
            <UploadBox label="Mahal Crescent Emblem / Seal" hint="PNG or SVG · max 2 MB" />
          </div>
        </SectionCard>

        <SectionCard title="Contact & Office" description="Used for committee support and notifications." icon={Phone}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
            <TextInput label="Mahal Office Phone" defaultValue="+91 480 2803170" />
            <TextInput label="Secretary WhatsApp Number" defaultValue="+91 94472 88111" hint="Receipt notifications can be sent here." />
            <TextInput label="Mahal Email" defaultValue="office@cheramanmasjid.org" className="sm:col-span-2" />
          </div>
        </SectionCard>

        <SectionCard title="Location & Wakf Registration" description="Appears on the receipt footer." icon={MapPin}>
          <div className="space-y-3">
            <TextInput
              label="Mosque Address"
              defaultValue="NH 66, Methala, Kodungallur, Thrissur, Kerala - 680664"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <TextInput label="District / Mahal Jurisdiction" defaultValue="Kodungallur Mahal, Thrissur" />
              <TextInput label="Kerala Wakf Board Registration No." defaultValue="WK-KDL-00124" />
            </div>
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
