import ScrollToTop from './ScrollToTop';
import WhatsAppButton from './WhatsAppButton';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
}