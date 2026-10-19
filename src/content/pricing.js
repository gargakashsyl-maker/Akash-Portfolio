// Pricing section — subscription tiers.
//
// Fields:
// - price          : the actual price the customer pays (display string)
// - amount         : numeric amount for booking summary / payment button
// - durationLabel  : shown in the booking details dropdown
// - originalPrice  : (optional) shown struck-through next to price to imply discount
// - savings        : (optional) small badge below the price ("You save ₹X with this plan")
// - cadence        : e.g. "/month", "/3 months"
// - highlighted    : marks the recommended plan (yellow card)
// - features       : optional bullet list; leave empty to hide the bullets entirely

//export const pricing = {
  //eyebrow: 'Subscription Plans',
  //heading: 'Choose the group that fits your style',
 // subheading:
 //   'Annual fee per family is capped at ₹1,51,000 as per SEBI guidelines.',
 // bookingSubtitle: 'Select your preferred subscription and continue securely.',
 // booking: {
   // title: 'Booking Details',
   // namePlaceholder: 'Full Name',
   // infoNote:
     // 'Investments in securities market are subject to market risks. Read all related documents carefully before investing.',
   // subscriptionPriceLabel: 'Subscription Price',
   // quantityLabel: 'Plans',
   // totalLabel: 'Total Amount',
   // payPrefix: 'Pay',
   // cancelLabel: 'Cancel',
 // },
  //plans: [
    //{
      //id: 'monthly',
      //name: 'Monthly',
      //durationLabel: '1 Month (30 Days)',
      //price: '₹1,990',
      //amount: 1990,
      //cadence: '/month',
      //description: 'Best to get started and experience the research process.',
     // features: [],
     // highlighted: false,
    //},
    //{
      //id: 'quarterly',
      //name: 'Quarterly',
      //durationLabel: '3 Months (90 Days)',
      //price: '₹2,590',
      //amount: 2590,
      //originalPrice: '₹5,970',
      //savings: 'You save ₹3,380 with this plan',
      //cadence: '/3 months',
      //description: 'Best value with quarterly commitment.',
      //features: [],
      //highlighted: true,
      //badge: 'Recommended',
    //},
    //{
      //id: 'yearly',
      //name: 'Yearly',
      //durationLabel: '1 Year (365 Days)',
      //price: '₹8,590',
      //amount: 8590,
      //originalPrice: '₹23,880',
      //savings: 'You save ₹15,290 with this plan',
      //cadence: '/year',
      //description: 'For committed traders who want sustained guidance.',
      //features: [],
     // highlighted: false,
    //},
  //],
//};

export const pricing = {
  eyebrow: 'Join Our Community',
  heading: 'Choose the group that fits your style',
  plans: [
    {
      id: 'free',
      name: 'Free Group',
      type: 'free',
      durationLabel: 'Free Forever',
      price: 'Free',
      amount: 0,
      cadence: '',
      description: 'Join our WhatsApp group and get free market updates.',
      features: [],
      highlighted: false,
      ctaLabel: 'Join Free Group',
      href: 'https://chat.whatsapp.com/YOUR_GROUP_INVITE_CODE',
    },
    {
      id: 'premium',
      name: 'Paid Premium Group',
      type: 'paid',
      durationLabel: 'Premium Access',
      price: '₹X,XXX', // अपनी कीमत यहाँ डालें
      amount: 0,        // अपनी कीमत (number) यहाँ डालें
      cadence: '/month',
      description: 'Get premium research and sustained guidance.',
      features: [],
      highlighted: true,
      badge: 'Recommended',
      ctaLabel: 'Join Premium Group',
      href: 'https://your-paid-link.com',
    },
  ],
};
