// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Check, Star, TrendingDown } from 'lucide-react';
// import SectionHeader from './ui/SectionHeader';
// import BookingModal from './BookingModal';
// import { pricing } from '../content/pricing';
// import StockBackdrop from './decor/StockBackdrop';

// export default function Pricing() {
//   const [selectedPlan, setSelectedPlan] = useState(null);
//   const [modalOpen, setModalOpen] = useState(false);

//   function handleSelect(plan) {
//     setSelectedPlan(plan);
//     setModalOpen(true);
//   }

//   function handleClose() {
//     setModalOpen(false);
//   }

//   return (
//     <section id="pricing" className="section relative overflow-hidden">
//       <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-gradient-to-b from-gold-500/[0.04] to-transparent" />
//       <StockBackdrop variant="grid" className="absolute inset-0 -z-10 opacity-60" />

//       <div className="section-inner relative">
//         <SectionHeader
//           eyebrow={pricing.eyebrow}
//           heading={pricing.heading}
//           subheading={pricing.subheading}
//         />

//         <div className="grid md:grid-cols-3 gap-6 items-stretch">
//           {pricing.plans.map((plan, idx) => (
//             <PlanCard
//               key={plan.id}
//               plan={plan}
//               idx={idx}
//               selected={selectedPlan?.id === plan.id}
//               onSelect={() => handleSelect(plan)}
//             />
//           ))}
//         </div>

//         <p className="mt-12 text-center text-sm md:text-base text-ink-muted max-w-xl mx-auto">
//           {pricing.bookingSubtitle}
//         </p>
//       </div>

//       <BookingModal
//         open={modalOpen}
//         plan={selectedPlan}
//         onClose={handleClose}
//         onPlanChange={setSelectedPlan}
//       />
//     </section>
//   );
// }

// function PlanCard({ plan, idx, selected, onSelect }) {
//   const highlighted = plan.highlighted;
//   const hasFeatures = plan.features && plan.features.length > 0;

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 24 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: '-60px' }}
//       transition={{ duration: 0.5, delay: idx * 0.1 }}
//       className={`relative flex flex-col rounded-2xl p-7 md:p-8 transition-shadow ${
//         highlighted
//           ? 'bg-gold-gradient text-bg shadow-gold scale-[1.02] md:-mt-2 md:mb-2'
//           : 'bg-card-gradient border text-ink shadow-card'
//       } ${
//         selected
//           ? 'ring-2 ring-gold-400 ring-offset-2 ring-offset-bg'
//           : highlighted
//             ? ''
//             : 'border-white/5'
//       }`}
//     >
//       {plan.badge && (
//         <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-bg text-gold-400 border border-gold-500/40 px-3 py-1 text-[11px] font-bold uppercase tracking-widest whitespace-nowrap">
//           <Star size={12} fill="currentColor" /> {plan.badge}
//         </div>
//       )}

//       <div>
//         <h3 className={`text-lg font-display font-bold ${highlighted ? 'text-bg' : 'text-ink'}`}>
//           {plan.name}
//         </h3>
//         <p className={`mt-1 text-sm leading-relaxed ${highlighted ? 'text-bg/75' : 'text-ink-muted'}`}>
//           {plan.description}
//         </p>
//       </div>

//       <div className="mt-6">
//         <div className="flex items-baseline gap-2 flex-wrap">
//           <span
//             className={`text-4xl md:text-5xl font-display font-extrabold leading-none ${
//               highlighted ? 'text-bg' : 'text-ink'
//             }`}
//           >
//             {plan.price}
//           </span>
//           <span className={`text-sm font-medium ${highlighted ? 'text-bg/70' : 'text-ink-muted'}`}>
//             {plan.cadence}
//           </span>
//           {plan.originalPrice && (
//             <span
//               className={`text-base md:text-lg font-bold line-through decoration-2 ml-1 ${
//                 highlighted ? 'text-bg/50 decoration-bg/60' : 'text-ink-dim decoration-red-500/70'
//               }`}
//               aria-label={`Originally ${plan.originalPrice}`}
//             >
//               {plan.originalPrice}
//             </span>
//           )}
//         </div>

