import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Download, FileText, CheckCircle2 } from 'lucide-react';

export default function CertificateModal({ certificate, isOpen, onClose }) {
  if (!isOpen || !certificate) return null;

  const isPdf = certificate.certificate?.endsWith('.pdf') || certificate.file?.endsWith('.pdf');
  const certUrl = certificate.certificate || certificate.file || '';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-[#0E1117] border border-[#1E232B] rounded-2xl shadow-luxury-card flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#151921] border-b border-[#1E232B]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#287BFF]/10 text-[#287BFF] flex items-center justify-center">
                <FileText size={16} />
              </div>
              <div>
                <h3 className="font-editorial font-bold text-base text-[#F5F6F8]">
                  {certificate.company || certificate.title || 'Verified Credential'}
                </h3>
                <span className="font-mono text-xs text-[#8B929E]">
                  {certificate.role || certificate.issuer || 'Official Certificate'}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {certUrl && (
                <a
                  href={certUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#1E232B] text-[#C6CAD0] hover:text-white transition-colors"
                  title="Open in new window"
                >
                  <ExternalLink size={16} />
                </a>
              )}
              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-[#1E232B] text-[#C6CAD0] hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Viewer Area */}
          <div className="flex-1 min-h-[400px] bg-[#08090B] p-4 overflow-auto flex items-center justify-center">
            {isPdf ? (
              <iframe
                src={`${certUrl}#toolbar=0`}
                className="w-full h-[65vh] rounded-lg border border-[#1E232B]"
                title="Certificate PDF Viewer"
              />
            ) : certUrl ? (
              <img
                src={certUrl}
                alt={certificate.title || 'Certificate'}
                className="max-h-[65vh] w-auto object-contain rounded-lg border border-[#1E232B]"
              />
            ) : (
              <div className="text-center p-8 text-[#8B929E]">
                <p>Credential document unavailable.</p>
              </div>
            )}
          </div>

          {/* Footer Details */}
          <div className="px-6 py-3 bg-[#151921] border-t border-[#1E232B] flex items-center justify-between text-xs font-mono text-[#8B929E]">
            <div className="flex items-center gap-2 text-emerald-400">
              <CheckCircle2 size={14} />
              <span>Verified Authentic Record</span>
            </div>
            {certUrl && (
              <a
                href={certUrl}
                download
                className="inline-flex items-center gap-1.5 text-[#287BFF] hover:underline"
              >
                <Download size={13} />
                <span>Download Document</span>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

