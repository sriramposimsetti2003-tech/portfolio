import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

export default function UserNotRegisteredError() {
    return (
        <div className="flex items-center justify-center min-h-[70vh] px-6">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="w-full max-w-md bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/40"
            >
                <div className="p-8 text-center">
                    <div className="mx-auto mb-6 flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-lg">
                        <AlertTriangle className="w-8 h-8" />
                    </div>

                    <h1 className="text-3xl font-bold text-slate-900 mb-3">
                        Access Restricted
                    </h1>

                    <p className="text-slate-600 mb-6 leading-relaxed">
                        You are not registered to use this application.
                        Please contact the administrator to request access.
                    </p>

                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left text-sm text-slate-600">
                        <p className="font-medium mb-2">If you believe this is an error:</p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Verify you are logged in with the correct account</li>
                            <li>Contact the app administrator</li>
                            <li>Log out and sign in again</li>
                        </ul>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
