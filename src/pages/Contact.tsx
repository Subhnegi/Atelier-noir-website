import { useState, useEffect } from 'react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { cn } from '../components/ui/Container';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  
  useEffect(() => {
    document.title = 'Start a Project | Atelier Noir';
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate network request
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  const shouldReduceMotion = useReducedMotion();

  const revealVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: 'easeOut' as const } 
    }
  };

  return (
    <div className="bg-ivory min-h-screen py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Info Side */}
          <motion.div 
            className="lg:col-span-5 space-y-12"
            variants={revealVariants}
            initial="hidden"
            animate="visible"
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">
                Tell us about your project.
              </h1>
              <p className="text-lg text-charcoal/70 font-light leading-relaxed">
                We take on a select number of commissions each year. Please provide some details about your site and ambitions, and our studio team will be in touch to arrange an initial conversation.
              </p>
            </div>
            
            <div className="space-y-6 pt-8 border-t border-charcoal/10">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-charcoal/50 mb-2">Studio Enquiries</h3>
                <a href="mailto:studio@ateliernoir.com" className="text-charcoal hover:opacity-70 transition-opacity">
                  studio@ateliernoir.com
                </a>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-charcoal/50 mb-2">Location</h3>
                <address className="text-charcoal not-italic font-light">
                  123 Fictional Avenue<br />
                  Design District<br />
                  London, UK
                </address>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            className="lg:col-span-6 lg:col-start-7"
            variants={revealVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: shouldReduceMotion ? 0 : 0.2 }}
          >
            {status === 'success' ? (
              <div className="bg-linen p-8 md:p-12 text-center h-full flex flex-col justify-center border border-stone/20">
                <h3 className="text-2xl font-serif mb-4">Thank you for your enquiry.</h3>
                <p className="text-charcoal/70 font-light mb-8">
                  Your message has been received. We aim to respond to all viable enquiries within 48 hours.
                </p>
                <Button onClick={() => setStatus('idle')} variant="outline">
                  Submit another enquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      required 
                      className="w-full bg-transparent border-b border-charcoal/20 py-3 focus:border-charcoal outline-none transition-colors"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email *</label>
                    <input 
                      type="email" 
                      id="email" 
                      required 
                      className="w-full bg-transparent border-b border-charcoal/20 py-3 focus:border-charcoal outline-none transition-colors"
                      placeholder="jane@ateliernoir.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="type" className="text-sm font-medium">Project Type</label>
                  <select 
                    id="type" 
                    className="w-full bg-transparent border-b border-charcoal/20 py-3 focus:border-charcoal outline-none transition-colors rounded-none appearance-none cursor-pointer"
                  >
                    <option value="Architecture">Architecture</option>
                    <option value="Interior Design">Interior Design</option>
                    <option value="Spatial Planning">Spatial Planning</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="location" className="text-sm font-medium">Location (optional)</label>
                    <input 
                      type="text" 
                      id="location" 
                      className="w-full bg-transparent border-b border-charcoal/20 py-3 focus:border-charcoal outline-none transition-colors"
                      placeholder="City, Country"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="budget" className="text-sm font-medium">Approximate Budget (optional)</label>
                    <select 
                      id="budget" 
                      className="w-full bg-transparent border-b border-charcoal/20 py-3 focus:border-charcoal outline-none transition-colors rounded-none appearance-none cursor-pointer"
                    >
                      <option value="">Please select</option>
                      <option value="<500k">Under £500,000</option>
                      <option value="500k-1m">£500,000 - £1,000,000</option>
                      <option value="1m-5m">£1,000,000 - £5,000,000</option>
                      <option value=">5m">Over £5,000,000</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="description" className="text-sm font-medium">Project Description *</label>
                  <textarea 
                    id="description" 
                    required 
                    rows={4}
                    className="w-full bg-transparent border-b border-charcoal/20 py-3 focus:border-charcoal outline-none transition-colors resize-none"
                    placeholder="Tell us about the space, your goals, and timeline..."
                  ></textarea>
                </div>

                <div className="pt-4">
                  <Button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className={cn("w-full md:w-auto", status === 'submitting' && "opacity-70")}
                  >
                    {status === 'submitting' ? 'Sending...' : 'Submit Enquiry'}
                  </Button>
                  <p className="text-xs text-charcoal/50 mt-4 text-center md:text-left">
                    By submitting this form, you agree to our privacy policy.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
