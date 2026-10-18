import { useState } from 'react';
import { Save, Sparkles, Video, UploadCloud } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionCard from '../components/SectionCard';
import { Button } from '../components/Controls';
import { TextInput, TextArea, Toggle } from '../components/Field';
import PhonePreview from '../components/PhonePreview';

export default function Slogans() {
  const [activeScreen, setActiveScreen] = useState('welcome');
  const [videoUrl, setVideoUrl] = useState('');

  return (
    <div className="space-y-4">
      <PageHeader
        title="Quranic Verses & Sanctuary Video"
        subtitle="Manage sacred Quranic verses, Bismillah calligraphy, and live Holy Mosque sanctuary darshan."
        actions={<Button variant="primary" icon={Save}>Save changes</Button>}
      />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
        <div className="xl:col-span-2 space-y-4">
          <SectionCard
            title="Screen 1: Welcome & Bismillah Verses"
            description="The opening Quranic passage devotees see when approaching the kiosk."
            icon={Sparkles}
          >
            <div className="space-y-3">
              <TextInput
                label="Arabic Calligraphy Header"
                defaultValue="بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ"
                className="[&_input]:font-amiri text-base"
              />
              <TextInput
                label="Primary Quranic Verse (Malayalam)"
                defaultValue="നിങ്ങൾ ദാനം ചെയ്യുന്ന ഏതൊരു നല്ല കാര്യവും അല്ലാഹു അറിയുന്നു"
                className="[&_input]:font-malayalam"
                hint="Surah Al-Baqarah 2:273 — displayed under the Crescent."
              />
              <TextArea
                label="Charity & Blessings Line (Malayalam)"
                defaultValue="സദഖ ദാരിദ്ര്യത്തെ അകറ്റുകയും ആയുസ്സ് വർദ്ധിപ്പിക്കുകയും ചെയ്യുന്നു"
                className="[&_textarea]:font-malayalam"
              />
              <TextInput
                label="Action Button Tag"
                defaultValue="പ്രാർത്ഥനാപൂർവ്വം സമർപ്പിക്കുക"
                className="[&_input]:font-malayalam"
              />
            </div>
          </SectionCard>

          <SectionCard
            title="Screen 2: Palli Bhandaram Sadaqah Verse"
            description="The encouraging prayer shown as coins and notes are placed."
            icon={Sparkles}
          >
            <div className="space-y-3">
              <TextInput
                label="Offering Banner Prayer (Malayalam)"
                defaultValue="നിങ്ങളുടെ സദഖയും പ്രാർത്ഥനയും അല്ലാഹു സ്വീകരിക്കട്ടെ"
                className="[&_input]:font-malayalam"
                hint="Displayed above the carved Bhandaram box."
              />
              <TextInput
                label="Running Total Label"
                defaultValue="ആകെ സദഖ"
                className="[&_input]:font-malayalam"
              />
            </div>
          </SectionCard>

          <SectionCard
            title="Screen 3: Mosque Sanctuary Video & Darshan"
            description="Configure the live Mihrab or sanctuary webcam video displayed upon completed Sadaqah."
            icon={Video}
          >
            <div className="space-y-3">
              <TextInput
                label="Sanctuary Stream or Video URL"
                placeholder="https://example.com/masjid_live.mp4"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                hint="Provide an MP4 or HLS streaming link to your mosque's Mihrab / courtyard webcam."
              />
              <div className="p-3.5 rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 text-center">
                <UploadCloud className="w-6 h-6 text-slate-400 mx-auto mb-1" />
                <p className="text-xs font-semibold text-slate-700">Or drag and drop your holy sanctuary video here</p>
                <p className="text-[10px] text-slate-400 mt-0.5">MP4 or WebM format up to 50MB</p>
              </div>
              <Toggle label="Autoplay sanctuary video with soft Dua audio" defaultChecked />
              <Toggle label="Enable Fullscreen Sanctuary Darshan button" defaultChecked />
            </div>
          </SectionCard>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-bold text-slate-700">Live Kiosk Preview</span>
            <div className="flex rounded-lg bg-slate-100 p-0.5 border border-slate-200">
              {['welcome', 'bhandaram', 'sadaqah'].map((scr) => (
                <button
                  key={scr}
                  onClick={() => setActiveScreen(scr)}
                  className={`px-2 py-0.5 rounded-md text-[10px] font-semibold capitalize transition-all cursor-pointer ${
                    activeScreen === scr ? 'bg-white text-emerald-800 font-bold shadow-2xs' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {scr === 'bhandaram' ? 'box' : scr}
                </button>
              ))}
            </div>
          </div>
          <div className="p-4 rounded-2xl border border-slate-200 bg-slate-100/50 flex justify-center">
            <PhonePreview screen={activeScreen} caption={`Showing ${activeScreen} screen preview`} />
          </div>
        </div>
      </div>
    </div>
  );
}
