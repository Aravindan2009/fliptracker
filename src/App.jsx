import React, { useState } from 'react';
import { PaymentModal } from './PaymentModal';
import { supabase } from './supabase';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  Laptop, 
  Cpu, 
  Database, 
  Battery, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  LineChart, 
  AlertCircle,
  Mail,
  Menu,
  X,
  TrendingUp,
  DollarSign,
  Clock,
  Crown,
  Flame,
  Shield,
  Phone,
  User,
  MessageSquare,
  HelpCircle
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#030712]/90 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-20">
          <div className="flex items-center gap-2.5">
            <img src="/logo.svg" alt="Fliptracker" className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg" />
            <span className="text-xl sm:text-2xl font-bold text-white">
              Fliptracker
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#benefits" className="text-slate-400 hover:text-emerald-400 transition-colors">Benefits</a>
              <a href="#features" className="text-slate-400 hover:text-emerald-400 transition-colors">Features</a>
              <a href="#contact" className="text-slate-400 hover:text-emerald-400 transition-colors">Contact</a>
              <a href="#pricing" className="bg-white/5 hover:bg-emerald-500/10 px-5 py-2 rounded-full border border-white/10 hover:border-emerald-500/30 transition-all text-white">
                Join Beta
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" className="p-2 text-slate-400 min-w-[44px] min-h-[44px] flex items-center justify-center">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4 flex flex-col gap-2"
          >
            <a href="#benefits" onClick={() => setIsOpen(false)} className="text-slate-300 py-3 px-4 rounded-lg hover:bg-white/5 transition-colors">Benefits</a>
            <a href="#features" onClick={() => setIsOpen(false)} className="text-slate-300 py-3 px-4 rounded-lg hover:bg-white/5 transition-colors">Features</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-slate-300 py-3 px-4 rounded-lg hover:bg-white/5 transition-colors">Contact</a>
            <a href="#pricing" onClick={() => setIsOpen(false)} className="text-emerald-400 py-3 px-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-center font-medium">
              Join Beta
            </a>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

