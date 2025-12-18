import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

// ✅ relative imports instead of @/
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [status, setStatus] = useState('idle'); // idle | sending | sent

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        // Simulated API call
        setTimeout(() => {
            setStatus('sent');

            setTimeout(() => {
                setStatus('idle');
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                });
            }, 3000);
        }, 1500);
    };

    return (
        <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-6"
        >
            {/* Name & Email */}
            <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label
                        htmlFor="name"
                        className="text-sm font-medium text-slate-700"
                    >
                        Name
                    </label>
                    <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="John Doe"
                        required
                        className="h-12 bg-white border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 rounded-xl transition-all"
                    />
                </div>

                <div className="space-y-2">
                    <label
                        htmlFor="email"
                        className="text-sm font-medium text-slate-700"
                    >
                        Email
                    </label>
                    <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="john@example.com"
                        required
                        className="h-12 bg-white border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 rounded-xl transition-all"
                    />
                </div>
            </div>

            {/* Subject */}
            <div className="space-y-2">
                <label
                    htmlFor="subject"
                    className="text-sm font-medium text-slate-700"
                >
                    Subject
                </label>
                <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                    }
                    placeholder="Project Inquiry"
                    required
                    className="h-12 bg-white border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 rounded-xl transition-all"
                />
            </div>

            {/* Message */}
            <div className="space-y-2">
                <label
                    htmlFor="message"
                    className="text-sm font-medium text-slate-700"
                >
                    Message
                </label>
                <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell me about your project..."
                    required
                    rows={5}
                    className="bg-white border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 rounded-xl resize-none transition-all"
                />
            </div>

            {/* Submit Button */}
            <Button
                type="submit"
                disabled={status !== 'idle'}
                className={`w-full h-14 rounded-xl text-base font-semibold transition-all duration-300 ${
                    status === 'sent'
                        ? 'bg-emerald-500 hover:bg-emerald-600'
                        : 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500'
                }`}
            >
                {status === 'idle' && (
                    <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                    </>
                )}

                {status === 'sending' && (
                    <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sending...
                    </>
                )}

                {status === 'sent' && (
                    <>
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Message Sent!
                    </>
                )}
            </Button>
        </motion.form>
    );
}
