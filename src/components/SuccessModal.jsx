import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, X } from "lucide-react";

const SuccessModal = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                >
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="bg-zinc-900 border border-green-500/50 rounded-2xl p-8 max-w-md w-full relative shadow-[0_0_50px_-12px_rgba(34,197,94,0.5)]"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <div className="flex flex-col items-center text-center">
                            <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mb-6 ring-1 ring-green-500/30">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                >
                                    <CheckCircle className="w-12 h-12 text-green-500" strokeWidth={3} />
                                </motion.div>
                            </div>

                            <h3 className="font-heading text-3xl font-bold text-white mb-3">
                                Message Sent!
                            </h3>

                            <p className="text-zinc-400 mb-8 leading-relaxed">
                                Thank you for reaching out. We have received your message and will get back to you within <span className="text-green-400 font-semibold">24 hours</span>.
                            </p>

                            <button
                                onClick={onClose}
                                className="w-full py-4 px-6 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white rounded-xl font-bold tracking-wide transition-all duration-300 shadow-lg shadow-green-900/20 transform hover:-translate-y-1"
                            >
                                Continue Browsing
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SuccessModal;