const DashboardMockup = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto p-4 sm:p-8 glass-card glow-border aspect-auto sm:aspect-[4/3] flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      {/* Parent Laptop */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="relative z-10 glass-card p-4 border-emerald-500/30 flex flex-col items-center gap-2 mb-8"
      >
        <Laptop className="w-8 h-8 text-emerald-400" />
        <span className="text-sm font-medium text-white">Dell XPS 13 (Donor)</span>
        <span className="text-xs text-slate-400">Cost: $150</span>
      </motion.div>

      <div className="flex gap-4 sm:gap-12 relative z-10">
        {/* Harvested Parts */}
        <div className="flex flex-col gap-4">
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="glass-card p-3 border-cyan-500/30 flex items-center gap-3"
          >
            <Cpu className="w-5 h-5 text-cyan-400" />
            <div className="flex flex-col text-left">
              <span className="text-xs font-semibold text-white">16GB RAM</span>
              <span className="text-[10px] text-emerald-400">+$65 Sold</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="glass-card p-3 border-cyan-500/30 flex items-center gap-3"
          >
            <Database className="w-5 h-5 text-cyan-400" />
            <div className="flex flex-col text-left">
              <span className="text-xs font-semibold text-white">512GB NVMe</span>
              <span className="text-[10px] text-emerald-400">+$45 Sold</span>
            </div>
          </motion.div>
        </div>

        {/* Upgrades */}
        <div className="flex flex-col gap-4">
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="glass-card p-3 border-amber-500/20 flex items-center gap-3"
          >
            <Battery className="w-5 h-5 text-amber-400" />
            <div className="flex flex-col text-left">
              <span className="text-xs font-semibold text-white">New Battery</span>
              <span className="text-[10px] text-amber-400">-$25 Cost</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="glass-card p-3 border-emerald-500/40 flex items-center gap-3 bg-emerald-500/5"
          >
            <Laptop className="w-5 h-5 text-emerald-400" />
            <div className="flex flex-col text-left">
              <span className="text-xs font-semibold text-white">Main Unit</span>
              <span className="text-[10px] text-emerald-400">+$280 Sold</span>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="mt-8 glass-card px-8 py-4 border-emerald-500/40 bg-emerald-500/5 z-10"
      >
        <span className="text-xs uppercase tracking-wider text-emerald-400 font-bold block mb-1">Total Net Profit</span>
        <span className="text-3xl font-black text-white">$215.00</span>
      </motion.div>

      {/* Decorative Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/8 blur-[100px] rounded-full -z-10" />
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div 
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ delay }}
    viewport={{ once: true }}
    className="glass-card p-5 sm:p-8 group hover:border-emerald-500/30 transition-all duration-500 text-left"
  >
    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-500/8 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-emerald-500/15 transition-colors">
      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
    </div>
    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">{title}</h3>
    <p className="text-slate-400 leading-relaxed text-sm sm:text-base">{description}</p>
  </motion.div>
);

const App = () => {
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [emailStatus, setEmailStatus] = useState(''); // 'success' | 'error' | ''
  const [isEmailSubmitting, setIsEmailSubmitting] = useState(false);

  // Ask Question Modal State
  const [askOpen, setAskOpen] = useState(false);
  const [askForm, setAskForm] = useState({ phone: '', question: '' });
  const [askStatus, setAskStatus] = useState(''); // 'submitting' | 'success' | 'error' | ''

  // Waitlist Section State
  const [waitlistStatus, setWaitlistStatus] = useState(''); // 'submitting' | 'success' | 'error' | 'duplicate' | ''

  const handleAskSubmit = async (e) => {
    e.preventDefault();
    setAskStatus('submitting');
    const { error } = await supabase.from('questions').insert([{ phone: askForm.phone, question: askForm.question }]);
    if (error) {
      console.error(error);
      setAskStatus('error');
    } else {
      setAskStatus('success');
      setTimeout(() => {
        setAskOpen(false);
        setAskStatus('');
        setAskForm({ phone: '', question: '' });
      }, 3000);
    }
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-[#030712] text-white" style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}>
      <motion.div className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 origin-left z-[60]" style={{ scaleX }} />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 sm:pt-32 pb-12 sm:pb-20 px-4 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-emerald-600/10 blur-[80px] sm:blur-[120px] rounded-full" />
          <div className="absolute bottom-20 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-cyan-600/8 blur-[80px] sm:blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-emerald-500/20 bg-emerald-500/8 text-emerald-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6 inline-block">
              Built for Hardware Resellers
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-black mb-4 sm:mb-8 leading-tight">
              Stop Guessing Your Profits.<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
                Track Every Component.
              </span>
            </h1>
            <p className="text-base sm:text-xl text-slate-400 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2">
              Fliptracker gives you total clarity over your inventory. Maximize your margins by knowing exactly what each donor board, harvested part, and upgraded laptop brings to your bottom line.
            </p>

            {emailStatus === 'success' ? (
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="max-w-md mx-auto glass-card p-8 border-emerald-500/30 bg-emerald-500/5 mb-10 sm:mb-20"
              >
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Successfully Joined!</h3>
                <p className="text-slate-400">Thank you. You are on the early access list.</p>
              </motion.div>
            ) : (
              <form 
                className="max-w-md mx-auto flex flex-col gap-3 mb-10 sm:mb-20 px-2"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.target;
                  const formData = new FormData(form);
                  const emailInput = formData.get('email');
                  const phoneInput = formData.get('phone');
                  if (!emailInput || !phoneInput) return;
                  
                  setIsEmailSubmitting(true);
                  setEmailStatus('');
                  
                  // Check for duplicates in leads table
                  const { data: existing, error: checkError } = await supabase
                    .from('leads')
                    .select('id')
                    .or(`email.eq.${emailInput},phone.eq.${phoneInput}`)
                    .limit(1);

                  if (existing && existing.length > 0) {
                    setIsEmailSubmitting(false);
                    setEmailStatus('duplicate');
                    return;
                  }
                  
                  const { error } = await supabase
                    .from('leads')
                    .insert([{ email: emailInput, phone: phoneInput }]);
                    
                  setIsEmailSubmitting(false);
                  
                  if (error) {
                    console.error('Error saving lead:', error);
                    setEmailStatus('error');
                  } else {
                    setEmailStatus('success');
                  }
                }}
              >
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <input 
                      type="email" 
                      name="email"
                      placeholder="Email address" 
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 sm:py-4 pl-12 pr-4 focus:outline-none focus:border-emerald-500/50 transition-colors text-white text-base"
                    />
                  </div>
                  <div className="relative flex-1">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <input 
                      type="tel" 
                      name="phone"
                      placeholder="Phone number" 
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 sm:py-4 pl-12 pr-4 focus:outline-none focus:border-emerald-500/50 transition-colors text-white text-base"
                    />
                  </div>
                </div>
                <button 
                  type="submit" 
                  disabled={isEmailSubmitting}
                  className="w-full btn-primary whitespace-nowrap cursor-pointer py-3.5 sm:py-4 text-base disabled:opacity-50"
                >
                  {isEmailSubmitting ? 'Joining...' : 'Get Early Access'}
                  {!isEmailSubmitting && <ArrowRight className="w-4 h-4 ml-2 inline" />}
                </button>
                {emailStatus === 'duplicate' && (
                  <p className="text-red-400 text-sm mt-1">This email or number is already used!</p>
                )}
                {emailStatus === 'error' && (
                  <p className="text-red-400 text-sm mt-1">Error saving your details. Try again.</p>
                )}
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-14 sm:py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4">Why Resellers Need Fliptracker</h2>
            <p className="text-slate-400 text-sm sm:text-lg px-2">Transform your hardware flipping hustle into a scalable, data-driven business.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
            <FeatureCard 
              icon={DollarSign}
              title="Maximize Every Dollar"
              description="Know exactly how much money is tied up in inventory. Track every penny spent on donor parts and every dollar earned from harvested components."
              delay={0.1}
            />
            <FeatureCard 
              icon={Clock}
              title="Save Hours of Spreadsheets"
              description="Ditch the messy Excel files. Log your parts instantly and let Fliptracker calculate your ROI automatically, freeing up your time to find more deals."
              delay={0.2}
            />
            <FeatureCard 
              icon={TrendingUp}
              title="Scale Your Operation"
              description="With precise tracking, you can confidently take on more inventory. Understand what items flip fastest and reinvest your capital smarter."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-14 sm:py-24 px-4 bg-white/[0.02] relative border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4">Built for the Bench</h2>
            <p className="text-slate-400 text-sm sm:text-lg px-2">Streamlined workflows for complex hardware management.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
            <FeatureCard 
              icon={Zap}
              title="Component-Level Tracking"
              description="Split a dead laptop into harvested parts and donor boards. Track the profit of every single piece you extract in seconds."
              delay={0.1}
            />
            <FeatureCard 
              icon={LineChart}
              title="Upgrade & Repair Math"
              description="Log the exact cost of replacement parts and see how it impacts your final margin instantly on the dashboard."
              delay={0.2}
            />
            <FeatureCard 
              icon={AlertCircle}
              title="Stale Stock Alerts"
              description="Never let cash sit dead on a shelf. Automated alerts tell you when to drop prices on aging hardware to maintain cash flow."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Pricing / Lifetime Deal Section */}
      <section id="pricing" className="py-14 sm:py-24 px-4 relative">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-emerald-600/8 blur-[80px] sm:blur-[120px] rounded-full" />
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              <Flame className="w-4 h-4" /> Early Founders Deal — Only 100 Spots
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-3">Lifetime Access for ₹999</h2>
            <p className="text-slate-400 text-sm sm:text-base">Pay once. Use forever. No monthly fees, ever.</p>
          </div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="relative glass-card p-5 sm:p-8 border-emerald-500/20 overflow-visible"
          >
            {/* Crown badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1 rounded-full flex items-center gap-1 whitespace-nowrap z-10">
              <Crown className="w-3 h-3" /> LIFETIME FOUNDERS PLAN
            </div>

            <div className="flex items-end justify-center gap-2 mt-4 mb-6 sm:mb-8">
              <span className="text-slate-500 line-through text-base sm:text-xl">₹4,999/yr</span>
              <span className="text-4xl sm:text-5xl font-black text-white">₹999</span>
              <span className="text-slate-400 mb-1 text-sm sm:text-base">one-time</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-6 sm:mb-8">
              {[
                "Unlimited flip tracking",
                "Component-level asset splitting",
                "Full profit & ROI analytics",
                "Stale stock alerts",
                "Lifetime updates included",
                "Direct founder support access",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setPaymentOpen(true)}
              className="w-full btn-primary text-sm sm:text-base py-4 cursor-pointer min-h-[52px]"
            >
              <Crown className="w-5 h-5" /> Claim Lifetime Access — ₹999
            </button>
            <p className="text-center text-[10px] sm:text-xs text-slate-500 mt-2 sm:mt-3 flex items-center justify-center gap-1">
              <Shield className="w-3 h-3" /> Secure UPI payment · Details collected before payment
            </p>
          </motion.div>
        </div>
      </section>



      {/* Footer */}
      <footer id="contact" className="py-8 sm:py-12 border-t border-white/5 bg-[#030712] relative z-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-8">
          <div className="flex flex-col items-center md:items-start gap-1 sm:gap-2">
            <div className="flex items-center gap-2">
              <img src="/logo.svg" alt="Fliptracker" className="w-6 h-6 rounded" />
              <span className="font-bold text-lg sm:text-xl">Fliptracker</span>
            </div>
            <span className="text-slate-500 text-xs sm:text-sm">Founded by Aravindan</span>
          </div>
          <div className="text-slate-500 text-xs sm:text-sm">
            © {new Date().getFullYear()} Fliptracker. All rights reserved.
          </div>
          <div className="flex gap-8">
            <a href="mailto:freeweb272009@gmail.com" className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-2 text-xs sm:text-sm">
              <Mail className="w-4 h-4" />
              freeweb272009@gmail.com
            </a>
          </div>
        </div>
      </footer>
      <PaymentModal isOpen={paymentOpen} onClose={() => setPaymentOpen(false)} />
      
      {/* Floating Ask Question Button */}
      <button
        onClick={() => setAskOpen(true)}
        aria-label="Ask a question"
        className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-400 text-slate-900 p-4 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-transform hover:scale-110 flex items-center justify-center cursor-pointer"
      >
        <HelpCircle className="w-6 h-6" />
      </button>

      {/* Ask Question Modal */}
      {askOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full max-w-md bg-[#0a0f1a] border border-white/10 rounded-2xl p-6 relative"
          >
            <button onClick={() => setAskOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-xl font-bold text-white mb-2">Ask a Question</h3>
            <p className="text-sm text-slate-400 mb-6">We'll get back to you directly on your phone number.</p>
            
            {askStatus === 'success' ? (
              <div className="text-center py-8">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-white">Question Sent!</h4>
                <p className="text-slate-400 text-sm mt-2">We'll reach out to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleAskSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input 
                      type="tel" 
                      required
                      value={askForm.phone}
                      onChange={e => setAskForm({...askForm, phone: e.target.value})}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-emerald-500/50"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Your Question</label>
                  <textarea 
                    required
                    value={askForm.question}
                    onChange={e => setAskForm({...askForm, question: e.target.value})}
                    placeholder="Type your question here..."
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white text-sm focus:outline-none focus:border-emerald-500/50 resize-none"
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={askStatus === 'submitting'}
                  className="w-full btn-primary py-3"
                >
                  {askStatus === 'submitting' ? 'Sending...' : 'Send Question'}
                </button>
                {askStatus === 'error' && <p className="text-red-400 text-xs text-center">Failed to send. Please try again.</p>}
              </form>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default App;
