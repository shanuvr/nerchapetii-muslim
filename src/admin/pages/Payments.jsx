import { Copy, QrCode, Save, Wallet } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionCard from '../components/SectionCard';
import { Button } from '../components/Controls';
import { TextInput, Select, Toggle } from '../components/Field';

const APPS = [
  { value: 'any', label: 'Any UPI app (Default)' },
  { value: 'gpay', label: 'Google Pay' },
  { value: 'phonepe', label: 'PhonePe' },
  { value: 'paytm', label: 'Paytm' },
  { value: 'bhim', label: 'BHIM' },
];

const DEEP_LINK =
  'upi://pay?pa=cheramanmasjid@upi&pn=Cheraman%20Juma%20Masjid%20Mahal&am=350&cu=INR&tn=Sadaqah%20Offering';

export default function Payments() {
  return (
    <div className="max-w-5xl space-y-4">
      <PageHeader
        title="Payments & UPI Configuration"
        subtitle="Where mosque Sadaqah offerings are deposited, and what devotees see at kiosk checkout."
        actions={<Button variant="primary" icon={Save}>Save changes</Button>}
      />

      <div className="space-y-3.5">
        <SectionCard
          title="Mosque UPI Collection Account"
          description="Offerings are collected directly to this Mahal virtual payment address (VPA)."
          icon={Wallet}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
            <TextInput
              label="Mosque UPI ID"
              defaultValue="cheramanmasjid@upi"
              hint="The UPI handle devotees approve in their banking apps."
            />
            <TextInput
              label="Registered Payee Name"
              defaultValue="Cheraman Juma Masjid Mahal Committee"
              hint="Must match the registered legal entity with your bank."
            />
            <Select label="Preferred Payment App" options={APPS} />
            <TextInput
              label="Settlement Bank Account"
              defaultValue="State Bank of India •••• 5521"
              hint="Where cleared Sadaqah funds land."
            />
          </div>
        </SectionCard>

        <SectionCard
          title="Kiosk Checkout & QR Generator"
          description="What devotees scan on the kiosk to complete their Sadaqah offering."
          icon={QrCode}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="mb-2 text-xs font-bold text-slate-700">Mahal Counter QR Code</p>
              <div className="rounded-xl border border-slate-200 bg-white p-3 w-fit shadow-xs">
                <div className="w-28 h-28 grid grid-cols-8 gap-[2px]">
                  {Array.from({ length: 64 }).map((_, i) => {
                    const finder =
                      (i < 24 && (i % 8 < 3 || i % 8 > 4) && Math.floor(i / 8) < 3) ||
                      (i >= 40 && (i % 8 < 3 || i % 8 > 4) && Math.floor(i / 8) > 4) ||
                      (i >= 16 && i < 24 && i % 8 >= 3 && i % 8 <= 4 && Math.floor(i / 8) < 2);
                    return (
                      <span
                        key={i}
                        className={`rounded-[1px] ${finder || (i * 7) % 5 < 2 ? 'bg-slate-900' : 'bg-slate-100'}`}
                      />
                    );
                  })}
                </div>
              </div>
              <p className="mt-2 text-[11px] text-slate-500 max-w-[14rem] leading-relaxed">
                Generated dynamically on the kiosk display with the exact chosen amount attached.
              </p>
            </div>

            <div className="space-y-3">
              <div>
                <p className="mb-1.5 text-xs font-bold text-slate-700">Payment Deep Link Preview</p>
                <div className="flex items-start gap-2">
                  <code className="flex-1 min-w-0 rounded-lg bg-slate-50 border border-slate-200 px-3 py-2 text-xs text-slate-800 font-mono break-all leading-relaxed shadow-2xs">
                    {DEEP_LINK}
                  </code>
                  <Button variant="ghost" className="shrink-0 px-2.5 py-2" icon={Copy} aria-label="Copy link" />
                </div>
                <p className="mt-1.5 text-[11px] text-slate-500 leading-relaxed">
                  Generated automatically per transaction for chosen coin or note total.
                </p>
              </div>

              <div className="space-y-2.5 pt-1">
                <Toggle label="Accept UPI offerings" hint="Primary mode on digital Palli Bhandaram." defaultChecked />
                <Toggle label="Accept cash offerings at Mahal office counter" hint="Staff confirms manual receipt." defaultChecked />
                <Toggle label="Print Kerala Wakf Board registration on digital receipts" defaultChecked />
              </div>
            </div>
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
