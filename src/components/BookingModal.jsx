import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, LayoutGrid, Info, CreditCard } from 'lucide-react';
import { pricing } from '../content/pricing';

export default function BookingModal({ open, plan, onClose, onPlanChange }) {
  const [name, setName] = useState('');
  const scrollYRef = useRef(0);
  const { booking } = pricing;

  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => setName(''), 200);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);

    scrollYRef.current = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollYRef.current}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      window.scrollTo(0, scrollYRef.current);
    };
  }, [open, onClose]);

  if (!plan) return null;

  const formattedAmount = `₹${plan.amount.toLocaleString('en-IN')}`;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-title"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-2xl bg-card-gradient border border-gold-500/20 shadow-gold p-6 md:p-8"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 grid place-items-center h-9 w-9 rounded-full bg-bg/70 border border-white/10 text-ink hover:text-gold-400 hover:border-gold-500/40 transition-colors z-10"
            >
              <X size={18} />
            </button>

            <p className="text-center text-sm text-ink-muted mb-2">
              {pricing.bookingSubtitle}
            </p>
            <h3
              id="booking-title"
              className="text-center text-xl md:text-2xl font-display font-bold text-ink pr-8"
            >
              {booking.title}
            </h3>

            <div className="mt-6 space-y-4">
              <div className="relative">
                <User
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted pointer-events-none"
                />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={booking.namePlaceholder}
                  autoComplete="name"
                  className="input w-full pl-11"
                />
              </div>

              <div className="relative">
                <LayoutGrid
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gold-400 pointer-events-none z-10"
                />
                <select
                  value={plan.id}
                  onChange={(e) => {
                    const next = pricing.plans.find((p) => p.id === e.target.value);
                    if (next) onPlanChange(next);
                  }}
                  className="input w-full pl-11 pr-10 appearance-none cursor-pointer border-gold-500/50 focus:border-gold-500"
                >
                  {pricing.plans.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.durationLabel}
                    </option>
                  ))}
                </select>
              </div>

              <p className="flex items-start gap-2 text-xs text-ink-muted leading-relaxed">
                <Info size={14} className="mt-0.5 shrink-0 text-gold-400" />
                <span>{booking.infoNote}</span>
              </p>

              <div className="rounded-xl border border-dashed border-white/15 bg-bg-soft/60 px-5 py-4 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-ink-muted">{booking.subscriptionPriceLabel}</span>
                  <span className="font-semibold text-gold-400">{formattedAmount}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-ink-muted">{booking.quantityLabel}</span>
                  <span className="font-semibold text-ink">1</span>
                </div>
                <div className="border-t border-dashed border-white/15 pt-3 flex items-center justify-between">
                  <span className="font-semibold text-ink">{booking.totalLabel}</span>
                  <span className="text-lg font-display font-bold text-gold-400">
                    {formattedAmount}
                  </span>
                </div>
              </div>

              <div className="flex flex-col-reverse sm:flex-row gap-3 pt-2">
                <button type="button" onClick={onClose} className="btn-outline flex-1">
                  {booking.cancelLabel}
                </button>
                <button type="button" className="btn-primary flex-1">
                  <CreditCard size={18} />
                  {booking.payPrefix} {formattedAmount}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