//         {plan.savings && (
//           <div
//             className={`mt-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] md:text-xs font-bold uppercase tracking-wider ${
//               highlighted
//                 ? 'bg-bg text-gold-400'
//                 : 'bg-gold-500/10 text-gold-300 border border-gold-500/30'
//             }`}
//           >
//             <TrendingDown size={12} />
//             {plan.savings}
//           </div>
//         )}
//       </div>

//       {hasFeatures && (
//         <ul className="mt-7 space-y-3">
//           {plan.features.map((f) => (
//             <li key={f} className="flex items-start gap-2.5 text-sm">
//               <Check
//                 size={16}
//                 className={`mt-0.5 shrink-0 ${highlighted ? 'text-bg' : 'text-gold-400'}`}
//               />
//               <span className={highlighted ? 'text-bg/90' : 'text-ink'}>{f}</span>
//             </li>
//           ))}
//         </ul>
//       )}

//       <div className="flex-1" />

//       <button
//         type="button"
//         onClick={onSelect}
//         aria-pressed={selected}
//         className={`mt-8 w-full rounded-full py-3 text-sm font-semibold transition-all ${
//           selected
//             ? highlighted
//               ? 'bg-bg text-gold-400 ring-2 ring-bg/30'
//               : 'bg-gold-500/20 text-gold-300 border border-gold-500/50'
//             : highlighted
//               ? 'bg-bg text-gold-400 hover:bg-bg-elev'
//               : 'bg-gold-gradient text-bg hover:brightness-110 shadow-gold-sm'
//         }`}
//       >
//         {selected ? 'Selected' : 'Select'}
//       </button>
//     </motion.div>
//   );
// }

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import { pricing } from '../content/pricing';
import StockBackdrop from './decor/StockBackdrop';

export default function Pricing() {
  return (
    <section id="pricing" className="section relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-gradient-to-b from-gold-500/[0.04] to-transparent" />
      <StockBackdrop variant="grid" className="absolute inset-0 -z-10 opacity-60" />

      <div className="section-inner relative">
        <SectionHeader
          eyebrow={pricing.eyebrow}
          heading={pricing.heading}
          subheading={pricing.subheading}
        />

        <div className="flex flex-wrap justify-center items-stretch gap-6">
          {pricing.plans.map((plan, idx) => (
            <PlanCard key={plan.id} plan={plan} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PlanCard({ plan, idx }) {
  const highlighted = plan.highlighted;
  const hasFeatures = plan.features && plan.features.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className={`relative flex flex-col w-full max-w-sm rounded-2xl p-7 md:p-8 transition-shadow ${
        highlighted
          ? 'bg-gold-gradient text-bg shadow-gold'
          : 'bg-card-gradient border border-white/5 text-ink shadow-card'
      }`}
    >
      <div>
        <h3 className={`text-lg font-display font-bold ${highlighted ? 'text-bg' : 'text-ink'}`}>
          {plan.name}
        </h3>
        <p className={`mt-1 text-sm leading-relaxed ${highlighted ? 'text-bg/75' : 'text-ink-muted'}`}>
          {plan.description}
        </p>
      </div>

      {hasFeatures && (
        <ul className="mt-6 space-y-3">
          {plan.features.map((f) => (
            <li key={f} className="text-sm">
              <span className={highlighted ? 'text-bg/90' : 'text-ink'}>{f}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="flex-1" />

      <a
        href={plan.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold transition-all ${
          highlighted
            ? 'bg-bg text-gold-400 hover:bg-bg-elev'
            : 'bg-gold-gradient text-bg hover:brightness-110 shadow-gold-sm'
        }`}
      >
        {plan.ctaLabel}
        <ArrowUpRight size={16} />
      </a>
    </motion.div>
  );
}
