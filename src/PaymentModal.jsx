import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Mail, Phone, CreditCard, CheckCircle2, Copy, ArrowRight } from 'lucide-react';

import { supabase } from './supabase';

const UPI_ID = '9445162349@ibl';
const AMOUNT = 999;

export const PaymentModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState('form'); // 'form' | 'qr' | 'done'
  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', upiId: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required';
    if (!form.phone.match(/^[6-9]\d{9}$/)) e.phone = 'Valid 10-digit Indian mobile number required';
    if (!form.upiId.trim()) e.upiId = 'Enter your UPI ID (e.g. name@upi)';
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitting(true);
    
    try {
      // Save to localStorage so you can review locally
      const existing = JSON.parse(localStorage.getItem('ft_paid_users') || '[]');
      existing.push({ ...form, amount: AMOUNT, timestamp: new Date().toISOString() });
      localStorage.setItem('ft_paid_users', JSON.stringify(existing));
      
      // Check for duplicates in Supabase
      const { data: existingUser, error: checkError } = await supabase
        .from('payments')
        .select('id')
        .or(`email.eq.${form.email},phone.eq.${form.phone}`)
        .limit(1);

      if (existingUser && existingUser.length > 0) {
        setSubmitting(false);
        setErrors({ 
          email: 'This email or phone is already used!', 
          phone: 'This email or phone is already used!' 
        });
        return;
      }

      // Save to Supabase
      const { error } = await supabase
        .from('payments')
        .insert([
          { 
            name: form.name, 
            email: form.email, 
            phone: form.phone, 
            upi_id: form.upiId,
            amount: AMOUNT,
            status: 'pending_verification'
          }
        ]);
        
      if (error) {
        console.error('Supabase Error:', error.message);
      }
    } catch (err) {
      console.error('Failed to save to Supabase:', err);
    }
    
    setSubmitting(false);
    setStep('qr');
  };

  const copyUPI = () => {
    navigator.clipboard.writeText(UPI_ID);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClose = () => { setStep('form'); setForm({ name: '', email: '', phone: '', upiId: '' }); setErrors({}); onClose(); };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}
          onClick={(e) => e.target === e.currentTarget && handleClose()}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-md sm:max-h-[90vh] max-h-[100dvh] bg-[#0a0f1a] border border-white/8 sm:rounded-2xl overflow-y-auto overflow-x-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-white/6 sticky top-0 bg-[#0a0f1a] z-10">
              <div>
                <h2 className="text-base sm:text-lg font-bold text-white">Lifetime Access — ₹{AMOUNT}</h2>
                <p className="text-[10px] sm:text-xs text-slate-400">One-time payment · No recurring fees</p>
              </div>
              <button onClick={handleClose} className="text-slate-500 hover:text-white transition-colors p-2 min-w-[44px] min-h-[44px] flex items-center justify-center">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Step: Form */}
            {step === 'form' && (
              <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <p className="text-xs sm:text-sm text-slate-400 mb-1 sm:mb-2">Fill in your details before payment so we can grant your lifetime access.</p>

                {[
                  { key: 'name', label: 'Full Name', placeholder: 'Aravindan K', icon: User, type: 'text' },
                  { key: 'email', label: 'Email Address', placeholder: 'you@gmail.com', icon: Mail, type: 'email' },
                  { key: 'phone', label: 'Phone Number', placeholder: '9876543210', icon: Phone, type: 'tel' },
                  { key: 'upiId', label: 'Your UPI ID', placeholder: 'yourname@bank', icon: CreditCard, type: 'text' },
                ].map(({ key, label, placeholder, icon: Icon, type }) => (
                  <div key={key}>
                    <label className="block text-xs text-slate-400 mb-1">{label}</label>
                    <div className="relative">
                      <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input
                        type={type}
                        value={form[key]}
                        onChange={(e) => { setForm(f => ({ ...f, [key]: e.target.value })); setErrors(er => ({ ...er, [key]: '' })); }}
                        placeholder={placeholder}
                        className={`w-full bg-white/5 border rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors text-base ${errors[key] ? 'border-red-500/60 focus:border-red-500' : 'border-white/8 focus:border-emerald-500/50'}`}
                      />
                    </div>
                    {errors[key] && <p className="text-red-400 text-xs mt-1">{errors[key]}</p>}
                  </div>
                ))}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full btn-primary mt-2 disabled:opacity-50 min-h-[48px] text-base"
                >
                  {submitting ? 'Saving...' : <>Proceed to Pay ₹{AMOUNT} <ArrowRight className="w-4 h-4" /></>}
                </button>
              </form>
            )}

            {/* Step: QR */}
            {step === 'qr' && (
              <div className="p-4 sm:p-6 flex flex-col items-center gap-3 sm:gap-4 text-center">
                <div className="flex items-center gap-2 text-emerald-400 text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" /> Details saved! Now complete the payment below.
                </div>

                {/* QR Code */}
                <div className="relative bg-white p-2 rounded-xl shadow-lg flex justify-center w-full max-w-[280px] sm:max-w-[350px]">
                  <img
                    src={`/qr.png.jpeg?v=${new Date().getTime()}`}
                    alt="PhonePe Payment QR"
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="w-full bg-white/[0.03] border border-white/6 rounded-xl p-3 sm:p-4">
                  <p className="text-xs text-slate-400 mb-1">Or pay directly via UPI ID</p>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-white font-mono text-sm font-semibold">{UPI_ID}</span>
                    <button
                      onClick={copyUPI}
                      className={`flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg border transition-all ${copied ? 'border-emerald-500/50 text-emerald-400 bg-emerald-500/10' : 'border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10'}`}
                    >
                      <Copy className="w-3 h-3" />
                      {copied ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                  <div className="mt-3 flex items-center justify-between border-t border-white/5 pt-3">
                    <span className="text-slate-400 text-xs">Amount</span>
                    <span className="text-white font-bold text-lg">₹{AMOUNT}</span>
                  </div>
                </div>

                <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-3 text-left w-full">
                  <p className="text-xs text-orange-200/90 leading-relaxed">
                    <strong className="text-orange-400">Important:</strong> We will manually verify your payment. You will only be added to the list if you have officially completed the payment and submitted the correct details. Once verified, we will send you an email regarding your payment status within 24 hours.
                  </p>
                </div>

                <button
                  onClick={() => setStep('done')}
                  className="w-full btn-primary min-h-[48px] text-base"
                >
                  I've Completed the Payment <CheckCircle2 className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Step: Done */}
            {step === 'done' && (
              <div className="p-5 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 text-center">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring' }}>
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-2">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                  </div>
                </motion.div>
                <h3 className="text-xl font-bold text-white">Verification Pending ⏳</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Thank you! We've received your details. Our team will now verify the transaction.
                  <strong className="text-white block mt-2">You will only be added to the list if the payment is officially confirmed and details match.</strong>
                </p>
                <p className="text-xs text-slate-500">We will send an email to <strong className="text-slate-300">{form.email}</strong> within 24 hours regarding your payment status.</p>
                <button onClick={handleClose} className="btn-primary w-full mt-2 min-h-[48px] text-base">
                  Close
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
